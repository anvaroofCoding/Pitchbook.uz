'use client'

import { Cloud, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTranslations } from 'use-intl'
import logodark from '../Assets/img/darklogo.jpg'
import logo from '../Assets/img/logo2/logo.png'

const languages = [
	{ code: 'uz', label: 'UZ' },
	{ code: 'en', label: 'EN' },
	{ code: 'ru', label: 'RU' },
]

const Navbar = () => {
	const { theme, setTheme } = useTheme()
	const [scrolling, setScrolling] = useState(false)
	const pathname = usePathname()
	const router = useRouter()
	const currentLocale = pathname.split('/')[1]

	const t = useTranslations()

	const navLinks = [
		{ href: t('features'), label: t('features') },
		{ href: t('installation'), label: t('installation') },
		{ href: t('faq'), label: t('faq') },
		{ href: t('contact'), label: t('contact') },
	]

	useEffect(() => {
		const handleScroll = () => {
			setScrolling(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const changeLocale = newLocale => {
		const segments = pathname.split('/')
		segments[1] = newLocale
		router.push(segments.join('/'))
	}

	return (
		<div
			className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 px-4 border-b dark:border-white/20 border-black/20 ${
				scrolling
					? 'bg-white dark:bg-gray-800/80 py-2 shadow-md rounded-b-[50px]'
					: 'bg-transparent py-4 '
			}`}
		>
			<div className='container flex flex-col md:flex-row items-center justify-between gap-4'>
				{/* Logo */}
				<Link href={`/${currentLocale}`}>
					<Image
						src={theme === 'dark' ? logodark : logo}
						alt='Logo'
						width={0}
						height={0}
						className='w-[100px]'
					/>
				</Link>

				{/* Navigation Links */}
				<ul className='flex gap-6 justify-center items-center'>
					{navLinks.map(({ href, label }) => (
						<li key={href}>
							<Link
								href={`#${href}`}
								className='relative px-2 py-1 lg:text-md text-sm font-medium text-gray-800 dark:text-white group'
							>
								{label}
								<span className='absolute left-0 bottom-0 h-[2px] w-full scale-x-0 origin-center bg-green-500 transition-transform duration-300 group-hover:scale-x-100'></span>
							</Link>
						</li>
					))}
				</ul>

				{/* Right Side: Language + Theme */}
				<div className='flex items-center gap-4'>
					{/* Language Switcher */}
					{languages.map(({ code, label }) => (
						<button
							key={code}
							className={`text-xs font-semibold hover:underline transition-colors duration-200 ${
								code === currentLocale
									? 'text-green-600'
									: 'text-gray-600 dark:text-gray-300'
							}`}
							onClick={() => changeLocale(code)}
						>
							{label}
						</button>
					))}

					{/* Theme Toggle */}
					<button
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						className='relative p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow hover:scale-105 transition-transform duration-300'
					>
						{theme === 'dark' ? (
							<div className='flex items-center gap-1'>
								<Sun className='w-4 h-4' /> <Cloud className='w-4 h-4' />
							</div>
						) : (
							<div className='flex items-center gap-1'>
								<Moon className='w-4 h-4' /> <Cloud className='w-4 h-4' />
							</div>
						)}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
