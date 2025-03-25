import React from 'react';
import { useState } from 'react';
import { useStore } from './zustand/zustang';

const Page1 = () => {
  const [input, setTime] = useState('');

  const { time, setTimeMeting, setPages } = useStore();
  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input === '') {
      alert('Please select a time');
      return;
    }
    setTimeMeting(input);
    setPages(1);
  };
  return (
    <div className='container '>
      <h2>What is the best time to reach you?</h2>
      <form onSubmit={handleSubmit}>
        <select value={input} onChange={handleChange}>
          <option value=''>Choose your Time</option>
          <option value='8 AM CST'>8 AM CST</option>
          <option value='9 AM CST'>9 AM CST</option>
          <option value='10 AM CST'>10 AM CST</option>
          <option value='11 AM CST'>11 AM CST</option>
          <option value='12 PM CST'>12 PM CST</option>
          <option value='1 PM CST'>1 PM CST</option>
          <option value='2 PM CST'>2 PM CST</option>
          <option value='3 PM CST'>3 PM CST</option>
          <option value='4 PM CST'>4 PM CST</option>
          <option value='5 PM CST'>5 PM CST</option>
        </select>

        <p>(All time are in cst)</p>
        <button type='submit'>continue &gt;</button>

        <div className='term_privcy'>
          <p>Term and Condicion</p>
          <p className='mesit'>Privacy Policy</p>
          <p>California Privacy</p>
        </div>
      </form>
    </div>
  );
};

export default Page1;
