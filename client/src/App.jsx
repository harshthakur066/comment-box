import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import axios from "axios";

import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await axios.get("/api/v1/post");
      // console.log(res.data);
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  // console.log(typeof posts);

  return (
    <div style={{ marginTop: "20px" }}>
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
      <Container>
        <h1 style={{ textAlign: "center" }}>Share your thoughts...</h1>
        <div>
          <CommentBox />
        </div>
        <div>
          <CommentList posts={posts} />
        </div>
      </Container>
    </div>
  );
}

export default App;
