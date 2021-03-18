import React from 'react'
import s from './style.module.css'
import config from '../../../utils/config'
import { v4 as uuidv4 } from 'uuid'
import { CirclePicker } from 'react-color';
import cn from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'
import CloudTag from '../cloudTag'

// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const handleChangeComplete=(color)=>{
    const htmlElement = document.getElementsByTagName('html')[0]
    // htmlElement.style.getPropertyValue("--color-h");
    htmlElement.style.setProperty("--color-h",color.hsl.h);
    htmlElement.style.setProperty("--color-s",color.hsl.s*100);
    htmlElement.style.setProperty("--color-l",color.hsl.l*100);
    // htmlElement.style.setProperty("--color-bg-h",color.hsl.h);
    // htmlElement.style.setProperty("--color-bg-s",color.hsl.s*100);
    // htmlElement.style.setProperty("--color-bg-l",color.hsl.l*100);
}
const SideBar=(location)=>{
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
		// const location = this.props.location
    return (
        <div className={s.sidebar}>
            <div className={s.sideBarItem}>
                <div className={s.title}>
                    {config.sideBar[0].title}
                </div>
                <div>
                    {config.sideBar[0].item.map((i)=>{
                        return(
                            <a href={i.link} key={uuidv4()} className={s.a}>{i.title}</a>
                        )
                    })}
                </div>
            </div>
            <div className={s.sideBarItem}>
                <div  className={s.title}>
                    {config.sideBar[2].title}
                </div>
                <div className={s.content}>
                    <CirclePicker
                        onChangeComplete={ handleChangeComplete }
                    />
                </div>
          </div>
            <div className={cn(s.sideBarItem,s.last)}>
                <div  className={s.title}>
                    {config.sideBar[1].title}
                </div>
                <div>
                    <CloudTag data={data} location={location}/>
                </div>
            </div>
        </div>
    )
}
export default SideBar;