import React, { useLayoutEffect, useState } from 'react';
import Layout from '../index';
import style from './App.module.css';
import Logo from './logo.png';

[
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217185678-a885e886-3463-48d1-96e9-af185225fdb7.jpg\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217185712-fee24ee4-c10e-4c6b-865f-f969f023367f.jpg\r',
    info: 'text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217185727-e152b15d-8e56-42be-80e1-c47fd44e3e3d.jpg\r',
    info: 'text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217185740-7b960b99-dffb-4397-bc2d-f524ae21d82a.png\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217185748-694bb7aa-2f49-4c5a-828b-dbce0369a486.jpg\r',
    info: 'text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217185756-d5fd770a-71ce-4a18-9219-0150a22715d7.jpg\r',
    info: 'text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217185799-b270a71e-b0b5-4e80-8ab2-9dfc3ca7c3f2.jpg\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217185804-c1427b69-7751-4ee8-9afd-71543912de29.png\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217185842-da9af2a6-8acb-481e-8831-12a54c7d1319.jpg\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217185857-e06bc163-d895-447e-b60c-893af378a03b.png\r',
    info: 'text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217185864-4274cbf1-4231-431d-a1f0-e5218aa43985.jpg\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217185875-6376790f-1ac1-44cb-99fa-ce60e6b2fdb0.png\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217185887-5b7f4d5c-be41-4f2a-9f85-c35df23019d6.png\r',
    info: 'text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217185890-69257df8-46c7-469d-a15c-29c6a79e5f00.png\r',
    info: 'text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217186099-ca7320f4-4222-4764-8170-a64edd5f418f.png\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217186114-3b34d828-727c-41c1-9590-d473375d4c77.png\r',
    info: 'text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217186137-e51057ff-c975-46c1-9017-dff87ce5d4b1.png\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217186154-baf5713d-cd92-4c78-8d67-72333cb3b8e2.jpg\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217186169-c3786fee-4307-4637-886a-d47147b8d14b.jpg\r',
    info: 'text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217186176-aa18dfb8-c6da-4a5f-8913-790ee0944bd8.jpg\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217186296-b6a3f639-a876-48a5-a11a-a7af5b3444aa.jpg\r',
    info: 'text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217186233-eb3fa048-9cc7-4cf7-b0d3-4c97ac9787a7.jpg\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217186248-d6a14d76-b660-4c6f-8ab0-de5774d10c21.jpg\r',
    info: 'text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217186302-2a3f829b-a760-4d63-98cc-9ed545165297.png\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217187089-d045be42-50ed-4f82-9bb5-bc83a516b0bc.jpg\r',
    info: 'text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217187135-8a335281-d4a2-4182-ac98-79bfa40e8a80.png\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217187170-22f72a7f-a0be-49d6-9b5f-a0777c238d64.png\r',
    info: 'text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217187213-4e867fd7-52db-4687-8246-baffc4f77ee1.png\r',
    info: 'text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217187230-e76e05f0-3767-4a29-b2c7-e1b105d9ad77.jpg\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217187243-9ead8d00-dd05-454a-b803-2af4f278f65b.png\r',
    info: 'text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217187253-238b9da1-666c-447a-966c-453b1bb07782.jpg\r',
    info: 'text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217187270-4caa3cf8-2026-4763-a9be-d98244e48116.png\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217187281-1b72dd11-798e-4b76-8982-0e5dc50480ef.png\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217187292-f66078f5-ac68-436f-add9-41287f27a078.jpg\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217187305-cd3ed25b-49bb-4d79-ba49-edb1e045b9e4.jpg\r',
    info: 'text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217187319-77fe99ca-29bb-4977-a021-5aabf0b922f8.jpg\r',
    info: 'text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217187329-1dba6bc0-29c8-4080-b923-04a83c9ee0e7.png\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
  {
    imgSrc:
      'https://user-images.githubusercontent.com/16912880/217187338-c66c6921-2bfb-41b0-acba-9af8a9b674ac.png\r',
    info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  },
];

const App = () => {
  const _getColCount = (size) => {
    if (size < 1024) {
      return 2;
    }

    return 3;
  };

  const [items, setItems] = useState(IMGS.slice(0, 15));
  const [colCount, setColCount] = useState(_getColCount(window.innerWidth));
  const [imgOnly, setImgOnly] = useState(false);

  useLayoutEffect(() => {
    const onScroll = () => {
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        setItems((prevItems) => [
          ...prevItems,
          ...IMGS.slice(prevItems.length, prevItems.length + 10),
        ]);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useLayoutEffect(() => {
    const onResize = () => {
      setColCount(_getColCount(window.innerWidth));
    };
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.title}>
        <a
          href='https://github.com/Margaux7/react-masonry-list'
          target='_blank'
          rel='noreferrer'
          className={style.link}
        >
          <img src={Logo} alt='' />
          React Masonry List Demo
        </a>
        <div className={style.right}>
          <div className={style['mode-button']}>
            <label>Image Only</label>
            <input
              type='checkbox'
              id='switch'
              value={imgOnly}
              onChange={() => setImgOnly(!imgOnly)}
            />
            <label htmlFor='switch' className={style.toggle}></label>
          </div>
        </div>
      </div>
      <Layout
        colCount={colCount}
        minWidth={100}
        items={items.map((el, i) =>
          imgOnly ? (
            <img src={el.imgSrc} key={el.imgSrc} />
          ) : (
            <div key={el.imgSrc}>
              <img src={el.imgSrc} />
              <p className={style.id}>{i + 1}</p>
              <p className={style.content}>{el.info}</p>
            </div>
          )
        )}
      ></Layout>
    </div>
  );
};

export default App;
