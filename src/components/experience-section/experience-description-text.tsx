import React, { Component } from "react";
import { ExperienceDescription } from "./experience_descriptions";
import { sleep } from "../../utility/time-util";
import posed from 'react-pose';
import { createTextMutator } from "./text-mutator"

const PosedUl = posed.ul({
  visible: {
    staggerChildren: 40,
  },
})

const PosedLi = posed.li({
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 50,
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 200,
    }
  },
});

export interface State {
  currentValue: ExperienceDescription,
  nonce: number,
  descriptionPose: string,
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
    descriptionPose: 'hidden',
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

    this.mutateStateTextWithKey(
      this.state.currentValue.period,
      experienceDescription.period,
      nonce,
      'period',
    );

    this.hideAndShowDescription(experienceDescription.description, nonce);

    this.setState({
      nonce,
      currentValue: {
        ...this.state.currentValue,
        description: experienceDescription.description,
      }
    });
  }

  mutateStateTextWithKey = async (fromText: string, toText: string, nonce: number, key: string) => {
    await this.textMutator(
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

  textMutator = createTextMutator(sleep, () => this.state.nonce)

  hideAndShowDescription = async (newDescription: string[], nonce: number) => {

    if (this.state.descriptionPose == 'visible') {
      this.setState({
        descriptionPose: 'hidden',
      })

      await sleep(200);
      if (nonce !== this.state.nonce) {
        return;
      }
    }

    this.setState({
      currentValue: {
        ...this.state.currentValue,
        description: newDescription,
      }
    });

    this.setState({
      descriptionPose: 'visible',
    })
  }

  renderListItem = (item: string) => {
    return (
      <PosedLi key={item}>
        {item}
      </PosedLi>
    );
  }

  render() {
    const { title, fullName, period, description } = this.state.currentValue;

    return (
      <div className={'pf-experience-text'}>
        <p className={'pf-title'}>{title}</p>
        <p >@ {fullName}</p>
        <p className={'pf-period'}>{period}</p>
        <PosedUl className={'pf-description'} pose={this.state.descriptionPose}>
          { description.map(this.renderListItem) }
        </PosedUl>
      </div>
    )
  }
}

export default ExperienceDescriptionText;
