import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useTheme } from "../../../shared/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import ProductList from "../../product/ProductList";

const MenuItem = ({ menus }) => {
  const theme = useTheme();
  const styles = styling(theme);

  // blm selesai

  const renderMenuItem = () => {
    if (product.id !== -1) {
      return (
        <TouchableOpacity style={styles.menuContainer}>
          <View style={[styles.baseView, styles.menuOval]}>
            <FontAwesome name={product.icon} size={32} color="white" />
          </View>
          <Text style={styles.textMenu}>{product.menu}</Text>
        </TouchableOpacity>
      );
    } else {
      return <View style={styles.baseView}></View>;
    }
  };
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
