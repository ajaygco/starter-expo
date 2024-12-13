// bunx jest src/common/__tests__/utils.common.test.js

import { getUtcTimestamp } from "@/common/utils.common";

describe("utils.common", () => {
  describe("getUtcTimestamp", () => {
    it("should return a number", () => {
      expect(typeof getUtcTimestamp()).toBe("number");
    });
  });
});
