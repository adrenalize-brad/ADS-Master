import React from 'react';

export default function ProjectType(){

    
    return(

        <div>
            <h3>Project Type</h3>
            <select name="Project Type" id="project-type">
                <option value="placeholder" disabled>Select a project type...</option>
                <option value="new-website">Basic Landing Page</option>
                <option value="site-redevelopment">Site Redevelopment</option>
                <option value="e-commerce">e-Commerce Startup</option>
                <option value="marketing">Digital Marketing</option>
                <option value="business-consult">Business Development</option>
                <option value="general-consultation">General Consultation</option>
            </select>
 
        </div>

    )
  }



 
