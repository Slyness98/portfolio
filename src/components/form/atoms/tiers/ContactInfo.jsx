import React, {useEffect} from 'react';
 
const ContactInfo = ({nextTier, updateFieldValue, values}) => {

  useEffect(() => {
    const {firstName, lastName, companyName, email} = values.current;
    const first = document.getElementById("firstName");
    const last = document.getElementById("lastName");
    const emailField = document.getElementById("email");
    const company = document.getElementById("companyName");

    first.setAttribute("value", firstName);
    last.setAttribute("value", lastName);
    emailField.setAttribute("value", email);
    company.setAttribute("value", companyName);

    console.log("values are: ", values)
  }, [values])

  return (
  <>
    <div className="form__item">
      <input onInput={(e) => updateFieldValue(e)} type="text" name="firstName" placeholder="Your First Name" id="firstName" aria-labelledby="firstName" required autoFocus/>
      <label htmlFor="firstName">Your First Name </label>
    </div>

    <div className="form__item">
      <input onInput={(e) => updateFieldValue(e)} type="text" name="lastName" placeholder="Your Last Name" id="lastName" aria-labelledby="lastName" required />
      <label htmlFor="lastName">Your Last Name </label>
    </div>

    <div className="form__item">
      <input onInput={(e) => updateFieldValue(e)} type="email" name="email" placeholder="E-mail" id="email" aria-labelledby="email" required/>
      <label htmlFor="email">E-mail </label>
    </div>
          
    <div className="form__item">      
      <input onInput={(e) => updateFieldValue(e)} type="text" name="companyName" placeholder="Company name (optional)" id="companyName" aria-labelledby="companyName" />
      <label htmlFor="companyName">Company Name (optional) </label>
    </div>
    
    <div className="form__item">
        <button className="continueBtn" onClick={(e) => nextTier(e)}>Continue</button>
    </div>
  </>
  );
}

export default ContactInfo;