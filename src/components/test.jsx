'use client'

import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@/components/ui/table'
import debounce from 'lodash.debounce'
import { useTranslations } from 'next-intl'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'

const PAGE_SIZE = 10

export default function ClientSearchTable() {
	const t = useTranslations('dashboard')
	const [data, setData] = useState()
	const [loading, setLoading] = useState(true)
	const [isPending, startTransition] = useTransition()

	const searchParams = useSearchParams()
	const router = useRouter()
	const query = searchParams.get('q') || ''
	const page = parseInt(searchParams.get('page') || '1', 10)

	const fetchData = async (q, page) => {
		setLoading(true)
		try {
			const res = await fetch(`/api/clients?q=${q}&page=${page}`)
			const json = await res.json()
			setData(json.clients)
		} catch (err) {
			console.error('Fetch error:', err)
			setData([])
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchData(query, page)
	}, [query, page])

	const handleSearch = debounce(value => {
		startTransition(() => {
			router.push(`?q=${value}&page=1`)
		})
	}, 400)

	return (
		<div className='space-y-6'>
			<div className='flex justify-between items-center'>
				<h2 className='text-2xl font-bold dark:text-white'>{t('clients')}</h2>
				<Input
					placeholder={t('searchPlaceholder')}
					defaultValue={query}
					onChange={e => handleSearch(e.target.value)}
					className='w-64'
				/>
			</div>

			<div className='rounded-md border overflow-x-auto'>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>{t('name')}</TableCell>
							<TableCell>{t('email')}</TableCell>
							<TableCell>{t('status')}</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{loading ? (
							[...Array(PAGE_SIZE)].map((_, idx) => (
								<TableRow key={idx}>
									<TableCell colSpan={3}>
										<Skeleton className='h-6 w-full' />
									</TableCell>
								</TableRow>
							))
						) : data.length === 0 ? (
							<TableRow>
								<TableCell colSpan={3} className='text-center py-8'>
									{t('noResults')}
								</TableCell>
							</TableRow>
						) : (
							data.map(client => (
								<TableRow key={client.id}>
									<TableCell>{client.name}</TableCell>
									<TableCell>{client.email}</TableCell>
									<TableCell>
										{client.active ? t('active') : t('inactive')}
									</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	)
}
