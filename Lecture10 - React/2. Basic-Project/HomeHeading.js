let homeHeading = ()=>{
    let homeBigHeading = React.createElement(
    "h1",
    { class: "hero-title" },
    "HELLO",
  );
  let homePara = React.createElement(
    "p",
    { class: "hero-subtitle" },
    "-It's D.Nova a design wizerd",
  );
  return React.createElement('div',{class:'hero-text'},[homeBigHeading,homePara]);
}

export default homeHeading;