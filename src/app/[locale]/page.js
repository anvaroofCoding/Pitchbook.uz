import { AnimatedTestimonialsDemo } from '@/components/AnimatedTestimonialsDemo'
import { AppleCardsCarouselDemo } from '@/components/AppleCardsCarouselDemo'
import Call from '@/components/call'
import FaqAccordion from '@/components/FaqAccordion'
import { TimelineDemo } from '@/components/timelinesDemo'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { HeroHighlightDemo } from '../../components/heroDemoEffect'

export default function HomePage() {
	const t = useTranslations('HomePage')
	return (
		<div>
			<div className=''>
				<HeroHighlightDemo />
			</div>
			<div>
				<TimelineDemo />
			</div>
			<div className='py-[0px]'>
				{/* <BackgroundBeamsWithCollisionDemo /> */}
				<AppleCardsCarouselDemo />
			</div>
			<Link href={'tel:+998334243777'}>
				<div className='fixed bottom-0 -right-10 z-50'>
					<Call />
				</div>
			</Link>
			<div className='py-[100px]'>
				<AnimatedTestimonialsDemo />
			</div>
			<div>
				<FaqAccordion />
			</div>
		</div>
	)
}
