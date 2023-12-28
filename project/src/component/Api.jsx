import React, { useState } from 'react';

function Api() {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendPostRequest = () => {
  const item = {
    userId: 1,
    title:{input},
    body: "API Body",
  }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      body: JSON.stringify(item),
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
    });
  };

  return (
    <div>
      <form>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="button" onClick={sendPostRequest}>Send POST Request</button>
      
      </form>
    </div>
  );
}

export default Api;
