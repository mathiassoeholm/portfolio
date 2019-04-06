import React, { Component } from "react"
import { ExperienceDescription } from "./experience_descriptions"
import { sleep } from "../utility/time-util"

interface State {
  currentValue: ExperienceDescription,
  nonce: number,
}

interface Props {
  setSetText: (setText: (experienceDescription: ExperienceDescription) => void) => void,
}

class ExperienceDescriptionText extends Component<Props, State> {
  state: State = {
    currentValue: {
      title: '',
      fullName: '',
      period: '',
      description: [],
    },
    nonce: 0,
  }

  componentDidMount(): void {
    this.props.setSetText(this.setText);
  }

  setText = (experienceDescription: ExperienceDescription) => {
    const nonce = this.state.nonce + 1;

    this.mutateStateTextWithKey(
      this.state.currentValue.title,
      experienceDescription.title,
      nonce,
      'title',
    );

    this.mutateStateTextWithKey(
      this.state.currentValue.fullName,
      experienceDescription.fullName,
      nonce,
      'fullName',
    );

    this.setState({
      nonce,
      currentValue: {
        ...this.state.currentValue,
        description: experienceDescription.description,
      }
    });
  }

  mutateStateTextWithKey = async (fromText: string, toText: string, nonce: number, key: string) => {
    await this.mutateText(
      fromText,
      toText,
      nonce,
      text => this.setState({
        currentValue: {
          ...this.state.currentValue,
          [key]: text,
        },
      }),
    );
  }

  mutateText = async (fromText: string, toText: string, nonce: number, set: (text: string) => void) => {
    const duration = 500; // ms
    const textLengthDiff = fromText.length - toText.length;
    let changedText = fromText;

    for (let i = 0; i < toText.length + Math.max(0, textLengthDiff); i++) {

      if (i < toText.length) {
        changedText = toText.substr(0, i+1)
          + fromText.substr(i+1, fromText.length);
      }

      const lettersToRemove = Math.max(0, Math.min(i+1, textLengthDiff));

      set(changedText.substr(0, changedText.length-lettersToRemove));

      await sleep(duration/toText.length)

      // Prevents running several animations on same text concurrently
      if (nonce !== this.state.nonce) {
        return;
      }
    }
  }

  renderListItem = (item: string) => {
    return (
      <li key={item}>
        {item}
      </li>
    );
  }

  render() {
    const { title, fullName, period, description } = this.state.currentValue;

    return (
      <div className={'pf-experience-text'}>
        <p className={'pf-title'}>{title}</p>
        <p >@ {fullName}</p>
        <p className={'pf-period'}>{period}</p>

        <ul>{ description.map(this.renderListItem) }</ul>
      </div>
    )
  }
}

export default ExperienceDescriptionText;
