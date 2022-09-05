const pallete = {
  white: "#fff",
  orange: "rgb(252,80,40)",
  black: "#000",
  grey: "rgb(92,93,95)",
  lightGrey: "rgb(234,236,241)",
};

export const theme = {
  background: require("../../../assets/img/background.jpg"),
  colors: {
    primary: pallete.grey,
    black: pallete.black,
    secondary: pallete.lightGrey,
    foreground: pallete.grey,
    logoColor: pallete.orange,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
  },
  radius: {
    s: 5,
    m: 10,
    l: 15,
  },
  text: {
    title: {
      color: pallete.black,
      fontSize: 36,
      fontFamily: "Poppins-Bold",
    },
    title2: {
      color: pallete.black,
      fontSize: 36,
      fontFamily: "Poppins-Bold",
    },
    titleProd: {
      fontSize: 20,
      color: pallete.black,
      fontFamily: "Poppins-Regular",
    },
    subtitle: {
      fontSize: 16,
      color: pallete.black,
      fontFamily: "Poppins-Regular",
    },
    subtitle2: {
      fontSize: 16,
      color: pallete.black,
      fontFamily: "Poppins-Regular",
    },
    textButton: {
      fontSize: 16,
      color: pallete.black,
      fontFamily: "Poppins-Bold",
    },
    textButton2: {
      fontSize: 16,
      color: pallete.black,
      fontFamily: "Poppins-Bold",
    },
  },
};
