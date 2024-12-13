// bunx jest src/helpers/__tests__/alert.helper.test.ts

import * as Haptics from "expo-haptics";

import { Alert } from "@/helpers/alert.helper";

jest.mock("expo-haptics", () => ({
  notificationAsync: jest.fn(),
  NotificationFeedbackType: {
    Error: "error",
    Warning: "warning",
    Success: "success",
  },
}));

describe("Alert", () => {
  it("should show error alert", () => {
    Alert.error({
      title: "Error",
      message: "This is an error message",
    });

    expect(Haptics.notificationAsync).toHaveBeenCalledWith(
      Haptics.NotificationFeedbackType.Error,
    );
  });

  it("should show warning alert", () => {
    Alert.warning({
      title: "Warning",
      message: "This is an warning message",
    });

    expect(Haptics.notificationAsync).toHaveBeenCalledWith(
      Haptics.NotificationFeedbackType.Warning,
    );
  });

  it("should show success alert", () => {
    Alert.success({
      title: "Success",
      message: "This is an success message",
    });

    expect(Haptics.notificationAsync).toHaveBeenCalledWith(
      Haptics.NotificationFeedbackType.Success,
    );
  });
});
