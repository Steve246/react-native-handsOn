import LoginPage from "./src/features/Login/LoginPage";
import WelcomePage from "./src/features/Welcome/WelcomePage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./src/shared/context/ThemeContext";
import UseAppFont from "./src/shared/hook/UseAppFont";
import ProductList from "./src/features/product/ProductList";
import { serviceFactory } from "./src/services/ServiceFactory";
import { DependencyProvider } from "./src/shared/context/DepedencyContext";

export default function App() {
  const fonts = UseAppFont();

  const services = serviceFactory();

  if (!fonts) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <DependencyProvider services={services}>
        <ThemeProvider>
          {/* <WelcomePage /> */}
          {/* <LoginPage /> */}
          <ProductList />
        </ThemeProvider>
      </DependencyProvider>
    </SafeAreaProvider>
  );
}
