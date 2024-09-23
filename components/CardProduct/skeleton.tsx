import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

// Skeleton Card para placeholder
const SkeletonCard = () => {
  const shimmerAnim = React.useRef(new Animated.Value(0)).current;

  // Animação para o efeito de brilho
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [shimmerAnim]);

  const shimmerOpacity = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 1],
  });

  return (
    <Animated.View style={[styles.skeletonCard, { opacity: shimmerOpacity }]}>
      <View style={styles.skeletonTitle} />
      <View style={styles.skeletonPrice} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  skeletonCard: {
    width: '100%',
    padding: 16,
    backgroundColor: '#e0e0e0', // Cor do skeleton
    borderRadius: 8,
    marginBottom: 16,
  },
  skeletonTitle: {
    width: '70%',
    height: 20,
    backgroundColor: '#ccc', // Cor do skeleton para título
    borderRadius: 4,
    marginBottom: 10,
  },
  skeletonPrice: {
    width: '30%',
    height: 16,
    backgroundColor: '#ccc', // Cor do skeleton para preço
    borderRadius: 4,
  },
});

export default SkeletonCard;