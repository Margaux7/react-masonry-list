import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ItemProps } from './Item';
import style from './Layout.module.css';

const DEFAULT_GAP = 10;

interface LayoutProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  gap?: number;
  colCount?: number;
  minWidth?: number;
}

interface ImgLoadStatus {
  img: HTMLImageElement;
  loaded: boolean;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];
  const gap = props.gap || DEFAULT_GAP;
  const minWidth = props.minWidth || 300;

  const [spanArray, setSpanArray] = useState<number[]>([]);
  const [allImgLoaded, setAllImgLoaded] = useState<boolean>(false);
  const layoutRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setAllImgLoaded(false);

    const appendedImgStatusArray = _getAppendedImgLoadStatusArray();
    // Child containing img appended, should wait for img loading
    const needWaitImgLoading = !!appendedImgStatusArray.length;

    if (needWaitImgLoading) {
      _waitImgLoading(appendedImgStatusArray);
    } else {
      _resizeItems();
    }
  }, [props.children]);

  useLayoutEffect(() => {
    const resizeListener = () => {
      _resizeItems();
    };

    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  useEffect(() => {
    if (allImgLoaded) {
      _resizeItems();
    }
  }, [allImgLoaded]);

  const _getClassName = (classNames: string[]) => {
    return classNames.filter((e) => e).join(' ');
  };

  const _getAppendedImgLoadStatusArray = (): ImgLoadStatus[] => {
    const newImgArr: ImgLoadStatus[] = [];

    if (null !== layoutRef.current) {
      Array.from(layoutRef.current.children).forEach((el) => {
        const imgs = el.firstElementChild?.getElementsByTagName('img');
        if (imgs?.length) {
          newImgArr.push(
            ...Array.from(imgs)
              .filter((img) => !img.onload)
              .map((img) => ({
                img,
                loaded: false,
              }))
          );
        }
      });
    }

    return newImgArr;
  };

  const _waitImgLoading = (appendedImgStatusArray: ImgLoadStatus[]): void => {
    appendedImgStatusArray.forEach((item) => {
      if (!item.img.onload) {
        item.img.onload = item.img.onerror = () => {
          item.loaded = true;
          if (!appendedImgStatusArray.some((e) => e.loaded === false)) {
            setAllImgLoaded(true);
          }
        };
      }
    });
  };

  const _resizeItems = () => {
    if (null !== layoutRef.current) {
      const newSpanArray: number[] = [];
      const items = Array.from(layoutRef.current.children);
      items.forEach((el) => {
        const itemHeight =
          el.firstElementChild?.getBoundingClientRect().height || 0;
        newSpanArray.push(Math.ceil((itemHeight + gap) / gap));
      });
      setSpanArray(newSpanArray);
    }
  };

  return (
    <div
      className={_getClassName([style.layout, props.className])}
      ref={layoutRef}
      style={{
        gridTemplateColumns: `repeat(${props.colCount || 2}, minmax(${
          minWidth || 300
        }px,1fr))`,
        gridGap: `${gap}px`,
      }}
    >
      {children.map((child, i) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...(child.props as ItemProps),
            key: i,
            gridSpan: spanArray[i],
          });
        }
        return child;
      })}
    </div>
  );
};

export default Layout;
