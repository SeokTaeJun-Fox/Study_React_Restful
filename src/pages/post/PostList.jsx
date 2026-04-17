import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPostList = async () => {
        const res = await fetch("http://localhost:10000/api/posts?order=order")

        if(!res.ok) {
          const msg = await res.json();
          throw new Error(msg?.message);
        }

        const {message, data} = await res.json()
        setPostList(data);
    }

    getPostList()
    .catch((error) => {
      alert(error.message);
    });

  },[])

  const posts = postList?.map(({id, postTitle, postContent, postReadCount, memberName}, i) => {
    return (
      <tr key={i}>
        <td>{id}</td>
        <td>{memberName}</td>
        <td><Link to={`/post/post-info/${id}`}>{postTitle}</Link></td>
        <td>{postContent}</td>
        <td>{postReadCount}</td>
      </tr>
    )
  });

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>작성자</th>
            <th>제목</th>
            <th>내용</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {posts}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;