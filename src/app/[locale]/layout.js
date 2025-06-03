import CustomCursor from '@/components/CustomCursor'
import LoadingWrapper from '@/components/LoadingWrapper'
import Layout from '@/Layout/Layout'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadataUz = {
	title:
		'Pitchbook - Toshkentdagi Stadion va Sport Zallarini Onlayn Bron Qiling',
	description:
		'Pitchbook — Toshkent shahrida stadion, tennis korti, sport zali, suzish havzasi va boshqa sport inshootlarini onlayn bron qilish uchun eng tezkor va qulay xizmat. Endi Toshkentdagi sport joylarini topish va band qilish juda oson!',
	keywords: [
		'pitchbook',
		'toshkent sport zallari',
		'toshkent stadion bron qilish',
		'toshkent futbol maydoni',
		'toshkent tennis korti bron qilish',
		'toshkentda sport zal topish',
		'toshkent sport inshootlari',
		'toshkent suzish havzalari',
		'toshkent sport joyi band qilish',
		'toshkent futbol o‘ynash joyi',
		'onlayn bron qilish toshkent',
		'toshkent sport xizmatlari',
		'sport zal bron qilish',
		'stadion bron qilish ilova',
		'pitchbook uz',
	],
	icons: {
		icon: '/logo.jpg',
	},
}

export const metadataRu = {
	title: 'Pitchbook - Онлайн Бронирование Стадионов и Спортзалов',
	description:
		'Pitchbook — это удобный сервис для онлайн бронирования стадионов, теннисных кортов, спортивных залов, бассейнов и других спортивных объектов. Быстро, легко и доступно!',
	keywords: [
		'pitchbook',
		'бронирование стадиона',
		'аренда спортзала',
		'теннисный корт бронирование',
		'футбольное поле аренда',
		'поиск спортзала',
		'бронирование онлайн',
		'спорт площадка онлайн',
		'аренда поля Ташкент',
		'поиск свободного стадиона',
		'спорт зал Ташкент',
		'онлайн сервис спорт',
		'pitchbook uz',
	],
	icons: {
		icon: '/logo.jpg',
	},
}

export const metadataEn = {
	title: 'Pitchbook - Online Booking for Stadiums and Sports Venues',
	description:
		'Pitchbook is the fastest and easiest way to book stadiums, tennis courts, gyms, swimming pools, and other sports facilities online. Fast, simple, and reliable!',
	keywords: [
		'pitchbook',
		'book stadium online',
		'gym booking',
		'tennis court reservation',
		'football field booking',
		'find sports venue',
		'online booking service',
		'sports center Tashkent',
		'rent a football pitch',
		'book sports hall',
		'pitchbook uz',
		'sports facility search',
		'fast online booking',
	],
	icons: {
		icon: '/logo.jpg',
	},
}

export const generateMetadata = ({ params }) => {
	const locale = params.locale || 'uz'

	switch (locale) {
		case 'ru':
			return metadataRu
		case 'en':
			return metadataEn
		default:
			return metadataUz
	}
}

export default async function RootLayout({ children, params }) {
	const param = await params

	return (
		<html lang='en' className=''>
			<body className={`font-dmSans antialiased dark:bg-black bg-white`}>
				<NextIntlClientProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem={true}
					>
						<Layout>
							<LoadingWrapper>
								<CustomCursor />
								{children}
							</LoadingWrapper>
						</Layout>
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
