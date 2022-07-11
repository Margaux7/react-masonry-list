import React, { useLayoutEffect, useState } from 'react';
import Layout from '../index';
import style from './App.module.css';
import Logo from './logo.png';

const IMGS = [
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzkrcyypqj618g0xcwgo02.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzks3n27aj61hc0xcat102.jpg',
		info: 'text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzksgzsybj61z418g7ol02.jpg',
		info: 'text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzksv0h7gj61hc0u0tdx02.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzkt5gxw9j61hc0xcdpf02.jpg',
		info: 'text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzktfaqz6j61xg19rqf202.jpg',
		info: 'text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzktq63t5j61hc0u0h1u02.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzku6kw6ij61hc0xctqp02.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzkufuh54j61hc0u0tih02.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzkwebtjdj61z4140quf02.jpg',
		info: 'text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzkwto4ewj61hc0u07wh02.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzkxb4tzjj61z41bf1kx02.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzkyzta4qj61hc0u0dv002.jpg',
		info: 'text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzl0c3utgj61hc0u07f402.jpg',
		info: 'text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzl115he5j61hc0u015x02.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzl1vtzd4j61hc0u0k8b02.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'http://tva1.sinaimg.cn/mw690/002fzk4tly1guzl29gt8zj61hc0uaqv702.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzl2p6u2wj61hc0u0qt202.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzl394m45j61hc0u0dia02.jpg',
		info: 'text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzl3yultdj61hc0u0jz702.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzl3nmd7dj61hc0u04cu02.jpg',
		info: 'text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzl4f2m90j63fh1wwdy602.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzl5dora3j621x1lvb2f02.jpg',
		info: 'text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzl4w0rv1j63fh1wwamn02.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzl6zb3wsj61hc0u8kik02.jpg',
		info: 'text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzl7otow4j61hc0u041202.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzl82aimsj618g0p0ngk02.jpg',
		info: 'text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzl8likrbj61hc0u0e8202.jpg',
		info: 'text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzl8yfxmfj61hc0u0dka02.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzl9e8m4gj60sg0g0q5j02.jpg',
		info: 'text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzlan2i5ej61hc0u07wh02.jpg',
		info: 'text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzlb19946j61hc0u07eq02.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzlbm8pu1j61hc0u0ten02.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
	{
		imgSrc:
			'https://tva1.sinaimg.cn/mw690/002fzk4tly1guzlbwrhecj61hc0u0qlw02.jpg',
		info: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
	},
];

const App = () => {
	const _getColCount = (size) => {
		if (size < 1024) {
			return 2;
		}

		return 3;
	};

	const [items, setItems] = useState(IMGS.slice(0, 10));
	const [colCount, setColCount] = useState(_getColCount(window.innerWidth));

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
			<p className={style.title}>
				<a
					href='https://github.com/Margaux7/react-masonry-list'
					target='_blank'
					rel='noreferrer'
					className={style.link}
				>
					<img src={Logo} alt='' />
					React Masonry List Demo
				</a>
			</p>
			<Layout
				colCount={colCount}
				minWidth={100}
				items={items.map((el, i) => (
					<div key={el.imgSrc}>
						<img src={el.imgSrc} />
						<p className={style.id}>{i + 1}</p>
						<p className={style.content}>{el.info}</p>
					</div>
				))}
			></Layout>
		</div>
	);
};

export default App;
