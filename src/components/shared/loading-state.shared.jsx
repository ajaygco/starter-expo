// Modules
import * as React from "react";
import { ActivityIndicator, View } from "react-native";

// Component
export const LoadingState = (props) => {
  return (
    <View className="items-center justify-center">
      <ActivityIndicator {...props} />
    </View>
  );
};
