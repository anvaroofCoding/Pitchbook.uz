'use client'

import { useEffect, useState } from 'react'

const CustomCursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const move = e => {
			setPosition({ x: e.clientX, y: e.clientY })
		}
		window.addEventListener('mousemove', move)
		return () => window.removeEventListener('mousemove', move)
	}, [])

	return (
		<div
			className='pointer-events-none fixed top-0 left-0 z-[9999] w-6 h-6 rounded-full bg-green-400 opacity-80 mix-blend-difference transition-transform duration-200'
			style={{
				transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
			}}
		></div>
	)
}

export default CustomCursor
