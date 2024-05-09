import { AssetTypeForm } from "./assetTypeForm"

async function getAssetTypes() {
	const response = await fetch("http:localhost:3000/api/asset-types", {
		cache: "no-store",
		next: { tags: ["assetType"] },
	})
	const data = await response.json()
	return data
}

export default async function AssetTypePage() {
	const assetTypes = await getAssetTypes()

	return (
		<>
			<section className="bg-ct-blue-600 min-h-screen pt-20">
				<div className="container mx-auto px-6 py-12 h-full flex justify-between items-center">
					<div className="md:w-8/12 lg:w-5/12 bg-white px-8 py-10">
						<AssetTypeForm />
					</div>
					<div>
						{assetTypes.length > 0 && assetTypes?.map((assetType: any) => (
							<li key={assetType.id}>{assetType.name}</li>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
