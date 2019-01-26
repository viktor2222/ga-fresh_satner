import React from 'react'
import MainTitle from '../styles/main-title.module.scss'


const Title = props => (
    <div className={MainTitle.title_container}>
        <h3 className={MainTitle.main_section_title}>{props.h3}</h3>
        <p className={MainTitle.main_section_description}>{props.p}</p>
    </div>
)

export default Title