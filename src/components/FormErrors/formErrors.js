import React from 'react';
import "./styles.css"


function FormErrors({formErrors}) {
  return (
      <div className="formErros">
          {Object.keys(formErrors).map((fieldName, i) => {
              if(formErrors[fieldName].length > 0) {
                  return (
                  <p className="notification" key={i}>{formErrors[fieldName]} </p>
                  )
              } else {
                  return '';
              }
          })}
      </div>
  )
}

export default FormErrors;