import { useFonts } from "expo-font";

const UseAppFont = () => {
  const [fontLoaded] = useFonts({
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.otf"),

    "Poppins-Thin": require("../../../assets/fonts/Poppins-Thin.otf"),

    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.otf"),

    "Poppins-Medium": require("../../../assets/fonts/Poppins-Medium.otf"),
  });
  return fontLoaded;
};

export default UseAppFont;
