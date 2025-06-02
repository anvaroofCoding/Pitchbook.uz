import CustomCursor from '@/components/CustomCursor'
import LoadingWrapper from '@/components/LoadingWrapper'
import Layout from '@/Layout/Layout'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadata = {
	title: 'Pitchbook',
	description: 'Pitchbook bu togri tanlov',
	icons: {
		icon: '/logo.jpg', // public papkada joylashgan bo'lishi kerak
	},
}

export default async function RootLayout({ children, params }) {
	const param = await params
	console.log(param)
	return (
		<html lang='en' className='dark'>
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
