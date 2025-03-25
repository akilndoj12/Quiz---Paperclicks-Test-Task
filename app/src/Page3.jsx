import React from 'react';
import { useStore } from './zustand/zustang';

const Page3 = () => {
  const { tedhenatUser, time } = useStore();
  console.log(tedhenatUser, 'tedhenatUser');
  console.log(time, 'time');
  return (
    <div className='container'>
      <h2>Thank you for your time</h2>

      <table>
        <thead>
          <tr>
            <th>te dhenat</th>
            <th>userit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>time</td>
            <td>{time} </td>
          </tr>
          <tr>
            <td>Firstname</td>
            <td>{tedhenatUser.firstname}</td>
          </tr>
          <tr>
            <td>LastName</td>
            <td>{tedhenatUser.lastname}</td>
          </tr>
          <tr>
            <td>email</td>
            <td>{tedhenatUser.email}</td>
          </tr>
          <tr>
            <td>phonenumber</td>
            <td>{tedhenatUser.phonenumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Page3;
