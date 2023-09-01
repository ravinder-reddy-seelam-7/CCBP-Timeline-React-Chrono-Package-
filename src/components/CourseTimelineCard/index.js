// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {eachItem} = props
  const {courseTitle, description, duration, tagsList, title} = eachItem
  return (
    <div className="card-container">
      <div className="card-title-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="calender-container">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="tags-list-contaier">
        {tagsList.map(eachTagListItem => (
          <p className="each-tag-list-item">{eachTagListItem.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
