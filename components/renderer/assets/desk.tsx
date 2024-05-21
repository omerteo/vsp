import { Asset } from "@/types/asset"

const DeskProps = {
	width: 80,
	height: 80,
}
export default function Desk({ props }: Asset) {
	return (
		<rect
			width={DeskProps.width * (props?.span || 1)}
			height={DeskProps.height}
			className="fill-asset-desk"
			strokeWidth={1}
			stroke={"black"}
		/>
	)
}
