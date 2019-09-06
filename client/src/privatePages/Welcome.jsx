import React, { Component } from 'react';
import styled from 'styled-components';
import LeftNavigation from '../components/private/LeftNavigation';
import MainContent from '../components/private/MainContent';
import UpperNavigation from '../components/private/UpperNavigation';

const Page = styled.div`
`;

class AcceptedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLeftNavExpanded: true,
      isUserOnline: true,
      UserProfilePhoto: null,
      screenSize: 'large',
      isChecked: true,
      showSwitch: 'block',
      registrationStep: 1
    }
  }

  updateLeftNav = size => {
    this.setState({
      isLeftNavExpanded: size,
      isChecked: !this.state.isChecked
    })
  }

  updateScreenSize = () => {
    if (window.innerWidth > 800) {
      this.setState({
        screenSize: 'large',
        showSwitch: 'block'
      })
    } else {
      this.setState({
        screenSize: 'small',
        showSwitch: 'none'
      })
    }
  }

  componentDidMount = () => {
    this.updateScreenSize();
    window.addEventListener("resize", this.updateScreenSize);
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateScreenSize);
  }

  render () {
    const { isLeftNavExpanded, screenSize, showSwitch } = this.state;
    return (
      <Page>
        { isLeftNavExpanded && screenSize === 'large' ?
          <LeftNavigation updateLeftNav={this.updateLeftNav} {...this.state} /> :
          <LeftNavigation 
            width='90px' 
            fontSize='16px'
            display={showSwitch}
            updateLeftNav={this.updateLeftNav}
            paddingStepContainer='10px'
            flexGrowStepContainer={1} 
            {...this.state} 
          />
        }
        <UpperNavigation {...this.state} />
        { isLeftNavExpanded && screenSize === 'large' ? 
          <MainContent leftPadding="calc(330px + 6vw)" /> : 
          <MainContent />
        } 
      </Page>
    );
  } 
}

export default AcceptedScreen;
