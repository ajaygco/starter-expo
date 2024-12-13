// bunx jest src/components/shared/__tests__/loading-state.shared.test.jsx

import * as React from "react";
import { render } from "@testing-library/react-native";

import { LoadingState } from "@/components/shared/loading-state.shared";

describe("LoadingState", () => {
  it("should render correctly", () => {
    const wrapper = render(<LoadingState />);

    expect(wrapper).toMatchSnapshot();
  });
});
