'use client'

import { Instagram, Mail, Phone, Send } from 'lucide-react'
import { useTranslations } from 'next-intl'

const Footer = () => {
	const t = useTranslations()
	return (
		<footer
			id='bog'
			className='bg-white dark:bg-black text-gray-800 rounded-t-[50px] dark:text-gray-200 border-t border-black/20 dark:border-white/20 px-6 py-10 mt-16'
		>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
				{/* Contact Section */}
				<div className='space-y-4'>
					<h3 className='text-lg font-semibold'>{t('contactUs')}</h3>
					<ul className='space-y-2'>
						<li className='flex items-center gap-2'>
							<Phone className='w-4 h-4' />
							<a href='tel:+998334243777' className='hover:underline'>
								+998 33 424 37 77
							</a>
						</li>
						<li className='flex items-center gap-2'>
							<Send className='w-4 h-4' />
							<a
								href='https://t.me/pitchbookuz'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline'
							>
								{t('telegram')}
							</a>
						</li>
						<li className='flex items-center gap-2'>
							<Instagram className='w-4 h-4' />
							<a
								href='https://instagram.com/pitchbook.uz'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline'
							>
								{t('instagram')}
							</a>
						</li>
						<li className='flex items-center gap-2'>
							<Mail className='w-4 h-4' />
							<a
								href='pitchbookuz@gmail.com'
								target='_blank'
								className='hover:underline'
							>
								pitchbookuz@gmail.com
							</a>
						</li>
					</ul>
				</div>

				{/* Call to Action Section */}
				<div className='flex flex-col items-start md:items-end justify-between'>
					<h2 className='text-xl md:text-2xl font-bold max-w-xs md:max-w-sm text-end animate-pulse'>
						{t('slogan')}
					</h2>
				</div>
			</div>

			<div className='mt-10 text-center text-sm text-gray-600 dark:text-gray-400'>
				{t('copyright')}
			</div>
		</footer>
	)
}

export default Footer
