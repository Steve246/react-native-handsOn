import { ScrollView, View } from "react-native";
import PromoItem from "./PromoItem";

const PromoView = () => {
  const promos = [
    { id: 1, promo: "Discount" },
    { id: 2, promo: "buy 1 get 1" },
    { id: 3, promo: "Cashback 50%" },
    { id: 4, promo: "Free Ongkir, max belanja 10rb" },
    { id: 5, promo: "New Year Discount" },
    { id: 6, promo: "Buy 2 get 1" },
    { id: 7, promo: "Get 100 rb, mac order" },
    { id: 9, promo: "Discount 10% min.300rb" },
    { id: 10, promo: "Discount 20% min.500rb" },
    { id: 11, promo: "Discount 17% All F&B" },
  ];
  const renderPromoItem = () => {
    const promoItems = [];
    for (let i = 0; i < Math.ceil(promos.length / 2); i++) {
      let promo1Idx = 1 * 2;
      let promo2Idx = i * 2 + 1;

      if (promo2Idx === promos.length) {
        promo2Idx = null;
      }

      const p = (
        <View key={i}>
          <PromoItem promo={promos[promo1Idx]} />

          {promo2Idx && <PromoItem promo={promos[promo2Idx]} />}
        </View>
      );

      promoItems.push(p);
    }
    return promoItems;
  };
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {renderPromoItem()}
    </ScrollView>
  );
};

export default PromoView;
