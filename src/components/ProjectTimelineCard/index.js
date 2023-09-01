// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {eachItem} = props
  const {imageUrl, description, duration, projectTitle, projectUrl} = eachItem

  return (
    <div className="card-container">
      <img src={imageUrl} alt="PROJECT" className="image" />
      <div className="card-title-container">
        <h1 className="course-title">{projectTitle}</h1>
        <div className="calender-container">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
