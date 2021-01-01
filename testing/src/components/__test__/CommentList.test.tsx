import React from 'react';
import { mount } from 'enzyme';

import StoreHoc from '../../utils/hoc/StoreHoc';
import CommentList from '../CommentList';

let wrapped: any;
beforeEach(() => {
  const initialState = {
    myComments: {
      comments: [{ value: 'comment 1' }, { value: 'comment 2' }],
    },
    auth: {
      isAuth: true
    },
  };
  wrapped = mount(
    <StoreHoc initialState={initialState}>
      <CommentList />
    </StoreHoc>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('show the text for each comment', () => {
  expect(wrapped.render().text()).toContain('comment 1');
  expect(wrapped.render().text()).toContain('comment 2');
});
