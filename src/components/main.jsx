import React from 'react'

function Main() {

  const sayHello = () => {
    alert("Hello!");
  };

  return (
    <main>
      <div className='container'>
        <h1>Learn Web development</h1>
      </div>
      <div>
        <button onClick={sayHello}>Click me!</button>
      </div>
    </main>
  )
}

export default Main