import { Asset } from "@/types/asset"
import AssetComp from "../assets"

export default function Room({ props, assets, label }: Asset) {
	return (
		<>
			<rect width={props?.width} height={props?.height} className="fill-asset-room" />
			<text
				x="50%"
				y={props?.height ? props.height - 15 : "80%"}
				fontFamily="Verdana"
				fontSize="15"
				dominantBaseline="middle"
				textAnchor="middle"
			>
				{label}
			</text>
			<g>
				{assets?.map((asset: Asset) => (
					<AssetComp key={asset.id} asset={asset} />
				))}
			</g>
		</>
	)
}
