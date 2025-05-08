import React from 'react'
import languages from '../assets/languages';

function Main() {

  const sayHello = () => {
    alert("Hello!");
  };

  return (
    <main className='container'>
      <div>
        <h1>Learn Web development</h1>
      </div>
      <div>
        <ul>
          {languages.map((language) => (
            <li key={`language-${language.id}`}>
              <button onClick={sayHello}>
                {language.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Main