import { Timeline } from '@/components/ui/timeline'
import { useTranslations } from 'next-intl'

export function TimelineDemo() {
	const t = useTranslations('xususiyatlar')
	const data = [
		{
			title: <h2 className='text-black'>{t('quickBookingTitle')}</h2>,
			content: (
				<div id='xusus'>
					<p className='mb-8 text-xs font-bold text-black md:text-sm dark:text-neutral-200'>
						{t('quickBookingDesc')}
					</p>
					<p className='mb-8 text-xs font-normal text-black md:text-sm dark:text-neutral-200'>
						{t('quickBookingBody')}
					</p>

					<div className='grid grid-cols-2 gap-4'>
						<img
							src='https://www.ustabor.uz/upload/images/pole_stadion.jpg'
							alt='startup template'
							width={500}
							height={500}
							className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
						/>
						<img
							src='https://sportbuilding.uz/wp-content/uploads/2023/05/598fbfed99da970d66521f03f03a9e9c.jpg'
							alt='startup template'
							width={500}
							height={500}
							className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
						/>
					</div>
				</div>
			),
		},
		{
			title: <h2 className='text-black'>{t('mapsLangTitle')}</h2>,
			content: (
				<div>
					<p className='mb-8 text-xs font-bold text-black md:text-sm dark:text-neutral-200'>
						{t('title1')}
					</p>
					<p className='mb-8 text-xs font-normal text-black md:text-sm dark:text-neutral-200'>
						{t('mapsLangBody')}
					</p>
					<div className='grid grid-cols-2 gap-4'>
						<img
							src='https://www.glenclub.co.za/assets/images/article_image_5/membership.jpg'
							alt='hero template'
							width={500}
							height={500}
							className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
						/>
						<img
							src='https://tenniscourtsuk.co.uk/images/1920/11689034/Pickleball-Main.jpg'
							alt='feature template'
							width={500}
							height={500}
							className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
						/>
					</div>
				</div>
			),
		},
		{
			title: <h2 className='text-black'>{t('paymentsTitle')}</h2>,
			content: (
				<div>
					<p className='mb-4 text-xs font-bold  text-black md:text-sm dark:text-neutral-200'>
						{t('title2')}
					</p>
					<div className='mb-8'>
						<div className='flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300'>
							{t('paymentsBody')}
						</div>
					</div>
					<div className='grid grid-cols-2 gap-4'>
						<img
							src='https://click.uz/click/images/click-white.jpg'
							alt='hero template'
							width={500}
							height={500}
							className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
						/>

						<img
							src='https://payme.uz/download/android/assets/images/og-image.png'
							alt='bento template'
							width={500}
							height={500}
							className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
						/>
					</div>
				</div>
			),
		},
	]
	return (
		<div className='relative w-full overflow-clip'>
			<Timeline data={data} />
		</div>
	)
}
