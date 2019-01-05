import React, { Component } from "react";

export default class ProjectCard extends Component {
  constructor(props) {
    super();
    this.state = {
      project: {},
      projectClicked: false
    };
  }

  componentDidMount() {
    const { projectInfo } = this.props;
    const project = this.refs.projectCover;
    const projectTitle = this.refs.projectTitle;
    //grab the elements that need smart styling by the ref
    projectTitle.style.color = projectInfo.color;
    project.style.backgroundImage = projectInfo.backgroundImageUrl;
    //style em here ^
    this.setState({
      project: projectInfo
    });
  }

  render() {
    const { project } = this.state;
    return (
      <div ref="projectCover" className="project-slide">
        {/* pass down the clickEvent from the ProjectDisplay div */}
        <div onClick={this.props.clickEvent} className="project-slide-cover">
          <div ref="projectTitle" className="project-slide-cover-title">
            {project.name}
          </div>
          <div className="project-slide-cover-tech">{project.technologies}</div>
          <div className="project-slide-cover-description">
            {project.description}
          </div>
          {
            //   load links only if it's defined : null
              project.links ? project.links.map((linkObj,ind) => {
                  return (
                    <a
                    key={`${project.name}-link-${ind}`}
                    // use these props to make link open on new tab
                    rel="noopener noreferrer"
                    href={linkObj.href}
                    target="_blank"
                    className="project-slide-cover-link"
                  >
                    {linkObj.link}
                  </a>
                  )
              }) : null
          }
        </div>
      </div>
    );
  }
}
