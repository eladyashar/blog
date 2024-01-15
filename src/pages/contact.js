import {useEffect, useRef, useState} from "react";


export function ContactPage() {
  console.log('component render');
  const inputRef = useRef();
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(2);
  // const inputRef  = useState({ current: null })[0]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleInputFocus = () => {
    const inputElement = inputRef.current;

    inputElement.focus();
    inputElement.value = ""
  }

  useEffect(() => {
    console.log('Effect function');
    console.log(inputRef.current);
  }, [count]);

  return (
      <div>
        {console.log('component return')}
        <h1>Contact</h1>
        <p>Send us a message!</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input ref={inputRef} id="name" type="text"/>

          <label htmlFor="email">Email</label>
          <input id="email" type="text"/>

          <label htmlFor="message">Message</label>
          <textarea id="message"/>
          <button type="submit">Send</button>
        </form>

        <button onClick={handleInputFocus}>check input</button>
        <h2>count 1: {count}</h2>
        <button onClick={() => setCount(count + 1)}>check input</button>

        <h2>count 2: {count2}</h2>
        <button onClick={() => setCount2(count2 + 1)}>check input</button>

      </div>
  );
}
