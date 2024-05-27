import React from 'react'
import data from '../stuffs/data.json'

const Timeline = () => {
  return (
  <div id='timeline'>
    <div className='timelineBox'>

        {
            data.projects.map((item,index)=>(
                <TimelineItem 
                heading={item.title} 
                text={item.date} 
                index={index} 
                key={item.title}/>
            ))
        }
    </div>
    </div>
  )
}

const TimelineItem = ({heading,text,index})=> (
    <div className={`timeLineItem ${index%2===0?
    "leftTimeline" : "rightTimeline"}`}>
        <div>{/* all title names */}
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    </div>
)

export default Timeline