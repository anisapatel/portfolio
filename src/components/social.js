import React from "react"
import socialStyles from "../components/social.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faSquare } from "@fortawesome/free-solid-svg-icons"

const Social = () => {
  return (
    <div className={socialStyles.social}>
      <a
        href="https://www.linkedin.com/in/anisa-patel-758333123/"
        target="_blank"
        rel="noreferrer"
        className={socialStyles.faLinkedin}
      >
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon icon={faSquare} size="3x" color="white" />
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </span>
      </a>
      <a
        href="https://github.com/anisapatel"
        target="_blank"
        rel="noreferrer"
        className={socialStyles.faGithubSquare}
      >
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon icon={faSquare} size="3x" color="white" />
          <FontAwesomeIcon icon={faGithubSquare} size="3x" />
        </span>
      </a>

      <a
        href="https://twitter.com/annzy_p"
        target="_blank"
        rel="noreferrer"
        className={socialStyles.faTwitterSquare}
      >
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon icon={faSquare} size="3x" color="white" />
          <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
        </span>
      </a>
    </div>
  )
}

export default Social
