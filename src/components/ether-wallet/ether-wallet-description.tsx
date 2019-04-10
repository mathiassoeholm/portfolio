import React from 'react';

const EtherWalletDescription: React.FC = () => {
  return (
    <div className={'pf-project-text'}>
      <h2>
        Secure transactions with scrypt and React
      </h2>
      <p>
        My CS bachelor project, created in cooperation with Erik Høj Petersen. We developed an online cryptocurrency
        wallet that does not rely on trust to a third-party.
      </p>
      <h2>
        Technology
      </h2>
      <p>
        The front-end was developed in React using the Material-UI framework.
        The backend was built with Node.JS and Firebase Cloud Firestore for storing data.
        We used Redux for state management and Redux Saga for handling side effects.
        Test-Driven development (TDD) reassured us that the code works and enabled refactoring which resulted in a clean code-base.
        Jest was used as testing framework.
      </p>
    </div>
  );
}

export default EtherWalletDescription;
