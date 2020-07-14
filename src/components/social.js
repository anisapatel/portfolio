import React from "react"
import socialStyles from "../components/social.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const Social = () => {
  return (
    <div className={socialStyles.social}>
      <a
        href="https://github.com/anisapatel"
        target="_blank"
        rel="noreferrer"
        className={socialStyles.faGithub}
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/anisa-patel-758333123/"
        target="_blank"
        rel="noreferrer"
        className={socialStyles.faLinkedin}
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://twitter.com/annzy_p"
        target="_blank"
        rel="noreferrer"
        className={socialStyles.faTwitter}
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  )
}

export default Social
