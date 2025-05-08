import React from 'react'
import languages from '../assets/languages';

function Button() {
    const sayHello = () => {
        alert("Hello!");
    };

  return (
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
  )
}

export default Button