import React, { Component } from "react"
import { ExperienceDescription } from "./experience_descriptions"

interface State {
  currentValue: ExperienceDescription,
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
    }
  }

  componentDidMount(): void {
    this.props.setSetText(this.setText);
  }

  setText = (experienceDescription: ExperienceDescription) => {
    console.log(`Setting text to ${experienceDescription.description}`)
    this.setState({
      currentValue: experienceDescription,
    });
  }

  renderListItem = (item: string) => {
    return (
      <li>
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
