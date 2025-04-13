import { Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { horizontalScale } from "../assets/styles/Scaling";

const ProfileIcon = () => {
  return (
    <TouchableOpacity style={styles.iconContainer}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require("../assets/images/loginBackground.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    borderRadius: horizontalScale(100),
    position: "absolute",
    top: 35,
    right: 20,
    height: horizontalScale(50),
    width: horizontalScale(50),
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: horizontalScale(100),
  },
});

export default ProfileIcon;
