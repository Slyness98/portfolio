import React, { useContext, useState, useEffect } from 'react';
const FormContext = React.createContext();

export function useFormContext() {
  return useContext(FormContext);
};

export function FormContextProvider({children}) {

  const setResolution = (res) => {

    try{
        console.log(res)
        if(res.success) {

            setResolutionMessages({success: true, resolutionMessages: [res.message], setResolution: setResolution});
          } else {
            let errs = [];
            res.errors.map((err) => {
              errs.push(err.message);
            });
            console.log(errs);
            setResolutionMessages({success: false, resolutionMessages: errs, setResolution: setResolution});
          }
    } catch {
        console.log(res)
    //   if(res.status === 429) {
    //     setResolutionMessages({success: false, resolutionMessages: ["Sorry, but emails are limited to 3 a day for my own protection (and sanity). Hope you can understand. Feel free to reach out to me via the social media links"], setResolution: setResolution});
    //   } else {
    //       throw Error("Some error other than a failed request or a 429 happened")
    //   }
    }

  }

  const [resolutionMessages, setResolutionMessages] = useState({success: "pending", resolutionMessages: [], setResolution: setResolution});


  useEffect(() => {
    switch(resolutionMessages.success) {
      case true: 
        console.log("submission success, ", resolutionMessages);
        break;
      
      case false: 
        console.log("errors received", resolutionMessages);
        break;
      
      case "pending":   
      default: 
        return null;
    }
  }, [resolutionMessages])
  return(
    <FormContext.Provider value={resolutionMessages}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContextProvider;