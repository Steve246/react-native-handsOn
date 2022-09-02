import LoginPage from "./src/features/Login/LoginPage";
import WelcomePage from "./src/features/Welcome/WelcomePage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./src/shared/context/ThemeContext";
import UseAppFont from "./src/shared/hook/UseAppFont";

export default function App() {
  const fonts = UseAppFont();

  if (!fonts) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <WelcomePage />
        {/* <LoginPage /> */}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
