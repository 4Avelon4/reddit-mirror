// если нужна среда браузера и window или его метода (window.setTimeout())
/**
 * @jest-enviroment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from '../Dropdown';


describe('Dropdown', () => {
  test('should render', () => {
    const wrapper = shallow(<Dropdown children={<div/>} button={<button/>} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  })

  test('should render', () => {
    const wrapper = shallow(<Dropdown children={<div/>} button={<button/>} />);
    expect(wrapper).toMatchSnapshot();
  })
})