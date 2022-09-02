import { useTheme } from "../../shared/context/ThemeContext";

import { useDependency } from "../../shared/hook/UseDepedency";

import { useEffect, useState } from "react";

import Item from "./components/ProductItem";

import MainContainer from "../../shared/components/MainContainer";

import AppBackground from "../../shared/components/AppBackground";
import { FlatList, View } from "react-native";
import HeaderPageLabel from "../../shared/components/HeaderPageLabel";

const ProductList = () => {
  const theme = useTheme();
  const { productService } = useDependency();
  const [product, setProduct] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [isNext, setIsNext] = useState(true);

  useEffect(() => {
    onGetAllProduct();
  }, [page]);

  const onGetAllProduct = async () => {
    setFetching(true);
    try {
      const response = await productService.getAllProduct(page);

      if (page === 1) {
        setProduct([...response]);
      } else {
        setProduct((prevState) => [...prevState, ...response]);
      }

      setFetching(false);
      setIsNext(true);

      // setProduct([]);
      // const response = await productService.getAllProduct();
      // setProduct(response);
      // setFetching(false);
    } catch (e) {
      console.log(e);
      setFetching(false);
      setIsNext(false);
    }
  };

  const renderItem = ({ item }) => {
    return <Item productName={item.productName} />;
  };

  const onFetchMore = async () => {
    if (isNext) {
      setPage((prevState) => prevState + 1);
    } else {
      onGetAllProduct();
    }
  };

  const onRefresh = async () => {
    setPage(1);
  };

  return (
    <MainContainer>
      <AppBackground>
        <View style={{ margin: theme.spacing.xxl }}>
          <HeaderPageLabel text={"Product"} />

          <FlatList
            onRefresh={onRefresh}
            onEndReached={onFetchMore}
            refreshing={isFetching}
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
