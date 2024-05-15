import Room from "./assets/room"
import Desk from "./assets/desk"
import { Asset } from "@/types/plan"

const AssetDirectory: {
	[key: string]: (props: Asset) => React.JSX.Element
} = {
	1: Room,
	2: Desk,
	// 3: DeskGroup
	// 4:Floor
}

interface AssetComposerProps {
	asset: Asset | undefined
}
export default function AssetComposer({ asset }: AssetComposerProps) {
	return (
		<svg
			data-type={asset?.assetType}
			x={asset?.props.x}
			y={asset?.props.y}
			width={asset?.props.width}
			height={asset?.props.height}
			data-editable={asset?.editable}
			data-assignable={asset?.assignable}
			data-asset-id={asset?.id}
		>
			{asset && AssetDirectory[asset.assetType](asset)}
		</svg>
	)
}
