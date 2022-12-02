import React from "react";
import Project from "../cards/project/project";
import Journey from "../cards/journey/journey";
import Service from "../cards/service/service";
import Styles from './section.module.scss'
import { projects } from "../../data/projects";
import { journey } from "../../data/journey";
import { services } from "../../data/services";

const Section = (props) => {

    return (
        <div className={Styles.section} id={props.id}>
            <div className={Styles.section__title}>
                <h1>{props.title}</h1>
            </div>
            <div className={Styles.section__cards}>
                {
                props.id === "projets" ? (
                    projects.map(((project, index)=> (
                        <Project title={project.title} description={project.description} link={project.link} key={index}/> 
                    )))
                ) : 
                    null
                }

                {
                    props.id === "parcours" ? (
                        journey.map(((j, index)=> (
                            <Journey key={index} diploma={j.diploma} year={j.year} school={j.school}/> 
                        )))
                    ) : 
                        null
                }

                {
                    props.id === "services" ? (
                        services.map(((service, index)=> (
                            <Service title={service.title} type={service.type} description={service.description}/> 
                        )))
                    ) : 
                        null
                }
            </div>
        </div>
    )
}

export default Section