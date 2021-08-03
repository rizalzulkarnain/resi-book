import PropTypes from 'prop-types';
import { ReplyFormContainer, Button } from '../../styles';

const CommentForm = ({ message, handleOnChange, handleSubmit }) => {
  return (
    <ReplyFormContainer>
      <h4>Comment</h4>

      <form onSubmit={handleSubmit}>
        <textarea type="text" value={message} onChange={handleOnChange} />
        <div>
          <Button modifiers="submit" type="submit">
            Comment
          </Button>
        </div>
      </form>
    </ReplyFormContainer>
  );
};

CommentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default CommentForm;
