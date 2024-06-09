import { Asset } from "@/types/asset"

const DeskProps = {
	width: 80,
	height: 80,
}
export default function Desk({ props, allocation }: Asset) {
	const width = DeskProps.width * (props?.span || 1);
	return (
		<>
		<rect
			width={width}
			height={DeskProps.height}
			className="fill-asset-desk"
			strokeWidth={1}
			stroke={"black"}
		>
		</rect>
		{Array.isArray(allocation) && allocation.map((user, index) => (
			<text x={width/2} y={DeskProps.height/2 + 15 * (index + 1)} font-family="Verdana" font-size="15" dominant-baseline="middle" text-anchor="middle" key="index">
				{user}
			</text>
		))}
		
		</>
	)
}
