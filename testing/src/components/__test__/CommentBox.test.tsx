import React from 'react';
import { mount } from 'enzyme';

import StoreHoc from '../../utils/hoc/StoreHoc';
import CommentBox from '../CommentBox';

let wrapped: any;
beforeEach(() => {
  wrapped = mount(
    <StoreHoc>
      <CommentBox />
    </StoreHoc>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and two button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' },
    });
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when form is submittes, text area gets emptied', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
