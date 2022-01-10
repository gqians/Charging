import React, { useState, useEffect, useRef } from 'react'
import { Link,useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../../../utils/typography"
import Pag from '../../pagination'
import s from './style.module.css'
import config from '../../../utils/config'
import BIRDS from 'vanta/dist/vanta.birds.min'
import * as THREE from 'three'
function Header(){
    const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          description
          social {
            twitter
          }
        }
      }
    }
  `);
	console.log(THREE);
	const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
				BIRDS({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0
				})
			)
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect]);
    return (
    <header ref={vantaRef} className={s.header}>
			<div className={s.content}>
				<div className={s.imgLogo}/>
				<div className={s.textLogo}>
						<span className={s.firstLine}>
						{data.site.siteMetadata.author.name}
						</span>
						<br/>
						<span className={s.secondLine}>
						{data.site.siteMetadata.description}
						</span>
				</div>
				<div className={s.menu}>
						{
								config.menuNavs.map((item,key)=>{
										return(
												<span className={s.link} key={key}>
														<Link className={s.link} style={{ boxShadow: `none` }} to={item.link}>
																{item.title}
														</Link>
												</span>
										)
								})
						}
				</div>
			</div>
    </header>
    )
}
export default Header;