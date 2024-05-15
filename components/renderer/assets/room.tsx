import { Asset } from "@/types/plan"
import AssetComp from "../assets"

export default function Room({ props, assets, label }: Asset) {
	return (
		<>
			<rect width={props?.width} height={props?.height} fill={props.fill || "red"} />
			<text
				x="50%"
				y={props?.height ? props.height - 15 : "80%"}
				fontFamily="Verdana"
				fontSize="15"
				fill="blue"
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
