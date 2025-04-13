import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Divider from "../components/Divider";
import Colors from "../assets/styles/Colors";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../assets/styles/Scaling";
import { getFontFamily } from "../assets/fonts/getFontFamily";

type AlertDialogProps = {
  visible: boolean;
  title: string;
  message: string;
  acceptAction?: () => void;
  cancelAction?: () => void;
};

const AlertDialog = ({
  visible,
  title,
  message,
  acceptAction,
  cancelAction,
}: AlertDialogProps) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.dialogBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <Divider />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={acceptAction}
              style={[styles.baseButtonStyle, styles.acceptButton]}
            >
              <Text style={styles.buttonText}>כן</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelAction}
              style={[styles.baseButtonStyle, styles.cancelButton]}
            >
              <Text style={styles.buttonText}>לא</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertDialog;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Colors.blackOpacity,
    justifyContent: "center",
    alignItems: "center",
  },
  dialogBox: {
    backgroundColor: Colors.white,
    alignItems: "center",
    padding: horizontalScale(20),
    borderRadius: horizontalScale(12),
    width: "80%",
  },
  title: {
    textAlign: "center",
    fontFamily: getFontFamily("Roboto", "600"),
    fontSize: scaleFontSize(25),
  },
  message: {
    textAlign: "center",
    fontFamily: getFontFamily("Roboto", "400"),
    fontSize: scaleFontSize(17),
    marginTop: verticalScale(20),
  },
  buttonsContainer: {
    flexDirection: "row-reverse",
    marginTop: verticalScale(20),
  },
  baseButtonStyle: {
    width: horizontalScale(60),
    height: verticalScale(30),
    marginHorizontal: horizontalScale(15),
    borderRadius: horizontalScale(8),
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    backgroundColor: Colors.red,
  },
  acceptButton: {
    backgroundColor: Colors.brightBlue,
  },
  buttonText: {
    color: Colors.white,
    fontFamily: getFontFamily("Roboto", "400"),
    fontSize: scaleFontSize(20),
  },
});
