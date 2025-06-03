'use client'

import { Card, Carousel } from '@/components/ui/apple-cards-carousel'

export function AppleCardsCarouselDemo() {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} />
	))

	return (
		<div className='w-full h-full'>
			<Carousel items={cards} />
		</div>
	)
}

const data = [
	{
		category: 'Fudbol stadion',
		title: 'Chilonzor',
		src: 'https://i.ebayimg.com/images/g/QU4AAOSwy0xi1~Ur/s-l1200.jpg',
	},
	{
		category: 'Fudbol stadion',
		title: 'Sergili',
		src: 'https://www.earlsmann.co.uk/wp-content/uploads/2024/11/PXL_20241105_201315907.jpg',
	},
	{
		category: 'Fudbol stadion',
		title: 'Bunyodkor Chilonzor',
		src: 'https://d1tm14lrsghf7q.cloudfront.net/public/media/3134/conversions/283792-thumb.jpg',
	},

	{
		category: 'Fudbol stadion',
		title: 'Yangi Stadion',
		src: 'https://preview.free3d.com/img/2016/09/2399353989658314517/uwmhxmb4.jpg',
	},
	{
		category: 'Tennis Rekord',
		title: 'Eco Park',
		src: 'https://static.wixstatic.com/media/eddda1edfd9648368cba99f37e6d5778.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/eddda1edfd9648368cba99f37e6d5778.jpg',
	},
	{
		category: 'Tennis Rekord',
		title: 'Yunusobod',
		src: 'https://thumbs.6sqft.com/wp-content/uploads/2017/02/17053144/grand-central-tennis-court-2.jpg?w=1560&format=webp',
	},
]
