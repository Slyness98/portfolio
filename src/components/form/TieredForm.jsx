import React, {useState, useRef} from 'react';
import ContactInfo from './atoms/tiers/ContactInfo';
import MessageBox from './atoms/tiers/MessageBox';
// import Stars from '../space-background/Stars';

const TieredForm = () => {
  const [step, setStep] = useState(1);
  let formData = useRef({firstName: '', lastName: '', email: '', companyName: '', message: '', messageHtml: ''});


  const updateFormData = e => {
    let updatedValue = {};
    updatedValue[e.target.id] = e.target.value;
    formData.current = Object.assign({...formData.current}, updatedValue);
  }

  const updateMessageField = (content, contentHtml) => {
    /*TinyMCE editor wants to be fancy and hijack the onChange event with 
    their own onEditorChange event. We lose reference to the synthetic event
    'e'. Therefore, Need seperate function to set formData["message"] equal to
     "tinymce.activeEditor.getContent({format: "text"})"
    */
    formData.current["message"] = content;
    formData.current["messageHtml"] = contentHtml;
  }

  function next(e) {
    e.preventDefault();
    if(step < 2) {
      setStep(prevState => prevState + 1);
    }
     else {
      console.log("data posted, ", formData)
     fetch("http://localhost:5000/contact", {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(formData)
     })
       .then(res => {return res.json()})
       .then(data => console.log("nothing to see here, ", data))
       .catch(error => console.log('ERROR'));
      // setStep(1);
      return false;
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

      case 2: return <MessageBox nextTier={next} previousTier={previous} updateFieldValue={updateMessageField} values={formData} />
    }
  }

    return (
     <>
      <form className="form" action="http://localhost:5000/contact" method="POST" onSubmit={(e) => {return next(e)}}>
        { determineStep(step) }
      </form>
      {/* <Stars /> */}
     </>
    );
}

export default TieredForm;