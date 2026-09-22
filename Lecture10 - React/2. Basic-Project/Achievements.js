let achievement = () => {
  let projectNumber = React.createElement(
    "h3",
    { className: "stat-number" },
    "+200",
  );
  let projectName = React.createElement(
    "p",
    { className: "stat-label" },
    "Project Completed",
  );
  let sumProject = React.createElement('div',{className:'stat-item'},[projectNumber,projectName]);

  let startupNumber = React.createElement(
    "h3",
    { className: "stat-number" },
    "+50",
  );
  let startupName = React.createElement(
    "p",
    { className: "stat-label" },
    "Startup raised",
  );
  let sumStartup = React.createElement('div',{className:'stat-item'},[startupNumber,startupName]);

  return React.createElement('div',{className:'stats'},[sumProject,sumStartup]);
};

export default achievement;