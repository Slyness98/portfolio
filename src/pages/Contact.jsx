import React from 'react';
import TieredForm from '../components/form/TieredForm';
import ResolvedMessage from '../components/form/atoms/ResolvedMessage.styled';
import FormContextProvider from '../contexts/Form.context';
import Stars from '../components/space-background/Stars';

const Contact = () => {
  return (
    <main className="section-contact">
      <h1 className="title title--contact">&#060;Contact Me /&#062;</h1>
      <FormContextProvider>
        <ResolvedMessage />
        <TieredForm />
      </FormContextProvider>
      <Stars />
    </main>
  );
};

export default Contact;