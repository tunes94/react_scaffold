import React from "react";
import { mount } from "enzyme";
import Challenge35 from "..";

const buildTestableComponent = (component: JSX.Element) => mount(component);

describe("<Challenge3.5 />", () => {
  it("should renders screen", (): void => {
    const wrapper = buildTestableComponent(<Challenge35 />);
    expect(wrapper).toBeDefined();
  });
});
