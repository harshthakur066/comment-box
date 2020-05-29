import React from "react";
import { Form } from "semantic-ui-react";

const CommentBox = () => {
  return (
    <div>
      <Form>
        <Form.Input fluid label="Your Nmae" placeholder="Enter Your Name..." />
        <Form.TextArea label="Comment" placeholder="Type a comment..." />
        <Form.Button floated="right" negative>
          Post Comment
        </Form.Button>
      </Form>
    </div>
  );
};

export default CommentBox;
