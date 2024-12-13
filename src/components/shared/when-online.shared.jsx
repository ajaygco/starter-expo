// Modules
import { useIsConnected } from "react-native-offline";

// Component
export const WhenOnline = ({ children }) => {
  // Hooks
  const isDeviceConnected = useIsConnected();

  if (isDeviceConnected) {
    return children;
  }

  return null;
};
