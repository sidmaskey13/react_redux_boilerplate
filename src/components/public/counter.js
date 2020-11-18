import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
      <div>
          <h1>Counter</h1>
        <p>Number: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={()=>setCount(count-1)}>Subtract</button>
    </div>
  );
}

export default Counter