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
		</div>
	)
}
