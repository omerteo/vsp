import { Asset } from "@/types/plan"

const DeskProps = {
	width: 80,
	height: 80,
}
export default function Desk({ props }: Asset) {
	return (
		<rect
			width={DeskProps.width * (props?.span || 1)}
			height={DeskProps.height}
			fill={props.fill || "blue"}
			strokeWidth={1}
			stroke={"black"}
		/>
	)
}
