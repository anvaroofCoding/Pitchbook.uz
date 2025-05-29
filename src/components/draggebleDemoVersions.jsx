import {
	DraggableCardBody,
	DraggableCardContainer,
} from '@/components/ui/draggable-card'

export function DraggableCardDemo() {
	const items = [
		{
			title: 'Chilonzor',
			image:
				'https://static.euronews.com/articles/stories/08/67/38/40/1440x810_cmsv2_8a0410c9-a657-55c1-85fb-05c3d3c5f2cb-8673840.jpg',
			className: 'absolute top-10 left-[20%] rotate-[-5deg]',
		},
		{
			title: 'Sergili',
			image: 'https://blog.marathonbet.ru/wp-content/uploads/2021/03/1.jpg',
			className: 'absolute top-40 left-[25%] rotate-[-7deg]',
		},
		{
			title: 'Bektosh',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFg0OJ0FwPOt5RHWV-Uo8cQ5PuBmlFnLfRcQ&s',
			className: 'absolute top-5 left-[40%] rotate-[8deg]',
		},
		{
			title: 'Metallurg',
			image:
				'https://openaire.vodagorki.ru/nBkSUhL2jFYmns62PqzZvc62gYT28pj22yHFh_fH_nKUPXuaDyXTjHou4MVO6BCVoZKf9GqVe5Q_CPawk214LyWK9G1N5ho=YigDMHQf7dzZbcrITFKrnA.jpg',
			className: 'absolute top-32 left-[55%] rotate-[10deg]',
		},
		{
			title: 'Qoqon 1912',
			image: 'https://championat.asia/upload/storage/485536_680.jpg',
			className: 'absolute top-20 right-[35%] rotate-[2deg]',
		},
		{
			title: 'New Zealand',
			image:
				'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			className: 'absolute top-24 left-[45%] rotate-[-7deg]',
		},
		{
			title: 'Katta Tenis',
			image:
				'https://tarix.sinaps.uz/wp-content/uploads/2024/01/tennis_oyini_tarixi_single.webp',
			className: 'absolute top-8 left-[30%] rotate-[4deg]',
		},
	]
	return (
		<DraggableCardContainer className='relative flex min-h-screen w-full items-center justify-center overflow-clip'>
			<p className='absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800'>
				If its your first day at Fight Club, you have to fight.
			</p>
			{items.map(item => (
				<DraggableCardBody className={item.className}>
					<img
						src={item.image}
						alt={item.title}
						className='pointer-events-none relative z-10 h-80 w-80 object-cover'
					/>
					<h3 className='mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300'>
						{item.title}
					</h3>
				</DraggableCardBody>
			))}
		</DraggableCardContainer>
	)
}
