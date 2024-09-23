import { View, StyleSheet } from 'react-native';
import { useGetAllProductsQuery } from '@/api';
import { FlashList } from '@shopify/flash-list';
import { HeaderTitle } from '@react-navigation/elements';
import { TProduct } from '@/api/endpoints/products';
import { Card } from '@/components/CardProduct';
import SkeletonCard from '@/components/CardProduct/skeleton';

export default function HomeTab() {
  const { data, isLoading } = useGetAllProductsQuery(undefined);

  return (
    <View style={styles.container}>
      <HeaderTitle>List Product Example</HeaderTitle>

      <FlashList
        data={isLoading ? Array.from({ length: 10 }) : data} // 10 skeletons se estiver carregando
        renderItem={({ item, index }: { item: TProduct, index: number}) =>
          isLoading ? (
            <SkeletonCard key={index} /> // Exibir skeleton enquanto carrega
          ) : (
            <Card key={item.id} title={item.title} price={item.price} />
          )
        }
        keyExtractor={(item, index) => (isLoading ? index.toString() : item.id)}
        estimatedItemSize={100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
});