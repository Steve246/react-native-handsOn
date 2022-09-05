import LoginPage from "./src/features/Login/LoginPage";
import WelcomePage from "./src/features/Welcome/WelcomePage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./src/features/shared/context/ThemeContext";
import UseAppFont from "./src/features/shared/hook/UseAppFont";
// import ProductList from "./src/features/product/ProductList";
import { serviceFactory } from "./src/services/ServiceFactory";
import { DependencyProvider } from "./src/features/shared/context/DependencyContext";

import AppRouter from "./src/navigation/AppRouter";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const fonts = UseAppFont();

  const services = serviceFactory();

  if (!fonts) {
    return null;
  }
  return (
    <DependencyProvider services={services}>
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer>
            <AppRouter />

            {/* <WelcomePage /> */}
            {/* <LoginPage /> */}
            {/* <ProductList /> */}
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </DependencyProvider>
  );
}
