import { AssetFrom } from "../../components/assets/assetForm"
import prisma from "@/prisma/prisma"

export default async function AssetsPage() {
	const assets = await prisma.asset.findMany();
	const assetTypes = await prisma.assetType.findMany();


	console.log(assetTypes)


	return (
		<>
			<section className="bg-ct-blue-600 min-h-screen pt-20">
				<div className="container mx-auto px-6 py-12 h-full flex justify-between items-center">
					<div className="md:w-8/12 lg:w-5/12 bg-white px-8 py-10">
						<AssetFrom assetTypes={assetTypes} />
					</div>
					<div>
						{assets.length > 0 && assets?.map((assetType: any) => (
							<li key={assetType.id}>{assetType.name}</li>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
