import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped: any;
beforeEach(() => {
  wrapped = shallow(<App />);
});
it('show a comment nox', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});