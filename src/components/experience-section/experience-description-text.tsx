import React, { Component } from "react";
import { ExperienceDescription } from "./experience-descriptions";
import { delay } from '@mathiassoeholm/js-utils/async';
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
  descriptionPose: string,
}

interface Props {
  setSetText: (setText: (experienceDescription: ExperienceDescription) => void) => void,
  delayOverride?: (ms: number) => Promise<void>,
}

class ExperienceDescriptionText extends Component<Props, State> {
  nonce = 0

  state: State = {
    currentValue: {
      title: '',
      fullName: '',
      period: '',
      description: [],
    },
    descriptionPose: 'hidden',
  }

  componentDidMount(): void {
    this.props.setSetText(this.setText);
  }

  setText = (experienceDescription: ExperienceDescription) => {
    this.nonce += 1;

    this.mutateStateTextWithKey(
      this.state.currentValue.title,
      experienceDescription.title,
      this.nonce,
      'title',
    );

    this.mutateStateTextWithKey(
      this.state.currentValue.fullName,
      experienceDescription.fullName,
      this.nonce,
      'fullName',
    );

    this.mutateStateTextWithKey(
      this.state.currentValue.period,
      experienceDescription.period,
      this.nonce,
      'period',
    );

    this.hideAndShowDescription(experienceDescription.description, this.nonce);

    this.setState({
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

  textMutator = createTextMutator(this.props.delayOverride || delay, () => this.nonce)

  hideAndShowDescription = async (newDescription: string[], nonce: number) => {

    if (this.state.descriptionPose == 'visible') {
      this.setState({
        descriptionPose: 'hidden',
      })

      let delayFunc = this.props.delayOverride || delay

      await delayFunc(200);
      if (nonce !== this.nonce) {
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
