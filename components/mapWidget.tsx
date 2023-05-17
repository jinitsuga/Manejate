import dynamic from "next/dynamic";

const MapsWidget = dynamic(() => import("./MapsContent"), { ssr: false });

export default MapsWidget;
