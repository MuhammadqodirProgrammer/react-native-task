// // import {
// // 	DarkTheme,
// // 	DefaultTheme,
// // 	ThemeProvider,
// // } from '@react-navigation/native';
// // import { useFonts } from 'expo-font';
// // import { Stack } from 'expo-router';
// // import * as SplashScreen from 'expo-splash-screen';
// // import { useEffect } from 'react';
// // import 'react-native-reanimated';

// // import 'react-native-gesture-handler';
// // import React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';

// // import { useColorScheme } from '@/hooks/useColorScheme';
// // import { NativeScreenNavigationContainer } from 'react-native-screens';

// // // Prevent the splash screen from auto-hiding before asset loading is complete.
// // SplashScreen.preventAutoHideAsync();

// // export default function RootLayout() {
// // 	const colorScheme = useColorScheme();
// // 	const [loaded] = useFonts({
// // 		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
// // 	});

// // 	useEffect(() => {
// // 		if (loaded) {
// // 			SplashScreen.hideAsync();
// // 		}
// // 	}, [loaded]);

// // 	if (!loaded) {
// // 		return null;
// // 	}

// // 	return (
// // 		// <NavigationContainer>
// // 			<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
// // 				<Stack>
// // 					<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
// // 					<Stack.Screen name='+not-found' />
// // 				</Stack>
// // 			</ThemeProvider>
// // 		// </NavigationContainer>
// // 	);
// // }


// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

// import { useColorScheme } from '@/hooks/useColorScheme';
// import LandingScreen from './(tabs)/landing';
// import PaywallScreen from './(tabs)/paywall';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     // <NavigationContainer>
//       <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//         <Stack>
//           <Stack.Screen name='landing'  options={{ headerShown: false }} />
//           <Stack.Screen  name='paywall'  />
//           <Stack.Screen name='+not-found' />
//           {/* Add other screens here */}
//         </Stack>
//       </ThemeProvider>
//     // </NavigationContainer>
//   );
// }







import { useColorScheme } from '@/hooks/useColorScheme.web';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import LandingScreen from './(tabs)/landing';

// import { useColorScheme } from '@/components/useColorScheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Syncopate-Bold':require("../assets/fonts/Syncopate-Bold.ttf"),
    'Syncopate-Regular':require("../assets/fonts/Syncopate-Regular.ttf"),
    ...FontAwesome.font,
  });

  
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name='+not-found' />
      </Stack>
    </ThemeProvider>
  );
}