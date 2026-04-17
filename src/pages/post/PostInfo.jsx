import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostInfo = () => {
  
  const [post, setPost] = useState({});

  const {id} = useParams();
  console.log(id);

  useEffect(() => {
    const getPost = async () => {
      const res = await fetch(`http://localhost:10000/api/posts/${id}`)
      return res
    }

    getPost()
    .then(async (res) => {
      if(!res.ok) {
        const msg = await res.json();
        throw new Error(msg);
      }

      return await res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      alert(err?.message);
    });

  },[])

  return (
    <div>
      작성자 :
      게시판 제목 :
      게시판 내용 :
      조회수 :
    </div>
  );
};

export default PostInfo;