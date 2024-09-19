import React, { useLayoutEffect } from 'react';

import Postcard from '../postcard/Postcard';
import './index.css';
import { useStore } from '../../Infrastructure/store';
import { Post } from '../../domain/Post';
import { PostApi } from '../../Infrastructure/api/PostApi';
import { PostService } from '../../application/services/postService';
import { useParams } from 'react-router-dom';

function Posts() {
  const store = useStore();
  const { posts, updatePosts } = store;
  const postService = new PostService();
  const postApi = new PostApi(postService);
  const userId = useParams().id;
  useLayoutEffect(() => {
    userId && postApi.getPosts(userId).then((res) => updatePosts(res));
  }, []);

  return (
    <div className="Posts">
      {posts ? (
        posts.map((post: Post) => (
          <Postcard
            key={post.id}
            post={post}
          />
        ))
      ) : (
        <>Загрузка...</>
      )}
    </div>
  );
}

export default Posts;
