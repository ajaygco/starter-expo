// Modules
import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import {
  useFonts as useSansFont,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

// Navigators
import { AppNavigator } from "@/components/app-navigator";

// NOTE:
// Keep the splash screen visible while we do startup work.
// It is recommended to call this in global scope without awaiting,
// rather than inside React components or hooks, because otherwise
// this might be called too late, when the splash screen is already hidden.
SplashScreen.preventAutoHideAsync();

// Component
export const AppSplash = () => {
  // Hooks
  const [isSansFontLoaded] = useSansFont({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_900Black,
  });

  // State
  const [isAppReady, setIsAppReady] = React.useState(false);

  // On Layout Root View
  const onLayoutRootView = React.useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  React.useEffect(() => {
    if (isSansFontLoaded) {
      setIsAppReady(true);
    }
  }, [isSansFontLoaded]);

  if (!isAppReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} className="w-full h-full">
      <AppNavigator />
    </View>
  );
};
