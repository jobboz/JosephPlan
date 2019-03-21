import React from 'react';



const ProjectDetails = (props) => {
    const id = props.match.params.id; //route id
    return(
      <div className="container section project-details">
         <div className="card z-depth-0">
           <div className="card-content">

           <span className="card-tittle">Project Tittle - { id }</span>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error unde hic quidem dolor explicabo voluptates nobis aut voluptas ut quae esse, maiores dolorum ipsa architecto sit obcaecati rerum laboriosam.</p>
           </div>
           <div className="card-action gret lighten-darken-4 grey-text">
                <div>Posted by The Net Ninja</div>
                <div>2nd of September, 2am</div>
           </div>
         
         </div>
      </div>
    )

}

export default ProjectDetails;