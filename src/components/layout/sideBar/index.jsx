import React from 'react'
import s from './style.module.css'
import config from '../../../utils/config'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'
import CloudTag from '../cloudTag'
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const SideBar=()=>{
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(
          limit: 2000
        ) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
  `)
  
    return (
        <div className={s.sidebar}>
            <div className={s.sideBarItem}>
                <div className={s.title}>
                    {config.sideBar[0].title}
                </div>
                <div className={s.content}>
                    {config.sideBar[0].item.map((i)=>{
                        return(
                            <a href={i.link} key={uuidv4()} className={s.a}>{i.title}</a>
                        )
                    })}
                </div>
            </div>
            <div className={cn(s.sideBarItem,s.last)}>
                <div  className={s.title}>
                    {config.sideBar[1].title}
                </div>
                <div className={s.content}>
                    <CloudTag data={data}/>
                </div>
            </div>
        </div>
    )
}
export default SideBar;