import React, { useState } from 'react';
import {Record } from '../../domain/models/User';

type UsersProps = {};

const UsersComponent: React.FC<UsersProps> = () => {
  
  const[record,setRecord] = useState<Record[]>([]);
  const [disable, setDisable] = React.useState(false);
  const getData = () =>
  {
      fetch('http://localhost:8000/api/user/api/getusers')
      .then(resposne=> resposne.json())
      .then(res=>setRecord(res))
      
  }

  console.log(record);

  return (
    <div >
      <h1>List of Users</h1>
      <ul >
        {record.map((i) => (
          <ul key={i._id}>
          <li><b>Name :</b> {i.username}<br/> <b>E-mail:</b> {i.email}</li>  
           </ul>     
        ))}
      </ul>
      <button disabled={disable} onClick={() => {
        getData();
        setDisable(true);}}>Load Users</button>

    </div>
  );
};

export default UsersComponent;

