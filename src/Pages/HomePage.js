
import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee } from '@fortawesome/free-solid-svg-icons'

        
function HomePage() {
  return (
    <div className="HomePage">
        <header className="hero">
          <h1 className="hero-text">
            Naraku!
            <span>
              owo ow ow owo uwu uwu uwu owo
            </span>
            </h1>
            <p className="h-sub-text">
              Ayayaya!!!!
            </p>
            <div className="icons">
              <Link className="icon-holder">
                <FontAwesomeIcon icon={faCoffee} className="icon git" />
              </Link>
              <Link className="icon-holder">
                <FontAwesomeIcon icon={faCoffee} className="icon ln" />
              </Link>
            </div>        
        </header>     
    </div>
  );
}

export default HomePage;
