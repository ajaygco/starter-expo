// Modules
import * as Haptics from "expo-haptics";
import { Alert as RnAlert } from "react-native";

// Helpers
import { captureException } from "@/helpers/analytics.helper";

// Consturctor: Alert
const _alert = ({ title, message, buttons, options }) => {
  RnAlert.alert(title, message, buttons, options);
};

// Consturctor: Error
const _error = async (config) => {
  try {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  } catch (error) {
    captureException(error);
  } finally {
    _alert(config);
  }
};

// Consturctor: Warning
const _warning = async (config) => {
  try {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
  } catch (error) {
    captureException(error);
  } finally {
    _alert(config);
  }
};

// Consturctor: Success
const _success = async (config) => {
  try {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  } catch (error) {
    captureException(error);
  } finally {
    _alert(config);
  }
};

// Exports
export const Alert = {
  error: _error,
  warning: _warning,
  success: _success,
};
