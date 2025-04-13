import { Text, StyleSheet } from "react-native";

import Colors from "../assets/styles/Colors";
import { getFontFamily } from "../assets/fonts/getFontFamily";
import { horizontalScale, scaleFontSize } from "../assets/styles/Scaling";

type PageTitleProps = {
  titleTxt: string;
};

const PageTitle = ({ titleTxt }: PageTitleProps) => {
  return <Text style={styles.title}>{titleTxt}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: scaleFontSize(55),
    fontFamily: getFontFamily("KtavYadCLM", "500"),
    color: Colors.white,
    marginTop: horizontalScale(40),
    width: "100%",
    textAlign: "center",
  },
});

export default PageTitle;
