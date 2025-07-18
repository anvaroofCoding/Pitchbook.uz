'use client'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { useTranslations } from 'use-intl'

export function BackgroundBeamsWithCollisionDemo() {
	const t = useTranslations('xususiyatlar')
	return (
		<BackgroundBeamsWithCollision className='mt-20  h-[100px] text-center lg:h-[300px]'>
			<h2 className='text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight flex flex-col gap-0 items-center justify-center'>
				{t('main_gallery')}
				<div className='relative mx-auto text-center w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]'>
					<div className='relative bg-clip-text text-center text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500'>
						<span className='text-center block'> {t('are_you_aware')}</span>
					</div>
				</div>
			</h2>
		</BackgroundBeamsWithCollision>
	)
}
