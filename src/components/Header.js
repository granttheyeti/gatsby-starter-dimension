import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-link"></span>
    </div>
    <div className="content">
      <div className="inner">
        <p>A portal to the different projects I'm working on</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button>
            <a href="https://www.faithandworkmovement.org/reconciliation">Faith & Work Movement</a>
          </button>
        </li>
        <li>
          <button>
            <a href="http://wonderproject.netlify.app/">Wonder Project</a>
          </button>
        </li>
        <li>
          <button>
            <a href="https://granttheyeti.medium.com/">The Yeti Version</a>
          </button>
        </li>
        <li>
          <button>
            <a href="https://anchor.fm/grapenutspodcast">Grape-Nuts Podcast</a>
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
