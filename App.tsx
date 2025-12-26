import { useColorScheme } from 'nativewind';
import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <>
      <ScreenContent title="Home" path="App.tsx">
        <Pressable
          onPress={toggleColorScheme}
          className="absolute right-8 top-16"
          accessibilityLabel="Toggle Theme"
          accessibilityRole="togglebutton"
          accessibilityHint="Press this to toggle the theme."
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
          <AntDesign
            size={36}
            name={colorScheme === 'light' ? 'moon' : 'sun'}
            color={colorScheme === 'light' ? '#000' : '#fff'}
          />
        </Pressable>
      </ScreenContent>
      <StatusBar style="auto" />
    </>
  );
}
