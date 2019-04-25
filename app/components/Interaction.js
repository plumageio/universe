import React from 'react';
import { withRouter } from 'react-router-dom';
import ModernInfo from './substyles/ModernInfo';
import Modern from './mainstyles/Modern';
import ModernGraphic from './substyles/ModernGraphic';
import ModernMinimal from './substyles/ModernMinimal';
import ModernSketchwork from './substyles/ModernSketchwork';
import ModernTrashpolka from './substyles/ModernTrashpolka';
import ModernWatercolor from './substyles/ModernWatercolor';
import BlackwhiteInfo from './substyles/BlackwhiteInfo';
import BlackWhite from './mainstyles/BlackWhite';
import BlackwhiteDotwork from './substyles/BlackwhiteDotwork';
import BlackwhiteFineline from './substyles/BlackwhiteFineline';
import BlackwhiteGeometry from './substyles/BlackwhiteGeometry';
import BlackwhiteLettering from './substyles/BlackwhiteLettering';
import OldschoolInfo from './substyles/OldschoolInfo';
import Oldschool from './mainstyles/Oldschool';
import OldschoolNeotraditional from './substyles/OldschoolNeotraditional';
import OldschoolPortrait from './substyles/OldschoolPortrait';
import OldschoolRealistic from './substyles/OldschoolRealistic';
import JapaneseInfo from './substyles/JapaneseInfo';
import Japanese from './mainstyles/Japanese';
import JapaneseNeojapanese from './substyles/JapaneseNeojapanese';
import AboriginalInfo from './substyles/AboriginalInfo';
import Aboriginal from './mainstyles/Aboriginal';
import AboriginalPolynesian from './substyles/AboriginalPolynesian';
import plumagetitle from '../assets/images/svg-titles/plumage-universe-title.svg';

class Interactive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      styleisChosen: false,
      chosenStyle: '',
      activeStyle: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.getChosenStyle = this.getChosenStyle.bind(this);
    this.getActiveStyle = this.getActiveStyle.bind(this);
  }

  getActiveStyle(mainstyle) {
    this.setState({
      activeStyle: mainstyle,
    });
  }

  getChosenStyle(substyle) {
    this.props.history.push(`/${substyle}`);
  }

  handleClick() {
    this.setState({
      isClicked: true,
    });
  }

  render() {
    return (
      <div className="content interaction">
        <ModernInfo isVisible={(this.state.isClicked && this.state.activeStyle === 'Modern' ? { isVisible: true } : undefined)} />
        <Modern isClicked={this.handleClick} onActivate={this.getActiveStyle} />
        <ModernGraphic onSelect={this.getChosenStyle} isVisible={(this.state.isClicked && this.state.activeStyle === 'Modern' ? { isVisible: true } : undefined)} />
        <ModernMinimal onSelect={this.getChosenStyle} isVisible={(this.state.isClicked && this.state.activeStyle === 'Modern' ? { isVisible: true } : undefined)} />
        <ModernSketchwork onSelect={this.getChosenStyle} isVisible={(this.state.isClicked && this.state.activeStyle === 'Modern' ? { isVisible: true } : undefined)} />
        <ModernTrashpolka onSelect={this.getChosenStyle} isVisible={(this.state.isClicked && this.state.activeStyle === 'Modern' ? { isVisible: true } : undefined)} />
        <ModernWatercolor onSelect={this.getChosenStyle} styleName="Watercolor" isVisible={(this.state.isClicked && this.state.activeStyle === 'Modern' ? { isVisible: true } : undefined)} />
        <div className="legenda"><img className="plumage-title show-hide" src={plumagetitle} alt="plumage tattoo universe" /></div>
        <JapaneseInfo isVisible={(this.state.isClicked && this.state.activeStyle === "Japanese" ? { isVisible: true } : undefined)} />
        <Japanese isClicked={this.handleClick} onActivate={this.getActiveStyle} />
        <JapaneseNeojapanese onSelect={this.getChosenStyle} isVisible={(this.state.isClicked && this.state.activeStyle === 'Japanese' ? { isVisible: true } : undefined)} />
        <BlackwhiteInfo isVisible={(this.state.isClicked && this.state.activeStyle === 'Black and White' ? { isVisible: true } : undefined)} />
        <BlackWhite isClicked={this.handleClick} onActivate={this.getActiveStyle} />
        <BlackwhiteDotwork onSelect={this.getChosenStyle} isVisible={(this.state.isClicked && this.state.activeStyle === 'Black and White' ? { isVisible: true } : undefined)} />
        <BlackwhiteFineline onSelect={this.getChosenStyle} isVisible={(this.state.isClicked && this.state.activeStyle === 'Black and White' ? { isVisible: true } : undefined)} />
        <BlackwhiteGeometry onSelect={this.getChosenStyle} isVisible={(this.state.isClicked && this.state.activeStyle === 'Black and White' ? { isVisible: true } : undefined)} />
        <BlackwhiteLettering onSelect={this.getChosenStyle} isVisible={(this.state.isClicked && this.state.activeStyle === 'Black and White' ? { isVisible: true } : undefined)} />
        <OldschoolInfo isVisible={(this.state.isClicked && this.state.activeStyle === 'Oldschool' ? { isVisible: true } : undefined)} />
        <Oldschool isClicked={this.handleClick} onActivate={this.getActiveStyle} />
        <OldschoolNeotraditional onSelect={this.getChosenStyle} isVisible={(this.state.isClicked && this.state.activeStyle === 'Oldschool' ? { isVisible: true } : undefined)} />
        <OldschoolPortrait onSelect={this.getChosenStyle} isVisible={(this.state.isClicked && this.state.activeStyle === 'Oldschool' ? { isVisible: true } : undefined)} />
        <OldschoolRealistic onSelect={this.getChosenStyle} isVisible={(this.state.isClicked && this.state.activeStyle === 'Oldschool' ? { isVisible: true } : undefined)} />
        <AboriginalInfo isVisible={(this.state.isClicked && this.state.activeStyle === 'Aboriginal' ? { isVisible: true } : undefined)} />
        <Aboriginal isClicked={this.handleClick} onActivate={this.getActiveStyle} />
        <AboriginalPolynesian onSelect={this.getChosenStyle} isVisible={(this.state.isClicked && this.state.activeStyle === 'Aboriginal' ? { isVisible: true } : undefined)} />
      </div>
    );
  }
}

export default withRouter(Interactive);
