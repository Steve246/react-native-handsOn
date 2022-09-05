import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabActions, useTheme } from "@react-navigation/native";
import MainPage from "../features/home/main/MainPage";
import ProductList from "../features/product/ProductList";
import { ROUTE } from "../shared/constant";

import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeRouter = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case ROUTE.HOME:
              return <FontAwesome name="home" size={size} color={color} />;
            case ROUTE.PRODUCT:
              return (
                <FontAwesome name="product-hunt" size={size} color={color} />
              );
            default:
              return (
                // <Ionicons name="checkmark-sharp" size={size} color={color} />
                null
              );
          }
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.foreground,
      })}
    >
      <Tab.Screen name={ROUTE.HOME} component={MainPage} />

      <Tab.Screen name={ROUTE.PRODUCT} component={ProductList} />
    </Tab.Navigator>
  );
};

export default HomeRouter;
