import React from 'react'
import { Link,useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../../../utils/typography"
import s from './style.module.css'
import config from '../../../utils/config'
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
    return (
    <header className={s.header}>
        <div className={s.imgLogo}/>
        <div className={s.textLogo}>
            <span className={s.firstLine}>
            {data.site.siteMetadata.author.name}
            </span>
            <br/>
            <sapn className={s.secondLine}>
            {data.site.siteMetadata.description}
            </sapn>
        </div>
        <div className={s.menu}>
            {
                config.menuNavs.map((item)=>{
                    return(
                        <span className={s.link}>
                            <Link style={{ boxShadow: `none` }} to={item.link}>
                                {item.title}
                            </Link>
                        </span>
                    )
                })
            }
        </div>
    </header>
    )
}
export default Header;