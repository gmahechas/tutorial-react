import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import StoreHoc from '../utils/hoc/StoreHoc';
import App from '../components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'comment 1' }, { name: 'comment 2' }],
  });
});
afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  const wrapped = mount(
    <StoreHoc>
      <App />
    </StoreHoc>
  );
  wrapped.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
