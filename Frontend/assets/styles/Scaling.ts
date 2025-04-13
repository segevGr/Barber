import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const isSmall = width <= 375;

const guidelineBaseWidth = () => (isSmall ? 330 : 350);

const horizontalScale = (size: number) => (width / guidelineBaseWidth()) * size;

const guidelineBaseHeight = () => (isSmall ? 550 : width > 410 ? 620 : 680);

const verticalScale = (size: number) => (height / guidelineBaseHeight()) * size;

const guidelineBaseFonts = () => (width > 410 ? 430 : 400);

const scaleFontSize = (size: number) =>
  Math.round((width / guidelineBaseFonts()) * size);

export { horizontalScale, verticalScale, scaleFontSize };
