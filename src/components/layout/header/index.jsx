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
					scale: 1.00,
					scaleMobile: 1.00,
					backgroundColor: 0x7192f,
					color1: 0x783816,
					color2: 0xb3ff,
					birdSize: 2.10,
					wingSpan: 27.00,
					separation: 80.00,
					alignment: 29.00,
					cohesion: 20.00
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