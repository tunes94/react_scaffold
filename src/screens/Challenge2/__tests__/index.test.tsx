import React from "react";
import { mount } from "enzyme";
import Challenge2 from "..";

const buildTestableComponent = (component: JSX.Element) => mount(component);

describe("<Challenge2 />", () => {
  it("should renders screen", (): void => {
    const wrapper = buildTestableComponent(<Challenge2 />);
    expect(wrapper).toBeDefined();
  });
});
