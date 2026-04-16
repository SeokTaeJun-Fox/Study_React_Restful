import React, { useEffect, useState } from 'react';

const MemberList = () => {

  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    const getMemberList = async () => {
      const response = await fetch("http://localhost:10000/api/members");
      const memberList = await response.json();
      console.log("getMemberList", memberList);
      const {message, data} = memberList;
      setMemberList(data)
    }

    getMemberList();
  }, [])

  console.log("캮 :" + memberList);

  const a = memberList.map((data, i) => <li key={i}>{data.memberEmail}</li>);
  
  return (
    <div>
      회원목록 
      <ul>
        {a}
      </ul>
    </div>
  );
};

export default MemberList;