import React from 'react';
import { useState } from 'react';
import { useStore } from './zustand/zustang';

const Page2 = () => {
  const [tedhenat, setDhenat] = useState({});
  const { tedhenatUser, setDhenatuser, setPages } = useStore();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDhenat((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checked === false) {
      alert('You must agree to the terms and conditions');
      return;
    }
    if (
      !tedhenatUser.firstname ||
      !tedhenatUser.lastname ||
      !tedhenatUser.email ||
      !tedhenatUser.phonenumber
    ) {
      alert('Please fill all the fields');
      return;
    }
    setDhenatuser(tedhenat);
    setPages(2);
  };

  return (
    <div className='container page2'>
      <h2>Add your personal details </h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            name='firstname'
            value={tedhenat.firstname || ''}
            onChange={handleChange}
            placeholder='firstname'
          />
        </label>{' '}
        <label>
          <input
            type='text'
            name='lastname'
            value={tedhenat.lastname || ''}
            onChange={handleChange}
            placeholder='lastname'
          />
        </label>{' '}
        <label>
          <input
            type='email'
            name='email'
            value={tedhenat.email || ''}
            onChange={handleChange}
            placeholder='email'
          />
        </label>{' '}
        <label>
          <input
            type='number'
            name='phonenumber'
            value={tedhenat.phonenumber || ''}
            onChange={handleChange}
            placeholder='phonenumber'
          />
        </label>
        <label className='checkbox'>
          <input
            type='checkbox'
            defaultChecked={checked}
            onChange={() => setChecked((state) => !state)}
          />
          You must agree to the terms and conditions
        </label>
        <button>SUBMIT TO YOUR DETAILS</button>
        <div className='term_privcy'>
          <p>Term and Condicion</p>
          <p className='mesit'>Privacy Policy</p>
          <p>California Privacy</p>
        </div>
      </form>
    </div>
  );
};

export default Page2;
