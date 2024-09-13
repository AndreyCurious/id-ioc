import React, { useLayoutEffect } from 'react';
import {
  useCurrentUserIdStorage,
  usePostsStorage,
} from '../../services/storeageAdapter';
import { usePosts } from '../../services/apiAdapter';
import Postcard from '../postcard/Postcard';
import './index.css';
import { useShowPosts } from '../../application/showPosts';

function Posts() {
  const { currentUserId } = useCurrentUserIdStorage();
  const { showPosts } = useShowPosts();
  const { getPostsAsync } = usePosts();
  const { posts } = usePostsStorage();

  useLayoutEffect(() => {
    getPostsAsync(
      `https://jsonplaceholder.typicode.com/posts?userId=${currentUserId}`
    ).then((res) => {
      showPosts(res);
    });
  }, [currentUserId, showPosts]);

  return (
    <div className="Posts">
      {posts ? posts.map((post) => <Postcard post={post} />) : <>Загрузка...</>}
    </div>
  );
}

export default Posts;
