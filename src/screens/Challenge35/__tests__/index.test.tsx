import React from "react";
import { mount } from "enzyme";
import Challenge35 from "..";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const testState = {
  challenge35Reducer: {
    toDos: [
      {
        text: "This is a test",
        todo_state: true,
        todo_id: 100
      },
      {
        text: "Also a test",
        todo_state: false,
        todo_id: 101
      }
    ]
  }
};

const mockStore = (state: object) => configureMockStore()(state);

const buildTestableComponent = (component: JSX.Element, state = testState) =>
  mount(<Provider store={mockStore(testState)}>{component}</Provider>);

describe("<Challenge3.5 />", () => {
  const wrapper = buildTestableComponent(<Challenge35 />);
  
  beforeEach( () =>{
    console.log("Just a test - before each test");
  });

  it("should renders screen", (): void => {
    expect(wrapper).toBeDefined(); 
  });

  it.skip("should skip",(): void=> {
   expect(40 +2).toEqual(42);
  });

  it("async test1",done => {
    setTimeout(done,100);
   });

   it("async test2", () => {
     return new Promise(
      resolve => setTimeout(resolve,100))
   });

   it("should match snapshot", (): void => {
    expect(wrapper).toMatchSnapshot();
  });
});
