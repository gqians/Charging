import React from 'react'
import s from './style.module.css'
import config from '../../../utils/config'
const SideBar=()=>{
    return (
        <div className={s.sidebar}>
            <div className={s.title}>
                {config.sideBar[0].title}
            </div>
            <div className={s.content}>
                {config.sideBar[0].item.map((i,k)=>{
                    return(
                     <>
                        <a href={i.link} key={k} className={s.a}>{i.title}</a>
                    </>
                    )
                })}
            </div>
        </div>
    )
}
export default SideBar;