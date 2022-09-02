import { FlatList, View } from "react-native";
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

  return (
    <FlatList
      data={menus}
      renderItem={renderMenuItem}
      numColumns={3}
      columnWrapperStyle={{ justifyContent: "space-around" }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MenuView;
