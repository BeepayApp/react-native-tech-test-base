import { Stack } from 'expo-router/stack';
import { AppStore } from '@/store';
import { Provider as StoreProvider } from 'react-redux';

export default function Layout() {
  return (
    <StoreProvider store={AppStore}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </StoreProvider>
  );
}