import { Text, View } from "react-native";

import { useTheme } from "../context/ThemeContext";

const HeaderPageLabel = ({ text }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: theme.spacing.s,
        marginBottom: theme.spacing.s,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.1)",
        alignItems: "center",
      }}
    >
      <Text style={[theme.text.subtitle, { fontWeight: "bold" }]}>{text}</Text>
    </View>
  );
};

export default HeaderPageLabel;
