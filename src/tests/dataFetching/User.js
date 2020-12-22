import React, { useState, useEffect } from 'react';

const User = (props) => {
  const [user, setUser] = useState(null);

  const fetchUserData = async (id) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    setUser(await response.json());
  } 

  useEffect(() => {
    fetchUserData(props.id);
  }, [props.id]);

  if (!user) {
    return 'loading...';
  }

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>eMail: {user.email}</p>      
    </div>
  );
};

export default User;