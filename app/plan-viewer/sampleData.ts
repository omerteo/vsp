import { Plan } from "@/types/plan";

const thirdFloor = {
  id: 1,
  label: '3rd Floor',
  assetType: 1,
  props: {  x: 0, y: 0, width: 1500, height: 1500 },
  editable: true,
  assets: [
    {
      id: 2,
      label: 'H1C1S1',
      assetType: 2,
      props: { span: 2, x: 30, y: 20, fill: 'red'},
      assignable: true
    },
    {
      id: 3,
      label: 'desk',
      assetType: 2,
      props: { span: 2, x: 220, y: 20 }
    },
    {
      id: 4,
      label: 'desk',
      props: {  x: 20, y: 110 },
      assetType: 2
    },
    {
      id: 5,
      label: 'desk',
      props: {  x: 110, y: 110 },
      assetType: 2
    },
    {
      id: 6,
      label: 'desk',
      props: {  x: 220, y: 110 },
      assetType: 2
    },
    {
      id: 7,
      label: 'desk',
      props: {  x: 310, y: 110 },
      assetType: 2
    },
    {
      id: 8,
      label: 'desk',
      props: {  x: 20, y: 220 },
      assetType: 2
    },
    {
      id: 9,
      label: 'desk',
      props: {  x: 110, y: 220 },
      assetType: 2
    },
    {
      id: 10,
      label: 'desk',
      props: {  x: 220, y: 220 },
      assetType: 2
    },
    {
      id: 11,
      label: 'desk',
      props: {  x: 310, y: 220 },
      assetType: 2
    },
    {
      id: 12,
      label: 'desk',
      assetType: 2,
      props: {  x: 20, y: 330 }
    },
    {
      id: 13,
      label: 'desk',
      assetType: 2,
      props: {  x: 110, y: 330 }
    },
    {
      id: 14,
      label: 'desk',
      assetType: 2,
      props: {  x: 220, y: 330 }
    },
    {
      id: 15,
      label: 'desk',
      assetType: 2,
      props: {  x: 310, y: 330 }
    },
    {
      id: 16,
      assetType: 1,
      label: 'Girls Common room',
      editable: true,
      props: {
        width: 350,
        height: 180,
        fill: '#ffccee',
        x: 430,
        y: 20
      }
    }
  ]
}

const DC2 = {id: 333,
  label: 'DC2',
  assetType: 1,
  props: {  x: 0, y: 0, width: 1100, height: 1100 },
  editable: true,
  assets: [
    {
      id: 22,
      label: 'H1C1S1',
      assetType: 2,
      props: { span: 2, x: 30, y: 20 }
    }]

}

const TEO: Plan = {
  id: 0,
  title: 'TEO Hassan Arcade',
  createdBy: 1,
  sites: [thirdFloor,DC2]
}

export default TEO;
