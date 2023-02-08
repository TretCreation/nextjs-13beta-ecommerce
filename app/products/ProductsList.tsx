import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { IProducts } from '../../typing'

async function getProducts() {
	const res = await fetch(`${process.env.BASE_URL}/api/getProducts`)
	if (!res.ok) {
		console.log(res)
	}
	return res.json()
}

export default async function ProductsList() {
	const data = await getProducts()

	return (
		<>
			{data.map((product: IProducts) => (
				<div className='container pb-16'>
					<div className='bg-white shadow rounded overflow-hidden group'>
						<div className='relative'>
							<Link href={`products/${product.id}`}>
								Products: {product.id}
							</Link>
							<Image
								src={product.img}
								alt={product.name}
								width={40}
								height={40}
							/>
						</div>
					</div>
				</div>
			))}
		</>
	)
}
