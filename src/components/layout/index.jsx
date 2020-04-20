import React ,{useEffect} from "react"
// import { Link } from "gatsby"

import Header from './header'
import { rhythm } from "../../utils/typography"
import config from '../../utils/config'
import s from './style.module.css'


const Layout = ({ location, title, children }) => {
  useEffect(()=>{
    Object.entries(config.theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  },[]);
  // const rootPath = `${__PATH_PREFIX__}/`
  // let header

  // if (location.pathname === rootPath) {
  //   header = (
  //     <h1
  //       style={{
  //         ...scale(1.5),
  //         marginBottom: rhythm(1.5),
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `Montserrat, sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   )
  // }
  return (
    <div>
      {/* <header>{header}</header> */}
      <Header></Header>
      <main className={s.main}>
        <div className={s.content}>
        {children}
        </div>
        <div className={s.sidebar}/>
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
