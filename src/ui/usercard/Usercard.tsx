import React from 'react';
import { User } from '../../domain/User';
import { Link } from 'react-router-dom';
import './index.css';

function Usercard(props: {
  user: User;
  updateCurrentUserId: (id: number) => void;
}) {
  return (
    <Link
      onClick={() => props.updateCurrentUserId(props.user.id)}
      to={`/posts/${props.user.id}`}
    >
      <section className="Usercard">
        <h4 className="Usercard-username">Username: {props.user.username}</h4>
        <span className="Usercard-email">Email: {props.user.email}</span>
        <span className="Usercard-name">Name: {props.user.name}</span>
      </section>
    </Link>
  );
}

export default Usercard;
