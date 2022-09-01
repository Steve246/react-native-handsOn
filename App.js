import LoginPage from "./src/features/Login/LoginPage";
import WelcomePage from "./src/features/Welcome/WelcomePage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./src/shared/context/ThemeContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <WelcomePage />
        {/* <LoginPage /> */}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
