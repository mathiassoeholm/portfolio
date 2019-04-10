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
        The front-end was developed in <a href={'https://reactjs.org/'} target={'_blank'}>React</a> using the <a href={'https://material-ui.com/'} target={'_blank'}>Material-UI</a> framework.
        The backend was built with <a href={'https://nodejs.org'} target={'_blank'}>Node.JS</a> and <a href={'https://firebase.google.com/products/storage'}>Firebase Cloud Firestore</a> for storing
        data. <a href={'https://redux.js.org'} target={'_blank'}>Redux</a> was used for state management and <a href={'https://redux-saga.js.org/'} target={'_blank'}>Redux Saga</a> for handling side effects.
        Test-Driven development (TDD) reassured that the code works and enabled refactoring which resulted in a clean code-base. <a href={'https://jestjs.io'} target={'_blank'}>Jest</a> was used as testing framework.
      </p>
    </div>
  );
}

export default EtherWalletDescription;
