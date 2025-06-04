import { useTranslations } from 'next-intl'
import { AnimatedTestimonials } from './ui/animated-testimonials'

export function AnimatedTestimonialsDemo() {
	const t = useTranslations() // yoki const { t } = useTranslation()

	const testimonials = [
		{
			quote: t('quote1'),
			name: t('name1'),
			src: t('src1'),
		},
		{
			quote: t('quote2'),
			name: t('name2'),
			src: t('src2'),
		},
		{
			quote: t('quote3'),
			name: t('name3'),
			src: 'https://assets.api.uizard.io/api/cdn/stream/3a9ed940-753b-4b16-a64e-cdaa684ef6dc.png',
		},
		{
			quote: t('quote4'),
			name: t('name4'),
			src: t('src4'),
		},
	]
	return <AnimatedTestimonials testimonials={testimonials} />
}
