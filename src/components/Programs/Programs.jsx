import React from 'react'
import "./Programs.css"
import {programsData} from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"
export const Programs = () => {
  return (
    <div className="programs" id="programs">
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span> 
             <span>Progrems</span>
             <span className='stroke-text'>To Shape You</span>

        </div>
        <div className="program-categroies">
            {programsData.map((program ,i ) =>(
                <div  className="category" key={i}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details} </span>
                    <div className="join-now"><span>Join Now</span> <img src={RightArrow} alt="arraw" /></div>
                </div>
            ))}
        </div>
    </div>
  )
}
