import React from 'react';
import Board from "./Board";

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it("should run this test", () => {
  expect(true).toBe(true);
});

it("should render an input component", () => {
  const wrapper = shallow(<Board />);
  console.log(wrapper.html());
  expect(wrapper.find("input").length).toBe(1);
});


it("should render 3 squares", () => {
  const wrapper = shallow(<Board />);
  expect(wrapper.find("div.board-row").length).toBe(3);
});
