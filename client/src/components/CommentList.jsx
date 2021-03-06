import React from "react";
import { Card, Icon, Grid, GridColumn } from "semantic-ui-react";
import axios from "axios";

const CommentList = ({ posts }) => {
  // console.log(posts);

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
        <div key={post._id} style={{ marginTop: "4%" }}>
          {/* {posts.indexOf(post) + 1} */}
          <Grid>
            <Grid.Row>
              <GridColumn
                style={{ marginRight: "0px" }}
                floated="left"
                width={1}
              >
                <h3> {posts.indexOf(post) + 1} </h3>
              </GridColumn>
              <Grid.Column floated="left" width={10}>
                <Card fluid={true}>
                  <Card.Content>
                    <Card.Header content={post.name} />
                    <Card.Description content={post.body} />
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column floated="right" width={2}>
                <div style={{ margin: "5px" }}>
                  <Icon
                    onClick={() => upVote(post._id)}
                    color="green"
                    link
                    name="thumbs up"
                  />
                  {post.upVotes} upvotes
                </div>

                <div style={{ margin: "5px" }}>
                  <Icon
                    onClick={() => downVote(post._id)}
                    color="red"
                    link
                    name="thumbs down"
                  />
                  {post.downVotes} downvotes
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );
    });

  return <div style={{ marginTop: "10%" }}>{postsList()}</div>;
};

export default CommentList;
