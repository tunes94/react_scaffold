import React from "react";
import { mount } from "enzyme";
import Challenge3 from "..";

const buildTestableComponent = (component: JSX.Element) => mount(component);

describe("<Challenge3 />", () => {
  it("should renders screen", (): void => {
    const wrapper = buildTestableComponent(<Challenge3 />);
    expect(wrapper).toBeDefined();
  });
});
