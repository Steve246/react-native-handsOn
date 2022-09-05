import { useTheme } from "../../features/shared/context/ThemeContext";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useEffect, useState } from "react";

import MainContainer from "../shared/components/MainContainer";

import FormButton from "../shared/components/FormButton";
import { useNavigation, useRoute } from "@react-navigation/native";

const PinPage = () => {
  const theme = useTheme();
  const styles = styling(theme);
  const [pin, setPin] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const [pinParam, setPinParam] = useState({});

  useEffect(() => {
    if (route.params.prevPage) {
      setPinParam({
        prevPage: route.params.prevPage,
      });
    }
  }, [route.params]);

  return (
    <MainContainer>
      <View style={styles.pinView}>
        <View style={{ width: "50%" }}>
          <Text style={styles.pinLabel}>Please input PIN {"\n"}</Text>
          <TextInput
            secureTextEntry
            keyboardType="numeric"
            maxLength={6}
            style={styles.pinInput}
            value={pin}
            onChangeText={setPin}
          />
        </View>
      </View>
      <FormButton
        label={"Submit"}
        onclick={() => {
          navigation.navigate(pinParam.prevPage, {
            message: "OK",
          });
        }}
      />
    </MainContainer>
  );
};

const styling = (theme) =>
  StyleSheet.create({
    pinInput: {
      borderBottomColor: "rgb(92,93,95)",
      borderBottomWidth: 1,
      marginVertical: theme.spacing.l,
      fontSize: 32,
      textAlign: "center",
    },
    pinLabel: {
      textAlign: "center",
      fontFamily: "Poppins-Regular",
    },
    pinView: {
      alignItems: "center",
    },
  });

export default PinPage;
