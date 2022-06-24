import React from "react";

function MenuItem({ image, name, author }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {author} </p>
    </div>
  );
}

export default MenuItem;
