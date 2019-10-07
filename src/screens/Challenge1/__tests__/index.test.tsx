import React from "react";
import { mount } from "enzyme";
import Challenge1 from "..";

const buildTestableComponent = (component: JSX.Element) => mount(component);

describe("<Challenge1 />", () => {
  it("should renders screen", (): void => {
    const wrapper = buildTestableComponent(<Challenge1 />);
    expect(wrapper).toBeDefined();
  });
});
