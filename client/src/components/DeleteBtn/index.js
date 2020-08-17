import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
   <button type="button" className="btn btn-danger" {...props}  tabIndex="0" style={{ float: "right" }}>DELETE</button>
  );
}

export default DeleteBtn;
