import { StyleSheet, Text, View } from "react-native";
import Avatar from "../../features/home/component/Avatar";

import { useTheme } from "../context/ThemeContext";

const HeaderPageLabel = ({ text = "", showBorder = true, avatarImg = "" }) => {
  const theme = useTheme();
  const styles = styling(theme);
  let borderStyle = {};

  if (showBorder) {
    borderStyle = {
      borderBottomWidth: 1,
      borderBottomColor: "rgba(0,0,0,0.1)",
    };
  }
  return (
    <View
      style={[styles.label, borderStyle]}
      // style={{
      //   flexDirection: "row",
      //   justifyContent: "space-between",
      //   paddingBottom: theme.spacing.s,
      //   marginBottom: theme.spacing.s,
      //   borderBottomWidth: 1,
      //   borderBottomColor: "rgba(0,0,0,0.1)",
      //   alignItems: "center",
      // }}
    >
      <Text style={[theme.text.subtitle, { fontWeight: "bold" }]}>{text}</Text>
      {avatarImg && <Avatar imageUrl={avatarImg} />}
    </View>
  );
};

const styling = (theme) =>
  StyleSheet.create({
    label: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: theme.spacing.s,
      margin: theme.spacing.s,

      alignItems: "center",
    },
  });

export default HeaderPageLabel;
