import React from 'react';
import ProjectSummary from './ProjectSummary';


const Projectlist = ({projects}) => {
  return (
       <div className="project-List section">
           {projects && projects.map(project =>{
            return (
              <ProjectSummary project={project} key={project.id} />


            )
             
           })}

       </div>

  )
}


export default Projectlist;