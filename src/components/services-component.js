import React from 'react'
import Title from './main-title'
import ServiceStyle from '../styles/services-component.module.scss'

const SkillServices = props => (
    <div className={ServiceStyle.skill_container}>
        <div className="d-flex flex-column align-items-center">
            <img src={props.src} alt="skill services" />
            <h4>{props.title_skill}</h4>
            <p>{props.skill_description}</p>
        </div>
    </div>
)

export default () => (

    <div className="container">
        <Title
        h3="SERVICE OFFERS"
        p="Is give may shall likeness made yielding spirit a itself togeth created after sea
        is in beast beginning signs open god you're gathering ithe" />
        <div className="row">
            <div className="col-md-3">
                <SkillServices
                src="./images/services/s1.png"
                title_skill="WP DEVELOPING"
                skill_description="Creeping for female light years that lesser can't evening heaven isn't bearing tree"/>
            </div>
            <div className="col-md-3">
                <SkillServices
                src="./images/services/s2.png"
                title_skill="UI/UX DESIGN"
                skill_description="Creeping for female light years that lesser can't evening heaven isn't bearing tree"/>
            </div>
            <div className="col-md-3">
                <SkillServices
                src="./images/services/s3.png"
                title_skill="WEB DESIGN"
                skill_description="Creeping for female light years that lesser can't evening heaven isn't bearing tree"/>
            </div>
            <div className="col-md-3">
                <SkillServices
                src="./images/services/s4.png"
                title_skill="SEO OPTIMIZE"
                skill_description="Creeping for female light years that lesser can't evening heaven isn't bearing tree"/>
            </div>
        </div>
    </div>
)
