import React from "react";
import { Card, Icon, Grid, Button } from "semantic-ui-react";
import axios from "axios";

const CommentList = ({ posts }) => {
  console.log(posts);

  // const result = posts.map((post) => ({
  //   value: post._id,
  //   text: post.name,
  //   body: post.body,
  // }));
  // console.log(result);

  const upVote = async (id) => {
    try {
      await axios.put(`/api/v1/upvotes/${id}`);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  const downVote = async (id) => {
    try {
      await axios.put(`/api/v1/downvotes/${id}`);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  const postsList = () =>
    posts.map((post) => {
      return (
        <div style={{ marginTop: "4%" }}>
          <Grid>
            <Grid.Row stretched>
              <Grid.Column floated="left" width={10}>
                <Card fluid={true}>
                  <Card.Content>
                    <Card.Header content={post.name} />
                    <Card.Description content={post.body} />
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column floated="right" width={4}>
                <Button
                  onClick={() => upVote(post._id)}
                  style={{ margin: "5px" }}
                >
                  <Icon color="green" name="thumbs up" />
                  {post.upVotes} upvotes
                </Button>

                <Button
                  onClick={() => downVote(post._id)}
                  content="Standard"
                  style={{ margin: "5px" }}
                >
                  <Icon color="red" name="thumbs down" />
                  {post.downVotes} downvotes
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );
    });

  return <div style={{ marginTop: "10%" }}>{postsList()}</div>;
};

export default CommentList;
