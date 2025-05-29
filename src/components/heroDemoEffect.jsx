'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'use-intl'
import Button from './Btn'
import { HeroHighlight, Highlight } from './ui/hero-highlight'

export function HeroHighlightDemo() {
	const t = useTranslations()
	return (
		<HeroHighlight>
			<motion.h1
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: [20, -5, 0],
				}}
				transition={{
					duration: 0.5,
					ease: [0.4, 0.0, 0.2, 1],
				}}
				className='text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '
			>
				<div className='h-[750px] flex flex-col justify-center items-center gap-[20px]'>
					{t('title')}
					<Highlight className='text-black dark:text-white'>
						{t('cta')}
					</Highlight>
					{/* <button>{t('download')}</button>≥÷ */}
					<Button />
				</div>
			</motion.h1>
		</HeroHighlight>
	)
}
