import React from 'react';
import './index.css';
import { Post } from '../../domain/Post';

function Postcard(props: { post: Post }) {
  console.log(props.post);
  return (
    <section className="Postcard">
      <h4 className="Postcard-title">{props.post.title}</h4>
      <p className="Postcard-body">{props.post.body}</p>
    </section>
  );
}

export default Postcard;
