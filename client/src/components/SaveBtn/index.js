import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <button type="button" className="btn btn-info" {...props}  tabIndex="0" style={{ float: "right" }}>SAVE</button>
   
  );
}

export default SaveBtn;
