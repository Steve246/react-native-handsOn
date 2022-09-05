import { useTheme } from "../../../shared/context/ThemeContext.js";

import { Image, StyleSheet } from "react-native";

const Avatar = ({ imageUrl = "" }) => {
  const theme = useTheme();
  const styles = styling(theme);
  return <Image source={{ url: imageUrl }} style={styles.avatar} />;
};

const styling = (theme) =>
  StyleSheet.create({
    avatar: {
      width: 45,
      height: 45,
      borderRadius: 23,
      overflow: "hidden",
    },
  });

export default Avatar;
