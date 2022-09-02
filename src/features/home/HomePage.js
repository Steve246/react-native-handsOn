import AppBackground from "../../shared/components/AppBackground";
import HeaderPageLabel from "../../shared/components/HeaderPageLabel";
import MainContainer from "../../shared/components/MainContainer";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
// import { theme } from "../../shared/Theme";
import { useTheme } from "../../shared/context/ThemeContext";

const HomePage = () => {
  const theme = useTheme();
  const styles = styling(theme);
  return (
    <MainContainer>
      <AppBackground>
        <View>
          <HeaderPageLabel text="POS" />

          <View style={styles.container}>
            <View style={styles.menuContainer}>
              <TouchableOpacity style={styles.toucAble}>
                <FontAwesome
                  name="sticky-note-o"
                  size={24}
                  color={theme.colors.primary}
                />
                <Text style={styles.text}>
                  Add{"\n"}
                  Order
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.menuContainer}>
              <TouchableOpacity style={styles.toucAble}>
                <FontAwesome
                  name="user-plus"
                  size={24}
                  color={theme.colors.primary}
                />
                <Text style={styles.text}> Add {"\n"} Customer</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.menuContainer}>
              <TouchableOpacity style={styles.toucAble}>
                <FontAwesome
                  name="money"
                  size={24}
                  color={theme.colors.primary}
                />
                <Text style={styles.text}> Add {"\n"} Bill</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </AppBackground>
    </MainContainer>
  );
};

const styling = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      borderColor: theme.colors.secondary,
      borderWidth: 1,
      borderRadius: theme.radius.m,
    },
    menuContainer: {
      flex: 1,
      height: 64,
      justifyContent: "center",
    },

    text: {
      textAlign: "center",
      fontSize: 12,
      color: theme.colors.foreground,
      fontFamily: "Poppins-Regular",
    },

    toucAble: {
      alignItems: "center",
    },
  });

export default HomePage;
