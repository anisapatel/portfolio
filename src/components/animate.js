import React from "react"
import animateStyles from "../components/animate.module.scss"

const FadeInSection = props => {
  const [isVisible, setVisible] = React.useState(false)
  const domRef = React.useRef()
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
  }, [])
  return (
    <div
      className={`${animateStyles.fadeIn} ${
        isVisible ? animateStyles.fadeInIsVisible : ""
      }`}
      ref={domRef}
    >
      {props.children}
    </div>
  )
}

export default FadeInSection
