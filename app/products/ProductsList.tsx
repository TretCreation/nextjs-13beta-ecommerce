import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

const fetchProducts = async () => {
	const prisma = new PrismaClient()
	const res = await prisma.product.findMany()
	const products = JSON.stringify(res)
	return products
}

const ProductsList = async () => {
	const products = await fetchProducts()

	return (
		<>
			<div>Product List</div>
			{/* {products.map(product => (
				<Link href={`products/${product.id}`}>
					Products: {product.id}
				</Link>
			))} */}
		</>
	)
}

export default ProductsList

/*
{products.map(e => (
        <Link href={`/todos/${products.}`}
    ))}

*/
