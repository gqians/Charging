import React ,{useEffect} from "react"
// import { Link } from "gatsby"
import Header from './header'
import SideBar from './sideBar'
import ToTop from './toTop'
import { rhythm } from "../../utils/typography"
import config from '../../utils/config'
import s from './style.module.css'
import '../../styles/global.css'
import BackToTop from './backToTop'
const Layout = ({ location, title, children }) => {
	
  useEffect(()=>{
    // const options = { 
		// 	color: 'rgb(180, 180, 180)',
		// 	invert: true,
		// 	opacity: 0.1
		// };
		// new Blobity(options);
  },[]);
  return (
    <div>
      {/* <header>{header}</header> */}
			{/* <Blobity></Blobity> */}
      <Header></Header>
      <main className={s.main}>
        <div className={s.content}>
        {children}
        </div>
        <div className={s.sidebar}>
          <SideBar location={location}/>
          <BackToTop/>
        </div>
      </main>
      <footer className={s.footer}>
        © {new Date().getFullYear()}, Built with 汇哥全球后援会,联系我(qhong1250@gmail.com)
      <a href="https://www.gatsbyjs.org" className={s.link}>{`   `}搭建基于Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
