import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import MockAdapter from 'axios-mock-adapter';
import httpConfig from './config/http';
import waitUntil from 'async-wait-until';

configure({adapter: new Adapter()});

const mock = new MockAdapter(httpConfig);

beforeEach(() => {
  mock.reset();
});

it('renders without crashing', async (done) => {
  const fakeCashbooks = [{
    id: 1,
    title: "Euro",
    opening_value: 12.34
  }];

  mock.onGet('/cashbooks').reply(200, fakeCashbooks);

  const component = mount(<App/>);
  const container = component.find('CashbooksContainer').first();

  await waitUntil(() => container.state('cashbooks') !== []);

  const {cashbooks} = container.state();

  expect(cashbooks.length).toEqual(1);
  done();
});
