import React from "react";
import MockAdapter from 'axios-mock-adapter';
import EditCashbookForm from '.';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('EditCashbookForm', () => {
  configure({ adapter: new Adapter() });

  const newTitle = 'Euro';
  const cashbook = {id: 1, title: 'Euri'};

  const editCashbook = jest.fn();

  it('renders correct initial value in text input', () => {

    const component = mount(<EditCashbookForm cashbook={cashbook} editCashbook={editCashbook}/>);

    const buttons = component.find('button');
    expect(buttons.length).toBe(1);
    buttons.first().simulate('click');
    component.find('input').first().simulate('change', { target: { value: newTitle } });
    component.find('form').first().simulate('submit');
    expect(editCashbook).toHaveBeenCalledWith(1, 'Euri', undefined)
  });
});
