'use client'

import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
	const [active, setActive] = useState(0)

	const handleNext = () => {
		setActive(prev => (prev + 1) % testimonials.length)
	}

	const handlePrev = () => {
		setActive(prev => (prev - 1 + testimonials.length) % testimonials.length)
	}

	const isActive = index => index === active

	useEffect(() => {
		if (autoplay) {
			const interval = setInterval(handleNext, 5000)
			return () => clearInterval(interval)
		}
	}, [autoplay])

	const randomRotateY = () => Math.floor(Math.random() * 21) - 10

	return (
		<div
			id='install'
			className='mx-auto max-w-6xl px-4 py-12 font-sans antialiased sm:px-6 md:px-8 lg:px-12'
		>
			<div className='relative grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
				{/* LEFT IMAGE (mobilda kichikroq) */}
				{/* LEFT IMAGE SECTION (rasmlar orqama-orqa bo'ladi) */}
				<div className='relative w-full h-full flex justify-center items-center'>
					<div className='relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square'>
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={testimonial.src}
								initial={false}
								animate={{
									opacity: isActive(index) ? 1 : 0.4,
									scale: isActive(index) ? 1 : 0.9,
									zIndex: isActive(index) ? 30 : index,
									rotate: isActive(index) ? 0 : -4 + index * 2,
								}}
								transition={{
									duration: 0.5,
									ease: 'easeInOut',
								}}
								className='absolute inset-0 flex justify-center items-center transition-all duration-500'
							>
								<img
									src={testimonial.src}
									alt={testimonial.name}
									draggable={false}
									className='w-full h-auto max-h-[350px] sm:max-h-[300px] md:max-h-[550px] rounded-2xl object-contain shadow-md'
								/>
							</motion.div>
						))}
					</div>
				</div>

				{/* RIGHT TEXT */}
				<div className='flex flex-col justify-between py-4'>
					<motion.div
						key={active}
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -20, opacity: 0 }}
						transition={{ duration: 0.2, ease: 'easeInOut' }}
					>
						<h3 className='text-xl sm:text-2xl font-bold text-black dark:text-white'>
							{testimonials[active].name}
						</h3>
						<motion.p className='mt-4 text-sm sm:text-base text-gray-600 dark:text-neutral-300 leading-relaxed'>
							{testimonials[active].quote.split(' ').map((word, index) => (
								<motion.span
									key={index}
									initial={{
										filter: 'blur(10px)',
										opacity: 0,
										y: 5,
									}}
									animate={{
										filter: 'blur(0px)',
										opacity: 1,
										y: 0,
									}}
									transition={{
										duration: 0.2,
										ease: 'easeInOut',
										delay: 0.02 * index,
									}}
									className='inline-block'
								>
									{word}&nbsp;
								</motion.span>
							))}
						</motion.p>
					</motion.div>

					{/* ARROWS */}
					<div className='flex gap-4 pt-8'>
						<button
							onClick={handlePrev}
							className='group/button flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800'
						>
							<IconArrowLeft className='h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400' />
						</button>
						<button
							onClick={handleNext}
							className='group/button flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800'
						>
							<IconArrowRight className='h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400' />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
