import planResponse from "./sampleData"
import PlanViewer from "@/components/planViewer"

import { getPlan, getAssets } from "../../utils"
import { Plan } from "@/types/plan"

export const revalidate = 3600

function mapPlanToAssets (planResponse: Plan, assets: {[key: number]: {name: string}}) {
	let plan: Plan = {
		...planResponse,
		// sites: JSON.parse(planResponse.sites)
	}


	plan.sites = plan.sites.map(site => {
		const newSite = {...site};
		
		newSite.label = assets[site.id]?.name || '';
		newSite.assets = site.assets?.map(asset => {
			const newAsset = {...asset};
			const correspondingAssetId = plan.assetMapping[newAsset.id];
			newAsset.label = assets[correspondingAssetId]?.name || 'Unnamed';
			return newAsset;
		});
		return newSite;
	});

	return plan;
}

export default async function FloorPlan({ params }: { params: { id: string } }) {
	if (!params.id) {
		return <>not found</>
	}
	// const planResponse = await getPlan(parseInt(params.id));
	const assetResponse = await getAssets();

	const assetsToObj: {[key: number]: {name: string}} = {}; //Convert the company assets to an object for fast mapping

	assetResponse.forEach(obj => {
		assetsToObj[obj.id] = {name: obj.name};
	});

	let plan: Plan | null = null

	if (planResponse && planResponse.sites) {
		plan = mapPlanToAssets(planResponse, assetsToObj);
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{plan !== null && (
				<>
				{JSON.stringify(plan)}
					<PlanViewer plan={plan} />
				</>
			)}
		</main>
	)
}
