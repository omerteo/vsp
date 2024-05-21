import prisma from "@/prisma/prisma"
import { AssetForm } from "./assetForm"
import { DataTable } from "@/components/tables/AssetTable"
import { assetColumns } from "@/components/tables/columns"
import { DialogCommon } from "@/components/common/Dialog"
import { DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

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

	const assets = await prisma.asset.findMany({
		skip: offset,
		take: limit,
		include: {
			employees: {
				include: {
					employee: true,
				},
			},
		},
	})

	const totals = await prisma.asset.count()

	const assetTypes = await prisma.assetType.findMany()
	const users = await prisma.employee.findMany()

	const pageCount = Math.ceil(totals / limit)

	return (
		<>
			<section className="bg-white dark:bg-gray-800 min-h-screen pt-20">
				<DialogCommon>
					<div className="flex justify-end mb-4">
						<DialogTrigger asChild className="flex justify-end">
							<Button variant="outline" className="flex justify-end">
								Create Asset
							</Button>
						</DialogTrigger>
					</div>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Create Asset</DialogTitle>
							<DialogDescription>Create Asset Here.</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<AssetForm assetTypes={assetTypes} users={users} />
						</div>
						{/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
					</DialogContent>
				</DialogCommon>
				<div>
					<DataTable columns={assetColumns} data={assets} pageCount={pageCount} />
				</div>
			</section>
		</>
	)
}
