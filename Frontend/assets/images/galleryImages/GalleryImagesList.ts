import { ImageSourcePropType } from "react-native";

type GalleryImageItem = {
  id: string;
  source: ImageSourcePropType;
};

const GalleryImagesList: GalleryImageItem[] = [
  { id: "1", source: require("./gallery1.png") },
  { id: "2", source: require("./gallery2.png") },
  { id: "3", source: require("./gallery3.png") },
  { id: "4", source: require("./gallery4.png") },
  { id: "5", source: require("./gallery5.png") },
  { id: "6", source: require("./gallery6.png") },
  { id: "7", source: require("./gallery7.png") },
  { id: "8", source: require("./gallery8.png") },
];

export default GalleryImagesList;
