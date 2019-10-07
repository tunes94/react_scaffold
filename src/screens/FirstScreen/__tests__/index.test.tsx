import React from "react";
import { mount } from "enzyme";
import FirstScreen from "..";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockState = {
  field: {
    value: "Testing FirstScreen"
  }
};

const buildMockStore = (state: object) => configureMockStore()(state);

const buildTestableComponent = (component: JSX.Element, state = mockState) =>
  mount(<Provider store={buildMockStore(state)}>{component}</Provider>);

describe("<First Screen />", () => {
  it("should renders screen", (): void => {
    const wrapper = buildTestableComponent(<FirstScreen />);
    expect(wrapper).toBeDefined();
  });

  it("should have field value equal 'Other Value In Store' ", (): void => {
    const alternativeMockState = {
      field: { value: "Other Value In Store" }
    };
    const wrapper = buildTestableComponent(
      <FirstScreen />,
      alternativeMockState
    );
    const value = wrapper.find(".displayedValue").text();
    expect(value).toEqual("Other Value In Store");
  });
});
