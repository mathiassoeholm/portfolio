import React from 'react';

const JsonBio: React.FC = () => {
  return (
    <div className={'pf-json-bio-container'}>
      <p className={'pf-json-bio'}>
        <span className={'pf-clear-text'}>{`{`}</span><br />
        &nbsp;&nbsp;"name"<span className={'pf-clear-text'}>:</span> "<span className={'pf-accent-text'}><b>Mathias Søholm</b></span>"<span className={'pf-clear-text'}>,</span><br />
        &nbsp;&nbsp;"title"<span className={'pf-clear-text'}>:</span> "<span className={'pf-accent-text'}>Mobile and Web-developer</span>"<span className={'pf-clear-text'}>,</span><br />
        &nbsp;&nbsp;"languages"<span className={'pf-clear-text'}>:</span> [<br />
        &nbsp;&nbsp;&nbsp;&nbsp;"<span className={'pf-accent-text'}>JavaScript</span>"<span className={'pf-clear-text'}>,</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;"<span className={'pf-accent-text'}>TypeScript</span>"<span className={'pf-clear-text'}>,</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;"<span className={'pf-accent-text'}>C#</span>"<span className={'pf-clear-text'}>,</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;"<span className={'pf-accent-text'}>Java</span>"<span className={'pf-clear-text'}>,</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;"<span className={'pf-accent-text'}>Kotlin</span>"<span className={'pf-clear-text'}>,</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;"<span className={'pf-accent-text'}>Swift</span>"<span className={'pf-clear-text'}>,</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;"<span className={'pf-accent-text'}>Dart</span>"<span className={'pf-clear-text'}>,</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;"<span className={'pf-accent-text'}>CSS/SASS</span>"<br />
        &nbsp;&nbsp;<span className={'pf-clear-text'}>]</span><br />
        <span className={'pf-clear-text'}>{`}`}</span><br />
      </p>
    </div>
  );
}

export default JsonBio;
