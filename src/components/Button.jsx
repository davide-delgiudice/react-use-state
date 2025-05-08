import React from 'react'
import languages from '../assets/languages';
import { useState } from 'react';

function Button() {
    const [activeLanguage, setActiveLanguage] = useState(null)

  return (
    <div className='card-box'>
        <ul className='d-flex'>
        {languages.map((language) => (
            <li key={`language-${language.id}`}>
                <button onClick={() => setActiveLanguage(activeLanguage === language.id ? null : language.id)} className={activeLanguage === language.id ? 'active' : ''}>
                    {language.title}
                </button>
                {activeLanguage === language.id ? (
                    <div className='card'>
                        <h3>{language.title}</h3>
                        {language.description}
                    </div>
                ) : null }
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Button