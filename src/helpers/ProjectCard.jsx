import React from 'react'
import { Col} from 'react-bootstrap';


// DISPLAY CARD ON PROJECTS MAPPING
export const ProjectCard = ({title, description, imgUrl}) => {
  return (
        <Col size={12} sm={6} md={4}>
          <div>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
            </div>
        </Col>
    
  )
}





export default ProjectCard;