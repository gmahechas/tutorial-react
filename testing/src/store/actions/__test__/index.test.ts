import { Comment } from '../../../models/comment';
import { saveComment } from '../index';
import { SAVE_COMMENT } from '../types';

let saveCommentAction: ReturnType<typeof saveComment>;
describe('saveComment', () => {

  beforeEach(() => {
    const comment: Comment = { value: 'comentario 3' }
    saveCommentAction = saveComment(comment);
  });

  it('has the correct type', () => {
    expect(saveCommentAction.type).toEqual(SAVE_COMMENT);
  });
  it('has the correct payload', () => {
    expect(saveCommentAction.payload).toEqual({ value: 'comentario 3' });
  });
});