import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailView.css';

const DetailView = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="detail-view">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default DetailView;
