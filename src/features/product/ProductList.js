import { useTheme } from "../../shared/context/ThemeContext";

import { useDependency } from "../../shared/hook/UseDepedency";

import { useEffect, useState } from "react";

import Item from "./components/ProductItem";

import MainContainer from "../../shared/components/MainContainer";

import AppBackground from "../../shared/components/AppBackground";
import { FlatList, View } from "react-native";

const ProductList = () => {
  const theme = useTheme();
  const { productService } = useDependency();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    onGetAllProduct();
  }, []);

  const onGetAllProduct = async () => {
    try {
      const response = await productService.getAllProduct();
      setProduct(response);
    } catch (e) {
      console.log("Error");
    }
  };

  const renderItem = ({ item }) => {
    return <Item productName={item.productName} />;
  };

  return (
    <MainContainer>
      <AppBackground>
        <View style={{ margin: theme.spacing.s }}>
          <FlatList
            data={product}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </AppBackground>
    </MainContainer>
  );
};

export default ProductList;
