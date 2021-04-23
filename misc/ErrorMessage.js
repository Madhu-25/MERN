import React from "react";
import "./ErrorMessage.scss"
function ErrorMessage(props) {
  return( <div className="error-message">
      <p>{props.message}</p><br></br>
      <button onClick={props.clear}>Clear</button>
    
</div>);
};

export default ErrorMessage;
