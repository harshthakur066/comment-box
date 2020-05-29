import React, { useState } from "react";
import axios from "axios";
import { Form, Message } from "semantic-ui-react";

const CommentBox = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const postComment = async (body) => {
    try {
      setErrorMsg("");
      await axios.post("/api/v1/post", body);
      alert("Comment Posted");
    } catch (err) {
      setErrorMsg(err.message);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      name: name,
      body: comment,
    };
    postComment(newPost);
    window.location.reload();
  };

  return (
    <div>
      <Form onSubmit={onSubmit} error={!!errorMsg}>
        <Form.Input
          required={true}
          fluid
          label="Your Nmae"
          placeholder="Enter Your Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.TextArea
          required={true}
          label="Comment"
          placeholder="Type a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {/* {success ? (
          <h4 style={{ color: "green" }}>Your comment has been posted!!!</h4>
        ) : null} */}
        <Message error header="Oops!" content={errorMsg} />
        <div>
          <Form.Button
            floated="right"
            style={{ marginBottom: "20px" }}
            negative
          >
            Post Comment
          </Form.Button>
        </div>
      </Form>
    </div>
  );
};

export default CommentBox;
