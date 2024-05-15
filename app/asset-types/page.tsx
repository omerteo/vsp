import { DataTable } from "@/components/tables/AssetTable"
import { AssetTypeForm } from "./assetTypeForm"
import { DialogCommon } from "@/components/common/Dialog"
import { Button } from "@/components/ui/button"
import { DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { columns } from "@/components/tables/columns"

async function getAssetTypes() {
	const response = await fetch("http:localhost:3000/api/asset-types", {
		cache: "no-store",
		next: { tags: ["assetType"] },
		headers: {
			"Content-Type": "application/json",
		},
	})
	const data = await response.json()

	return data
}

export default async function AssetTypePage() {
	const assetTypes = await getAssetTypes()
	console.log(assetTypes)

	return (
		<>
			<section className="bg-white dark:bg-gray-800 min-h-screen pt-20">
				<DialogCommon>
					<div className="flex justify-end mb-4">
						<DialogTrigger asChild className="flex justify-end">
							<Button variant="outline" className="flex justify-end">
								Create Asset Type
							</Button>
						</DialogTrigger>
					</div>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Create Asset Type</DialogTitle>
							<DialogDescription>Create Asset Type Here.</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<AssetTypeForm />
						</div>
						{/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
					</DialogContent>
				</DialogCommon>
				<div>
					<DataTable columns={columns} data={assetTypes} pageCount={1} />
				</div>
			</section>
		</>
	)
}
