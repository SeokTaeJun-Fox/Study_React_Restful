import React, { useEffect, useState } from 'react';
    // 1번 회원 정보를 조회
    // 1번 회원 정보를 모두 화면에 출력하기
const MemberInfo = () => {

  const [member, setMember] = useState({});

  useEffect(() => {
    const getMember = async () => {
      const response = await fetch("http://localhost:10000/api/members/1");
      if(!response.ok) {
        const {message} = await response.json();
        alert(message);
        // 예외에 따른 핸들링 코드
        //throw new Error("getMemberInfo fetch notFound")
      }
      const json = await response.json();
      const {message, data} = json;

      setMember(data);
    }

    getMember()
    .then()
    .catch((err) => {
      console.log(err);
    });

  }, []);

  return (
    <div>
      <ul>
        <li>id : {member?.id}</li>
        <li>email : {member?.memberEmail}</li>
        <li>name : {member?.memberName}</li>
      </ul>
    </div>
  );
};

export default MemberInfo;