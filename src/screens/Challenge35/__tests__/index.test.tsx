import React from "react";
import { mount } from "enzyme";
import Challenge35 from "..";
import { shallow } from "enzyme";

// const buildTestableComponent = (component: JSX.Element) => mount(component);

// describe("<Challenge3.5 />", () => {
//   it("should renders screen", (): void => {
//     // let m = shallow{<Challenge35/>};
//     const wrapper = buildTestableComponent(<Challenge35 />);
//     expect(wrapper).toBeDefined();
//   });
// });

it("renders without crashing", (): void => {
  let mountedChallenge = shallow(<Challenge35 />);
});
