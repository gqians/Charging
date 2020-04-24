import React from 'react'
import s from './style.module.css'
import config from '../../../utils/config'
import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const SideBar=()=>{
    return (
        <div className={s.sidebar}>
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
    )
}
export default SideBar;