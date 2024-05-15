import prisma from "@/prisma/prisma"
import { DataTable } from "@/components/tables/AssetTable"
import { userColumns } from "@/components/tables/columns"

export const revalidate = 0 // no cache

interface IndexPageProps {
	searchParams: {
		[key: string]: string | string[] | undefined
	}
}

export default async function AssetsPage({ searchParams }: IndexPageProps) {
	const { page, per_page } = searchParams
	const limit = typeof per_page === "string" ? parseInt(per_page) : 10
	const offset = typeof page === "string" ? (parseInt(page) > 0 ? (parseInt(page) - 1) * limit : 0) : 0

	const users = await prisma.user.findMany({
		skip: offset,
	})

	const pageCount = Math.ceil(users.length / limit)

	return (
		<>
			<section className="bg-white dark:bg-gray-800 min-h-screen pt-20">
				<div>
					<DataTable columns={userColumns} data={users} pageCount={pageCount} />
				</div>
			</section>
		</>
	)
}
