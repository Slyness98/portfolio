import React, {useState, useRef, useEffect} from 'react';
import ContactInfo from './atoms/tiers/ContactInfo';
import MessageBox from './atoms/tiers/MessageBox';
import {useFormContext} from '../../contexts/Form.context';

const TieredForm = () => {
  const [step, setStep] = useState(1);
  const form = useFormContext();
  let formData = useRef({firstName: '', lastName: '', email: '', companyName: '', message: '', messageHtml: ''});

  const updateFormData = e => {
    let updatedValue = {};
    updatedValue[e.target.id] = e.target.value;
    formData.current = Object.assign({...formData.current}, updatedValue);
  }

  function next(e) {
    e.preventDefault();
    if(step < 2) {
      setStep(prevState => prevState + 1);
    }
     else {
      fetch("http://localhost:5000/contact", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(res => {
        //set failure/successful form submission message
        form.setResolution(res);
        if(res.success === true) {
          //prevent any state change or more submissions after a successful submission and clear form
          let container = document.getElementsByClassName("form")[0];
          document.getElementsByClassName("backBtn")[0].disabled = true;
          document.getElementsByClassName("submitBtn")[0].disabled = true;
            
          setTimeout(() => {
            container.style.animation = "fadeOut 3s ease";
          }, 3500)

          setTimeout(() => {
            formData.current = {firstName: '', lastName: '', email: '', companyName: '', message: '', messageHtml: ''};
            setStep(1)
            container.style.animation = "fadeIn 3s ease";
          }, 6500)
        }
      })
      .catch(error => console.log('ERROR', error));
    }
  }

  function previous(e) {
    e.preventDefault();
    setStep(prevState => prevState - 1);
  }

  function determineStep(num) {
    switch(num) {
      default:
      case 1: return <ContactInfo nextTier={next} updateFieldValue={updateFormData} values={formData} />

      case 2: return <MessageBox nextTier={next} previousTier={previous} values={formData} />
    }
  }

  return (
    <>
    <form 
      className="form" 
      action="http://localhost:5000/contact" 
      method="POST" 
      onSubmit={(e) => {return next(e)}}
      acceptCharset="utf-8 ISO-8859-1"
    >
      { determineStep(step) }
    </form>
    </>
  );
}

export default TieredForm;