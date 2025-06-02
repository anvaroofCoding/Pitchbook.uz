import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

export function AnimatedTestimonialsDemo() {
	const testimonials = [
		{
			quote:
				'PitchBook ilovasini Google Play yoki App Store doʻkonidan yuklab oling. Bu tez, bepul va keyingi oʻyiningizni topishga yordam berishga tayyor.',
			name: 'Yuklab olish',
			designation: '',
			src: '	https://assets.api.uizard.io/api/cdn/stream/0e97d5ed-bf22-4b3b-ba86-a6b3dd620070.png',
		},
		{
			quote:
				"Telefon raqamingizdan foydalanib, bir necha soniya ichida hisobingizni yarating. Uzoq shakllar yo'q - shunchaki tezkor SMS tasdiqlash va siz kirgansiz.",
			name: 'Telefon orqali royxatdan oting',
			designation: 'CTO at InnovateSphere',
			src: 'https://assets.api.uizard.io/api/cdn/stream/3a9ed940-753b-4b16-a64e-cdaa684ef6dc.png',
		},
		{
			quote:
				"Telefon raqamingizdan foydalanib, bir necha soniya ichida hisobingizni yarating. Uzoq shakllar yo'q - shunchaki tezkor SMS tasdiqlash va siz kirgansiz.",
			name: 'Emily Watson',
			designation: 'Operations Director at CloudScale',
			src: 'https://assets.api.uizard.io/api/cdn/stream/3a9ed940-753b-4b16-a64e-cdaa684ef6dc.png',
		},
		// {
		// 	quote:
		// 		'Yandex Maps yordamida yaqin futbol maydonlari yoki sport maydonchalarini qidiring. Mavjudlikni tekshiring, vaqtni tanlang va darhol joyni bron qiling.',
		// 	name: 'Qidiruv va Bron qilish',
		// 	designation: 'Engineering Lead at DataPro',
		// 	src: 'https://assets.api.uizard.io/api/cdn/stream/7188680f-c55a-433f-8649-147cb1d7c1d4.png',
		// },
		{
			quote:
				'Click yoki Payme orqali xavfsiz tolov qiling. Keling, royxatdan oting va oynashni boshlang — stresssiz, faqat futbol.',
			name: 'Tola va oyna',
			designation: 'VP of Technology at FutureNet',
			src: 'https://assets.api.uizard.io/api/cdn/stream/7188680f-c55a-433f-8649-147cb1d7c1d4.png',
		},
	]
	return <AnimatedTestimonials testimonials={testimonials} />
}
