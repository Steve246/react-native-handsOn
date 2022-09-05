import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useTheme } from "../../../shared/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";

const MenuItem = ({ menus }) => {
  const theme = useTheme();
  const styles = styling(theme);
  return (
    <TouchableOpacity style={{ alignItems: "center" }}>
      <Text>{menus.menu}</Text>
      <View style={styles.CircularMenu}>
        <Ionicons name="restaurant" size={20} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styling = (theme) =>
  StyleSheet.create({
    CircularMenu: {
      width: 64,
      height: 64,
      borderColor: theme.colors.foreground,
      borderWidth: 2,
      borderRadius: 32,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
      margin: theme.spacing.s,
    },
  });

export default MenuItem;