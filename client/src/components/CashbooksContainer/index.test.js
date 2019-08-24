import React from "react";
import MockAdapter from 'axios-mock-adapter';
import CashbooksContainer from '.';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import httpConfig from "../../config/http";
import waitUntil from "async-wait-until";

describe('CashbooksContainer', () => {
  configure({ adapter: new Adapter() });

  const mock = new MockAdapter(httpConfig);

  const fakeCashbooks = [{
    id: 1,
    title: "Euro",
    opening_value: 12.34
  }];

  const fakeNewCashbook = {
    id: 2,
    title: "Sterling",
    opening_value: 0.0
  };

  mock.onGet('/cashbooks').reply(200, fakeCashbooks);

  it('allows editing', async () => {
    mock.onPut('/cashbooks/1').reply(200);

    const component = mount(<CashbooksContainer/>);

    await waitUntil(() => component.state('cashbooks') !== []);
    component.update();
    // await waitUntil(() => component.find('Cashbook').length !== 0);

    // const cashbookComponents = component.find('Cashbook');
    // console.log('cashbookComponents.length:' + cashbookComponents.length);
    // console.log('component.state(\'cashbooks\').length:' + component.state('cashbooks').length);

    const buttons = component.find('button');
    expect(buttons.length).toBe(3);
    expect(buttons.first().text()).toBe('Edit');
    buttons.first().simulate('click');

    component.find('form').first().simulate('submit');

    // expect(buttons.last().text()).toBe('Add');
    // buttons.last().simulate('click');
  });

  it('allows editing failure', async () => {
    mock.onPut('/cashbooks/1').reply(500);

    const component = mount(<CashbooksContainer/>);

    await waitUntil(() => component.state('cashbooks') !== []);
    component.update();
    // await waitUntil(() => component.find('Cashbook').length !== 0);

    // const cashbookComponents = component.find('Cashbook');
    // console.log('cashbookComponents.length:' + cashbookComponents.length);
    // console.log('component.state(\'cashbooks\').length:' + component.state('cashbooks').length);

    const buttons = component.find('button');
    expect(buttons.length).toBe(3);
    expect(buttons.first().text()).toBe('Edit');
    buttons.first().simulate('click');

    component.find('form').first().simulate('submit');

    // expect(buttons.last().text()).toBe('Add');
    // buttons.last().simulate('click');
  });

  it('allows deleting', async () => {
    mock.onDelete('/cashbooks/1').reply(200);

    const component = mount(<CashbooksContainer/>);

    await waitUntil(() => component.state('cashbooks') !== []);
    component.update();

    const buttons = component.find('button');
    const eraseButton = buttons.findWhere(n => n.text() === 'Erase').first();
    expect(eraseButton.text()).toBe('Erase');
    eraseButton.simulate('click');
  });

  it('allows deleting failure', async () => {
    mock.onDelete('/cashbooks/1').reply(500);

    const component = mount(<CashbooksContainer/>);

    await waitUntil(() => component.state('cashbooks') !== []);
    component.update();

    const buttons = component.find('button');
    const eraseButton = buttons.findWhere(n => n.text() === 'Erase').first();
    expect(eraseButton.text()).toBe('Erase');
    eraseButton.simulate('click');
  });

  it('allows adding new', async () => {
    mock.onPost('/cashbooks').reply(200, fakeNewCashbook);

    const component = mount(<CashbooksContainer/>);

    await waitUntil(() => component.state('cashbooks') !== []);
    component.update();

    const buttons = component.find('button');
    expect(buttons.length).toBe(3);
    expect(component.find('input').first().props().placeholder).toBe("Title...");
    expect(component.find('input').last().props().placeholder).toBe("Opening...");
    component.find('input').first().simulate('change', { target: { value: 'Sterling' } });
    component.find('input').last().simulate('change', { target: { value: '1.2' } });

    // expect(buttons.last().text()).toBe('Add');
    // buttons.last().simulate('click');
    component.find('form').first().simulate('submit');
  });
  it('allows adding new failure', async () => {
    mock.onPost('/cashbooks').reply(500);

    const component = mount(<CashbooksContainer/>);

    await waitUntil(() => component.state('cashbooks') !== []);
    component.update();

    const buttons = component.find('button');
    expect(buttons.length).toBe(3);
    expect(component.find('input').first().props().placeholder).toBe("Title...");
    expect(component.find('input').last().props().placeholder).toBe("Opening...");
    component.find('input').first().simulate('change', { target: { value: 'Sterling' } });
    component.find('input').last().simulate('change', { target: { value: '1.2' } });

    // expect(buttons.last().text()).toBe('Add');
    // buttons.last().simulate('click');
    component.find('form').first().simulate('submit');
  });
});
