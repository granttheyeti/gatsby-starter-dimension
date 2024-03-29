import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-link"></span>
    </div>
    <div className="content">
      <div className="inner">
        <p>Different projects I'm working on</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button>
            <a href="https://miwpodcast.libsyn.com/trusting-god-in-chronic-pain-grant-hoffecker">Chronic Pain Podcast</a>
          </button>
        </li>
        <li>
          <button>
            <a href="https://anchor.fm/grapenutspodcast">Grape-Nuts Podcast</a>
          </button>
        </li>
        <li>
          <button>
            <a href="https://granttheyeti.medium.com/">The Yeti Version & Blog</a>
          </button>
        </li>
        <li>
          <button>
            <a href="https://thenotesproject.surge.sh">Notes Project</a>
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
