import React from "react"
import { Link } from "gatsby"

import "./layout.scss"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <>
      
      <nav className="container">
        <Link to={`/`} className="brand">
          <img src="/logo.svg" className="logo" />
        </Link>
        <ul className="buttons links">
          <li className="btn-tw">
            <a href="https://twitter.com/intent/tweet?url=uiprint.co&text=If%20you%20love%20to%20draw%20your%20idea%20on%20paper%20and%20want%20some%20good%20sketchpad%20templates%20to%20speed%20up%20your%20design%20process.%20get%20https%3A%2F%2Fuiprint.co%20by%20%40realvjy">Share on twitter <img src="/twitter.svg"/></a>
          </li>
          <li className="pad-r24">
            <a href="https://github.com/realvjy/uiprint/releases/download/v1.0.1/uiprint-co-v1.0.1.zip" className="btn btn-color">Download all</a>
          </li>
          <li>
            <Link to={`/all-printable`} className="btn btn-outline">Explore all</Link>
          </li>
        </ul>
      </nav>
      </>
    )
    return (
      <div className="uiprint_main">
        <header>{header}</header>
        <main className="up_i">{children}</main>
        <footer className="container footer">
          <div className="dev-credit">
          <h3>Design and dev. <a href="https://vijayverma.co">vijay verma.</a> </h3>
          <ul className="scl-lnk">
            <li><a href="https://dribbble.com/realvjy" target="__blank"><img src="/dribbble.svg"/></a></li>
            <li><a href="https://twitter.com/realvjy" target="__blank"><img src="/twitter.svg"/></a></li>
            <li><a href="https://instagram.com/realvjy" target="__blank"><img src="/insta.svg"/></a></li>
          </ul>
          </div>
          <div className="company">
           <h3>Project by <a href="https://dribbble.com/uigate">uigate</a></h3>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
