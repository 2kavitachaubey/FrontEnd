let navbar = () => {
  let btn1 = React.createElement(
    "button",
    { class: "nav-link" },
    "About me"
  );
  let btn2 = React.createElement(
    "button",
    { class: "nav-link" },
    "Portfolio"
  );
  let btn3 = React.createElement(
    "button",
    { class: "nav-link" },
    "Services"
  );
  let btn4 = React.createElement(
    "button",
    { class: "nav-link" },
    "Blog"
  );
  return React.createElement('div',{class:'navbar'},[btn1,btn2,btn3,btn4]);
};

export default navbar;