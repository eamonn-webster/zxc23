import React from "react";
import MockAdapter from 'axios-mock-adapter';
import NewCashbookForm from '.';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('NewCashbookForm', () => {
  configure({ adapter: new Adapter() });

  const newTitle = 'Euro';
  const cashbook = {id: 1, title: 'Euri'};

  const onNewCashbook = jest.fn();

  it('renders correct initial value in text input', () => {

    const component = mount(<NewCashbookForm cashbook={cashbook} onNewCashbook={onNewCashbook}/>);

    // const title = component.find('h4').first().text();
    // expect(title).toBe(cashbook.title);
    const buttons = component.find('button');
    expect(buttons.length).toBe(1);
    buttons.first().simulate('click');
    component.find('input').first().simulate('change', { target: { value: newTitle } });
    component.find('form').first().simulate('submit');
    // expect(editCashbook).toHaveReceived(cashbook)
  });
});
