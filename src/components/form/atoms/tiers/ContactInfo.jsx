import React, {useEffect} from 'react';
import Data from './contactInfoStructure.data';
 
const ContactInfo = ({nextTier, updateFieldValue, values}) => {

  const checkFieldValidity = (field, regex) => {
    ((field.value.length > 0) && regex.test(field.value) )
      ? field.setAttribute("data-isvalid", "valid")
      : field.setAttribute("data-isvalid", "invalid") 
  };

  useEffect(() => {
    const first = document.getElementById("firstName");
    const last = document.getElementById("lastName");
    const emailField = document.getElementById("email");
    const company = document.getElementById("companyName");
    
    const {firstName, lastName, companyName, email} = values.current;
    first.setAttribute("value", firstName);
    last.setAttribute("value", lastName);
    emailField.setAttribute("value", email);
    company.setAttribute("value", companyName);
  }, [values]);

  return (
  <>
    {
      Data.map((inputField, idx) => {
        const {fieldName, type, placeholder, uiValidationRegex, spreadProps} = inputField;
        return (
          <div className="form__item" key={`contactInfoField--${idx}`}>
            <input 
              onInput={(e) => {
                updateFieldValue(e); 
                checkFieldValidity(e.target, uiValidationRegex);
               }
              } 
              type={type} 
              name={fieldName} 
              placeholder={placeholder} 
              id={fieldName} 
              aria-labelledby={fieldName} 
              // data-isvalid="invalid"
              {...spreadProps}
            />
            <label htmlFor={fieldName}>{placeholder} </label>
          </div>
        )
      })
    }
    
    <div className="form__item">
      <button className="formBtn" onClick={(e) => nextTier(e)}>
        <span>Continue</span>
      </button>
    </div>
  </>
  );
}

export default ContactInfo;