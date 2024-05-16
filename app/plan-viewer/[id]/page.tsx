import planResponse from "./sampleData"
import PlanViewer from "@/components/planViewer"

import { getPlan, getAssets } from "../../utils"
import { Plan } from "@/types/plan"
import { Asset } from "@/types/asset"

export const revalidate = 3600

let companyAssets: { [key: number]: { name: string } } = {};
let assetMapping: { [key: number]: number } = {};

function mapAssetToAsset(planAsset: Asset) {
	const newAsset = { ...planAsset };
	
	const correspondingAssetId = assetMapping[newAsset.id];
	newAsset.label = companyAssets[correspondingAssetId]?.name || 'Unnamed';
	if (newAsset.assets) {
		newAsset.assets = newAsset.assets.map(asset => mapAssetToAsset(asset));
	}
	return newAsset
}

function mapPlanToAssets(sites: Asset[]) {
	let newSites = [...sites];
	newSites.forEach(site => mapAssetToAsset(site));
	console.log(newSites);
	return newSites;
}

export default async function FloorPlan({ params }: { params: { id: string } }) {
	if (!params.id) {
		return <>not found</>
	}
	// const planResponse = await getPlan(parseInt(params.id));
	const assetResponse = await getAssets();

	assetResponse.forEach(obj => {
		companyAssets[obj.id] = { name: obj.name };
	});

	let plan: Plan | null = null

	if (planResponse && planResponse.sites) {
		plan = {
			...planResponse,
			sites: typeof planResponse.sites === 'string' ? mapPlanToAssets(JSON.parse(planResponse.sites)) : mapPlanToAssets(planResponse.sites)
		}
		assetMapping = planResponse.assetMapping;
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{JSON.stringify(plan)}
			{plan !== null && (
				<>
					<PlanViewer plan={plan} />
				</>
			)}
		</main>
	)
}
