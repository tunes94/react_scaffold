import React from "react";
import { mount } from "enzyme";
import Challenge4 from "..";
import { shallow } from "enzyme";

// const buildTestableComponent = (component: JSX.Element) => mount(component);

// describe("<Challenge4 />", () => {
//   it("should renders screen", (): void => {
//     const wrapper = buildTestableComponent(<Challenge4 />);
//     expect(wrapper).toBeDefined();
//   });
// });

it("renders without crashing", (): void => {
  let mountedChallenge = shallow(<Challenge4 />);
});
