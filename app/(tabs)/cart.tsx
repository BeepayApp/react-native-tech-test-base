import { View, Text, StyleSheet } from 'react-native';

export default function CartTab() {
  return (
    <View style={styles.container}>
      <Text>Cart Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});