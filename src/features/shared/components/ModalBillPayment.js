import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View, TextInput } from "react-native";

import { useTheme } from "../context/ThemeContext";
import FormButton from "./FormButton";

const ModalBillPayment = ({ visible, onPress }) => {
  const theme = useTheme();
  const styles = styling(theme);
  const [pin, setPin] = useState();
  return (
    <View style={styles.mainContainer}>
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.mainContainer}>
          <View style={styles.modalContainer}>
            <Text style={styles.headline}> Please Input Pin </Text>
            <Text style={styles.headline}> {`user id ${pin}`} </Text>
            <TextInput
              // placeholder="Password"
              style={styles.textInput}
              onChangeText={setPin}
              value={pin}
            ></TextInput>
            {/* <Button style={styles.button} onPress={onPress} title="Back" /> */}
            <FormButton onClick={onPress} label={"submit"} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styling = (theme) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    modalContainer: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: "100%",
      backgroundColor: "white",
      alignSelf: "stretch",
      padding: 32,
    },
    textInput: {
      alignSelf: "stretch",
      padding: 10,
      marginLeft: 50,
      margin: 5,
      marginRight: 50,
      borderBottomColor: theme.colors.primary,
      borderBottomWidth: 1,

      // backgroundColor: '#000',
    },

    headline: {
      fontSize: 18,
      marginTop: 0,

      justifyContent: "center",
      alignItems: "center",

      alignSelf: "stretch",
      padding: 10,
      marginLeft: 80,
      margin: 5,
      marginRight: 50,
    },

    button: {
      alignItems: "center",
      backgroundColor: theme.colors.primary,
      padding: theme.spacing.s,
      borderRadius: theme.radius.m,
      alignSelf: "stretch",
      margin: theme.spacing.m,
    },
  });

export default ModalBillPayment;
