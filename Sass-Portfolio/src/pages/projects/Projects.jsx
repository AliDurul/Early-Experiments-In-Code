import React from 'react'

const Projects = () => {
    return (
        <div>
            <div className="projects__bio-image">
                <h1>My Projects</h1>
            </div>
            <main className="projects">
      <div className="projects__items">
        <div className="projects__item">
          <img src="img/project-1.jpg" alt="My Project" />
        </div>

        <div className="projects__item">
          <img src="img/project-2.jpg" alt="My Project" />
        </div>
        <div className="projects__item">
          <img src="img/project-3.jpg" alt="My Project" />
        </div>
        <div className="projects__item">
          <img src="img/project-4.jpg" alt="My Project" />
        </div>

        <div className="projects__item">
          <img src="img/project-5.jpg" alt="My Project" />
        </div>
        <div className="projects__item">
          <img src="img/project-6.jpg" alt="My Project" />
        </div>
      </div>
    </main>
        </div>
    )
}

export default Projects