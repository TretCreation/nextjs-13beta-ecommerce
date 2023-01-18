import { PrismaClient } from '@prisma/client'
import {
	Key,
	ReactElement,
	JSXElementConstructor,
	ReactFragment,
	ReactPortal
} from 'react'

const prisma = new PrismaClient()

export default function Home(data: any) {
	return (
		<>
			<h1 className='text-3xl font-bold'>Hello world!</h1>
			<ul>
				{data.map(
					(item: {
						id: Key | null | undefined
						name:
							| string
							| number
							| boolean
							| ReactElement<
									any,
									string | JSXElementConstructor<any>
							  >
							| ReactFragment
							| ReactPortal
							| null
							| undefined
					}) => (
						<li key={item.id}>{item.name}</li>
					)
				)}
			</ul>
		</>
	)
}

export async function getServerSideProps() {
	const testData = await prisma.user.findMany()

	return {
		props: {
			data: testData
		}
	}
}
