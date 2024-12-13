// bunx jest src/common/__tests__/configs.common.test.js

import { appConfig } from "@/common/configs.common";

describe("configs.common", () => {
  describe("appConfig", () => {
    it("should match snapshot", () => {
      expect(appConfig).toMatchSnapshot();
    });
  });
});
