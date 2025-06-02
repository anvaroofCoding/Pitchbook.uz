'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react' // iconka uchun
import { useTranslations } from 'next-intl'
import { useState } from 'react'

const FaqAccordion = () => {
	const [openIndex, setOpenIndex] = useState(null)
	const t = useTranslations()

	const toggle = index => {
		setOpenIndex(prev => (prev === index ? null : index))
	}

	const items = [
		{ q: 'booking_q', a: 'booking_a' },
		{ q: 'language_q', a: 'language_a' },
		{ q: 'fees_q', a: 'fees_a' },
		{ q: 'cancel_q', a: 'cancel_a' },
		{ q: 'partner_q', a: 'partner_a' },
		{ q: 'payment_q', a: 'payment_a' },
		{ q: 'profile_q', a: 'profile_a' },
		{ q: 'map_q', a: 'map_a' },
		{ q: 'support_q', a: 'support_a' },
		{ q: 'update_q', a: 'update_a' },
	]

	return (
		<div className='max-w-3xl mx-auto p-4 space-y-4'>
			<h2 className='text-3xl font-bold text-center mb-6'>{t('faq_title')}</h2>

			{items.map((item, index) => (
				<div
					key={index}
					className={cn(
						'rounded-xl border bg-background text-foreground shadow-md transition-colors duration-300',
						openIndex === index ? 'border-primary' : 'border-muted'
					)}
				>
					<button
						onClick={() => toggle(index)}
						className='w-full flex justify-between items-center p-4 text-left font-medium text-lg hover:bg-accent/40 transition-colors'
					>
						<span>{t(item.q)}</span>
						<motion.span
							initial={false}
							animate={{ rotate: openIndex === index ? 180 : 0 }}
							transition={{ duration: 0.3 }}
						>
							<ChevronDown className='w-5 h-5 text-muted-foreground' />
						</motion.span>
					</button>

					<AnimatePresence initial={false}>
						{openIndex === index && (
							<motion.div
								key={`content-${index}`}
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: 'auto', opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<div className='px-4 pb-4 text-muted-foreground'>
									{t(item.a)}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			))}
		</div>
	)
}

export default FaqAccordion
