import { Plan } from "@/types/plan"
import { Asset } from "@/types/asset"

const thirdFloor: Asset = {
	id: 1,
	type: 1,
	props: { x: 0, y: 0, width: 1500, height: 1500 },
	editable: true,
	assets: [
		{
			id: 1,
			type: 2,
			props: { span: 2, x: 30, y: 20, fill: "red" },
			assignable: true,
		},
		{
			id: 3,
			type: 2,
			props: { span: 2, x: 220, y: 20 },
			editable: true,
		},
		{
			id: 4,
			props: { x: 20, y: 110 },
			type: 2,
			editable: true,
		},
		{
			id: 5,
			props: { x: 110, y: 110 },
			type: 2,
		},
		{
			id: 6,
			props: { x: 220, y: 110 },
			type: 2,
		},
		{
			id: 7,
			props: { x: 310, y: 110 },
			type: 2,
		},
		{
			id: 8,
			props: { x: 20, y: 220 },
			type: 2,
		},
		{
			id: 9,
			props: { x: 110, y: 220 },
			type: 2,
		},
		{
			id: 10,
			props: { x: 220, y: 220 },
			type: 2,
		},
		{
			id: 11,
			props: { x: 310, y: 220 },
			type: 2,
		},
		{
			id: 12,
			type: 2,
			props: { x: 20, y: 330 },
		},
		{
			id: 13,
			type: 2,
			props: { x: 110, y: 330 },
		},
		{
			id: 14,
			type: 2,
			props: { x: 220, y: 330 },
		},
		{
			id: 15,
			type: 2,
			props: { x: 310, y: 330 },
		},
		{
			id: 16,
			type: 1,
			editable: true,
			props: {
				width: 350,
				height: 180,
				fill: "#ffccee",
				x: 430,
				y: 20,
			},
		},
	],
}

const DC2: Asset = {
	id: 333,
	type: 1,
	props: { x: 0, y: 0, width: 1100, height: 1100 },
	editable: true,
	assets: [
		{
			id: 1,
			type: 1,
			props: { x: 0, y: 0, width: 500, height: 500, fill: 'orange' },
			editable: true,
			assets: [
				{
				id: 1002,
				type: 2,
				props: { span: 2, x: 30, y: 20 },
				}
			]
		},
		{
			id: 22,
			type: 2,
			props: { span: 2, x: 30, y: 90 },
		},
	],
}

const TEO: Plan = {
	id: 700,
	title: "TEO Hassan Arcade",
	sites: [thirdFloor, DC2],
	assetMapping: {
		2: 1,
	},
}

export default TEO
