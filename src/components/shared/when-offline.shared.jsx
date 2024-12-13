// Modules
import { useIsConnected } from "react-native-offline";

// Component
export const WhenOffline = ({ children }) => {
  // Hooks
  const isDeviceConnected = useIsConnected();

  if (isDeviceConnected) {
    return null;
  }

  return children;
};
