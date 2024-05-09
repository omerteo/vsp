import { Asset } from "@/types";

type RenderProps = {
    roomColor?: string;
    roomBorder?: string;
    roomHeight?: string;
    roomWidth?: string;
    roomCSS?: string;
    title?: string;
}

const defaultProps = {
    roomColor: 'blue',
    roomBorder: '1px solid black',
    roomHeight: '750px',
    roomWidth: '800px',
    roomCSS: '',
    title: 'Unnamed Room'
}

function Renderer({roomColor = defaultProps.roomColor, roomBorder = defaultProps.roomBorder, roomHeight = defaultProps.roomHeight, roomWidth = defaultProps.roomWidth, roomCSS, title = defaultProps.title}: RenderProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Renderer;