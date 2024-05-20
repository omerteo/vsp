"use client"
import * as React from "react"
import { Plan } from "@/types/plan"
import { Asset as MapAsset } from "@/types/asset"
import AssetComposer from "@/components/renderer/assets"
import { Asset } from "@prisma/client"

function locateElementInPlans(id: string, selectedLevel: MapAsset | undefined) {}

export default function PlanViewer({ plan }: { plan: Plan | null }) {
	const [selectedSite, setSelectedSite] = React.useState<MapAsset | undefined>(plan?.sites[0] || ({} as MapAsset))

	const handleClick = (event: React.MouseEvent) => {
		event.preventDefault()
		event.stopPropagation()
		let el = event.target as HTMLElement
		while (el.getAttribute("data-type") === null) {
			//this will help us reach the parent element with a data-attribute, because only those can be edited
			el = el.parentNode as HTMLElement
		}

		if (el.getAttribute("data-editable") === "true") {
			locateElementInPlans(el.getAttribute("data-asset-id") || "", selectedSite)
		}
	}

	const onLevelSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedSite(plan?.sites[parseInt(event.target.value)] as MapAsset)
	}
	return (
		<>
			<h1>{plan?.title}</h1>
			<select onChange={onLevelSelect}>
				{plan?.sites.map((site, i) => (
					<option value={i} key={site.id}>
						{site.id}
					</option>
				))}{" "}
			</select>
			<div onClick={handleClick}>
				<AssetComposer asset={selectedSite} />
			</div>
		</>
	)
}
