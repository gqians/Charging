import React ,{useEffect} from "react"
// import { Link } from "gatsby"

import Header from './header'
import SideBar from './sideBar'
import { rhythm } from "../../utils/typography"
import config from '../../utils/config'
import s from './style.module.css'
import '../../styles/global.css'

const Layout = ({ location, title, children }) => {
  useEffect(()=>{
    Object.entries(config.theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  },[]);
  return (
    <div>
      {/* <header>{header}</header> */}
      <Header></Header>
      <main className={s.main}>
        <div className={s.content}>
        {children}
        </div>
        <div className={s.sidebar}>
          <SideBar></SideBar>
        </div>
      </main>
      <footer className={s.footer}>
        © {new Date().getFullYear()}, Built with 汇哥全球后援会  
      <a href="https://www.gatsbyjs.org" className={s.link}>{`   `}搭建基于Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
