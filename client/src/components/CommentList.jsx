import React from "react";
import { Card, Icon } from "semantic-ui-react";

const CommentList = ({ posts }) => {
  console.log(posts);

  const result = posts.map((post) => ({
    value: post._id,
    text: post.name,
    body: post.body,
  }));
  console.log(result);

  const postsList = () =>
    posts.map((post) => {
      return (
        <div>
          <div>
            <Card key={post._id} fluid={true}>
              <Card.Content>
                <Card.Header content={post.name} />
                <Card.Description content={post.body} />
              </Card.Content>
            </Card>
          </div>
          <div>
            <div>
              <Icon color="green" name="thumbs up" />
              {post.upVotes} upvotes
            </div>
            <div>
              <Icon color="red" name="thumbs down" />
              {post.downVotes} downvotes
            </div>
          </div>
        </div>
      );
    });

  return <div>{postsList()}</div>;
};

export default CommentList;
