import { Plan } from "@/types/plan"
import { Asset } from "@/types/asset"

const thirdFloor: Asset = {
	id: 1,
	name: "3rd Floor",
	type: 1,
	props: { x: 0, y: 0, width: 1500, height: 1500 },
	editable: true,
	assets: [
		{
			id: 2,
			name: "H1C1S1",
			type: 2,
			props: { span: 2, x: 30, y: 20, fill: "red" },
			assignable: true,
		},
		{
			id: 3,
			name: "desk",
			type: 2,
			props: { span: 2, x: 220, y: 20 },
		},
		{
			id: 4,
			name: "desk",
			props: { x: 20, y: 110 },
			type: 2,
		},
		{
			id: 5,
			name: "desk",
			props: { x: 110, y: 110 },
			type: 2,
		},
		{
			id: 6,
			name: "desk",
			props: { x: 220, y: 110 },
			type: 2,
		},
		{
			id: 7,
			name: "desk",
			props: { x: 310, y: 110 },
			type: 2,
		},
		{
			id: 8,
			name: "desk",
			props: { x: 20, y: 220 },
			type: 2,
		},
		{
			id: 9,
			name: "desk",
			props: { x: 110, y: 220 },
			type: 2,
		},
		{
			id: 10,
			name: "desk",
			props: { x: 220, y: 220 },
			type: 2,
		},
		{
			id: 11,
			name: "desk",
			props: { x: 310, y: 220 },
			type: 2,
		},
		{
			id: 12,
			name: "desk",
			type: 2,
			props: { x: 20, y: 330 },
		},
		{
			id: 13,
			name: "desk",
			type: 2,
			props: { x: 110, y: 330 },
		},
		{
			id: 14,
			name: "desk",
			type: 2,
			props: { x: 220, y: 330 },
		},
		{
			id: 15,
			name: "desk",
			type: 2,
			props: { x: 310, y: 330 },
		},
		{
			id: 16,
			type: 1,
			name: "Girls Common room",
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
	name: "DC2",
	type: 1,
	props: { x: 0, y: 0, width: 1100, height: 1100 },
	editable: true,
	assets: [
		{
			id: 22,
			name: "H1C1S1",
			type: 2,
			props: { span: 2, x: 30, y: 20 },
		},
	],
}

const TEO: Plan = {
  id: 700,
  title: 'TEO Hassan Arcade',
  sites: [thirdFloor, DC2]
}

export default TEO
