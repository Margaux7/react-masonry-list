import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Item from './Item';
import style from './index.module.css';

const DEFAULT_GAP = 10;
const DEFAULT_MIN_WIDTH = 300;
const DEFAULT_COL_COUNT = 3;

interface LayoutProps {
  items?: React.ReactNode[];
  className?: string;
  gap?: number;
  colCount?: number;
  minWidth?: number;
}

interface ImgLoadStatus {
  img: HTMLImageElement;
  loaded: boolean;
}

const throttle = (fn: () => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout> | null;
  return (...args: any) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
};

const Layout: React.FC<LayoutProps> = ({
  items = [],
  className,
  gap = DEFAULT_GAP,
  colCount = DEFAULT_COL_COUNT,
  minWidth = DEFAULT_MIN_WIDTH,
}: LayoutProps) => {
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
  }, [items]);

  useLayoutEffect(() => {
    const resizeListener = throttle(() => {
      _resizeItems();
    }, 300);

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
        const imgs = el.getElementsByTagName('img');

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
      const container = layoutRef.current;
      const newSpanArray: number[] = [];
      const items = Array.from(container.children);
      items.forEach((el) => {
        const firstChild = el.firstElementChild;
        if (firstChild) {
          (firstChild as any).style.height = 'auto';
        }
        const itemHeight = firstChild?.getBoundingClientRect().height || 0;
        const gridSpan = Math.ceil((itemHeight + gap) / gap);
        newSpanArray.push(gridSpan);
        const gridHeight = gridSpan * gap;
        if (firstChild) {
          //@ts-ignore
          firstChild.style.height = `${gridHeight - gap}px`;
        }
      });
      setSpanArray(newSpanArray);
    }
  };

  return (
    <div
      className={_getClassName([style.layout, className])}
      ref={layoutRef}
      style={{
        gridTemplateColumns: `repeat(${colCount || 3}, minmax(${
          minWidth || 300
        }px,1fr))`,
        gridGap: `${gap}px`,
      }}
    >
      {items.map((item, i) => {
        if (React.isValidElement(item)) {
          return (
            <Item key={item.key || i} gridSpan={spanArray[i]}>
              {item}
            </Item>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Layout;
