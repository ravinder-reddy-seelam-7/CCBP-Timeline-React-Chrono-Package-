// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const dates = timelineItemsList.map(eachItem => ({title: eachItem.title}))
  console.log(dates)

  return (
    <div className="bg-container">
      <h1 className="top-head">
        MY JOURNEY OF <br />
        <span className="c">CCBP 4.0</span>
      </h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{primary: '#171f46', secondary: '#ffffff'}}
      >
        {timelineItemsList.map(eachItem =>
          eachItem.categoryId === 'COURSE' ? (
            <CourseTimelineCard eachItem={eachItem} key={eachItem.id} />
          ) : (
            <ProjectTimelineCard eachItem={eachItem} key={eachItem.id} />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimelineView
