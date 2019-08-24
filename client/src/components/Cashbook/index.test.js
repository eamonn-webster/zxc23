import React from "react";
import MockAdapter from 'axios-mock-adapter';
import Cashbook from '.';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('Cashbook', () => {
  configure({ adapter: new Adapter() });

  const cashbook = {id: 1, title: 'Euro'};

  it('renders correct initial value in text input', () => {

    const onRemoveCashbook = jest.fn();
    const editingCashbook = jest.fn();

    const component = mount(<Cashbook cashbook={cashbook} onRemoveCashbook={onRemoveCashbook} editingCashbook={editingCashbook}/>);


    const h4 = component.find('h4').first();
    const title = h4.text();
    expect(title).toBe(cashbook.title);
    const buttons = component.find('button');
    expect(buttons.length).toBe(2);
    expect(buttons.first().text()).toBe('Edit');
    buttons.first().simulate('click');
    expect(editingCashbook).toHaveBeenCalledWith(1);

    expect(buttons.last().text()).toBe('Erase');
    buttons.last().simulate('click');
    expect(onRemoveCashbook).toHaveBeenCalledWith(1);
  });
});
