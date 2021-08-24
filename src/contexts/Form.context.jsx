import React, { useContext, useState } from 'react';
const FormContext = React.createContext();

export function useFormContext() {
  return useContext(FormContext);
};

export function FormContextProvider({children}) {

  const setResolution = (res) => {
    try{
      if(res.success) {
        setResolutionMessages({success: true, resolutionMessages: [res.message], setResolution: setResolution});
      } else {
        let errs = [];
        res.errors.map((err) => {
          return errs.push(err.message);
        });
        setResolutionMessages({success: false, resolutionMessages: errs, setResolution: setResolution});
      }
    } catch {
      setResolutionMessages({success: false, resolutionMessages: ["Failed to send... Server may be offline."], setResolution: setResolution});
    }
  }

  const [resolutionMessages, setResolutionMessages] = useState({success: "pending", resolutionMessages: [], setResolution: setResolution});

  return(
    <FormContext.Provider value={resolutionMessages}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContextProvider;