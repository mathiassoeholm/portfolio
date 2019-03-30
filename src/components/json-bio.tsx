import React from 'react';
import LoadingText from "./loading-text"
import posed from "react-pose"

const PosedDiv = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
});

const JsonBio: React.FC = () => {
  const renderKeyValue = (key: string, value: string, index: number) => {
    return (
      <span>
        &nbsp;&nbsp;{`"${key}"`}
        <span className={'pf-clear-text'}>: </span>
          <LoadingText finalText={`"${value}"`} loadIterations={(index + 1)*2} >
            <span className={'pf-clear-text'}>,</span>
          </LoadingText>
        <br />
      </span>
    );
  }

  const renderLanguage = (language: string, index: number) => {
    return (
      <span key={index}>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <LoadingText finalText={`"${language}"`} loadIterations={6} dontShowDots={index !== 0} extraDelay={index*200}>
          <span className={'pf-clear-text'}>
            ,
          </span>
        </LoadingText>
        <br />
      </span>
    );
  }

  return (
    <PosedDiv className={'pf-json-bio-container'}>
      <p className={'pf-json-bio'}>
        <span className={'pf-clear-text'}>{`{`}</span>
        <br />
        {renderKeyValue('name', 'Mathias Søholm', 0)}
        {renderKeyValue('title', 'Mobile and Web-developer', 1)}
        &nbsp;&nbsp;"languages"<span className={'pf-clear-text'}>: [</span>
        <br />
        {
          [
            'JavaScript',
            'TypeScript',
            'C#',
            'Java',
            'Kotlin',
            'Swift',
            'Dart',
            'CSS/Sass',
          ].map(renderLanguage)
        }
        &nbsp;&nbsp;<span className={'pf-clear-text'}>]</span>
        <br />
        <span className={'pf-clear-text'}>{`}`}</span><br />
      </p>
    </PosedDiv>
  );
}

export default JsonBio;
