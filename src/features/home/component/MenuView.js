import { FlatList, View } from "react-native";
import { theme } from "../../../shared/Theme";
import MenuItem from "./MenuItem";

const MenuView = () => {
  const menus = [
    { id: 1, menu: "Tahu Goreng" },
    { id: 2, menu: "Nasi Bakar" },
    { id: 3, menu: "Nasi SS" },
    { id: 4, menu: "Ikan Bakar" },
    { id: 5, menu: "Pempek" },
    { id: 6, menu: "Soto Solo" },
    { id: 7, menu: "Tempe Goreng" },
    { id: 9, menu: "Ayam Goreng" },
    { id: 10, menu: "Kangkung" },
  ];

  const renderMenuItem = ({ item }) => {
    return <MenuItem menus={item} />;
  };

  const renderMenuView = () => {
    const menuViews = [];
    for (let i = 0; i < menus.length; i++) {
      const startIndex = i + 3;
      const endIndex = i * 3 + 3;
      const dataMenu = menus.slice(startIndex, endIndex);
      let contentStyle = {
        flex: 1,
        justifyContent: "space-between",
      };
      if (dataMenu.length % 3 !== 0) {
        contentStyle = { flex: 1 };
      }
      const m = (
        <FlatList
          key={i}
          data={menus}
          horizontal
          renderItem={renderMenuItem}
          // numColumns={3}
          // columnWrapperStyle={{ justifyContent: "space-around" }}
          keyExtractor={(item) => item.id}
          contentContainerStyle={contentStyle}
        />
      );
      menuViews.push(m);
    }
    return menuViews;
  };

  return (
    <View style={{ flex: 1, marginHorizontal: theme.spacing.m }}>
      {renderMenuView}
    </View>
  );
};

export default MenuView;
