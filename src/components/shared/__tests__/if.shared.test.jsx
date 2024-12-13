// bunx jest src/components/shared/__tests__/if.shared.test.jsx

import * as React from "react";
import { View } from "react-native";
import { render } from "@testing-library/react-native";

import { If } from "@/components/shared/if.shared";

describe("If", () => {
  it("should render children when condition is true", () => {
    const wrapper = render(
      <If condition={true}>
        <View testID="element" />
      </If>,
    );

    const element = wrapper.getByTestId("element");

    expect(element).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render nothing when condition is false", () => {
    const wrapper = render(
      <If condition={false}>
        <View testID="element" />
      </If>,
    );

    const element = wrapper.queryByTestId("element");

    expect(element).toBeNull();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render renderWhenTrue when condition is true", () => {
    const wrapper = render(
      <If
        condition={true}
        renderWhenTrue={<View testID="trueElement" />}
        renderWhenFalse={<View testID="falseElement" />}
      />,
    );

    const element = wrapper.queryByTestId("trueElement");

    expect(element).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render renderWhenFalse when condition is false", () => {
    const wrapper = render(
      <If
        condition={false}
        renderWhenTrue={<View testID="trueElement" />}
        renderWhenFalse={<View testID="falseElement" />}
      />,
    );

    const element = wrapper.queryByTestId("falseElement");

    expect(element).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
