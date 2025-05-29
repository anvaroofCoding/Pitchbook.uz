'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export default function LoadingWrapper({ children }) {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 1500)
		return () => clearTimeout(timer)
	}, [])

	const t = useTranslations()

	if (loading) {
		return (
			<div className='fixed inset-0 flex items-center justify-center bg-white dark:bg-black text-xl font-bold z-50'>
				<div className='w-[500px]'>
					<DotLottieReact
						src='https://lottie.host/11326a6c-8041-4592-a828-149622299a2f/Ju0NFNaZoT.lottie'
						loop
						autoplay
					/>
					<h1 className='text-center text-black dark:text-white'>
						{t('loading')}
					</h1>
				</div>
			</div>
		)
	}

	return <>{children}</>
}
