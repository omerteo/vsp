import { Asset } from "@/types/asset"
import Room from "./assets/room"
import Desk from "./assets/desk"


  const AssetDirectory: {
    [key: string]: (props: Asset) => React.JSX.Element
  } = {
    1: Room,
    2: Desk
    // 3: DeskGroup
    // 4:Floor
  }
  
  interface AssetComposerProps {
    asset: Asset | undefined
  }
  export default function AssetComposer({ asset }: AssetComposerProps) {
    console.log(asset)
    return (
      <svg
        data-type={asset?.type}
        x={asset?.props.x}
        y={asset?.props.y}
        width={asset?.props.width}
        height={asset?.props.height}
        data-editable={asset?.editable}
        data-assignable={asset?.assignable}
        data-asset-id={asset?.id}
      >
        {asset && AssetDirectory[asset.type](asset)}
      </svg>
    )
  }
  