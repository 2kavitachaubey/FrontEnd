let achievement = () => {
  let projectNumber = React.createElement(
    "h3",
    { class: "stat-number" },
    "+200",
  );
  let projectName = React.createElement(
    "p",
    { class: "stat-label" },
    "Project Completed",
  );
  let sumProject = React.createElement('div',{class:'stat-item'},[projectNumber,projectName]);

  let startupNumber = React.createElement(
    "h3",
    { class: "stat-number" },
    "+50",
  );
  let startupName = React.createElement(
    "p",
    { class: "stat-label" },
    "Startup raised",
  );
  let sumStartup = React.createElement('div',{class:'stat-item'},[startupNumber,startupName]);

  return React.createElement('div',{class:'stats'},[sumProject,sumStartup]);
};

export default achievement;