import React from 'react';
import LoadingText from "./loading-text"
import posed from "react-pose"

const PosedDiv = posed.div({});

const JsonBio: React.FC = () => {
  const renderKeyValue = (key: string, value: string, index: number) => {
    return (
      <span>
        &nbsp;&nbsp;{`"${key}"`}
        <span className={'pf-clear-text'}>: </span>
          <LoadingText finalText={`"${value}"`} loadIterations={index + 1} >
            <span className={'pf-clear-text'}>,</span>
          </LoadingText>
        <br />
      </span>
    );
  }

  const renderLanguage = (language: string, index: number, array: string[]) => {
    return (
      <span key={index}>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <LoadingText finalText={`"${language}"`} loadIterations={4} dontShowDots={index !== 0} extraDelay={index*200}>
          {
            // Don't add a comma to the last value, otherwise the JSON isn't valid ;-)
            index < array.length - 1 &&
            <span className={'pf-clear-text'}>
            ,
            </span>
          }
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
        {renderKeyValue('title', 'Software Engineer', 1)}
        {renderKeyValue('status', 'Available for hire', 2)}
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
