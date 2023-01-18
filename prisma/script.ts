import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	const user = await prisma.user.create({
		data: {
			email: 'Slack',
			password: 'Password'
		}
	})
	console.log(user)
}

main()
	.catch(err => console.error(err.message))
	.finally(async () => {
		await prisma.$disconnect()
	})
