import { BackgroundBeamsWithCollisionDemo } from '@/components/BackgroundBeans'
import { DraggableCardDemo } from '@/components/draggebleDemoVersions'
import { TimelineDemo } from '@/components/timelinesDemo'
import { useTranslations } from 'next-intl'
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
			<div className='py-[100px]'>
				<BackgroundBeamsWithCollisionDemo />
				<DraggableCardDemo />
			</div>
		</div>
	)
}
