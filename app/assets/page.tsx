import { AssetForm } from "./assetForm"
import prisma from "@/prisma/prisma"

export default async function AssetsPage() {
	const assets = await prisma.asset.findMany()
	const assetTypes = await prisma.assetType.findMany()
	const users = await prisma.user.findMany({
		include: {
			assets: true,
		},
	})
	console.log("assets", assets)

	return (
		<>
			<section className="bg-white dark:bg-gray-800 min-h-screen pt-20">
				<div className="container mx-auto px-6 py-12 h-full flex justify-between items-center">
					<div className="md:w-8/12 lg:w-5/12 bg-white dark:bg-gray-600  px-8 py-10">
						<AssetForm assetTypes={assetTypes} users={users} />
					</div>
					<div>
						{assets.length > 0 && assets?.map((assetType: any) => <li key={assetType.id}>{assetType.name}</li>)}
					</div>
					<div>
						{users.length > 0 &&
							users?.map((user: any) => (
								<li key={user.id}>
									{user.name}

									<ul>
										{user.assets.length > 0 && user.assets?.map((asset: any) => <li key={asset.id}>{asset.name}</li>)}
									</ul>
								</li>
							))}
					</div>
				</div>
			</section>
		</>
	)
}
