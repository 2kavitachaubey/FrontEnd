let homeHeading = ()=>{
    let homeBigHeading = React.createElement(
    "h1",
    { className: "hero-title" },
    "HELLO",
  );
  let homePara = React.createElement(
    "p",
    { className: "hero-subtitle" },
    "-It's D.Nova a design wizerd",
  );
  return React.createElement('div',{className:'hero-text'},[homeBigHeading,homePara]);
}

export default homeHeading;