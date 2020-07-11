// CODE FROM https://codesandbox.io/s/8nvw32lw39?from-embed
import React, { Component } from "react";
import PropTypes from "prop-types";
import VSensor from "react-visibility-sensor";

class VisibilitySensor extends Component {
  state = {
    active: true
  };

  render() {
    const { active } = this.state;
    const { once, children, ...theRest } = this.props;
    
    return (
      <VSensor
        {...theRest}
        active={active}
        onChange={isVisible =>
          once &&
          isVisible &&
          this.setState({
            active: false
          })
        }
      >
        {({ isVisible }) => children({ isVisible })}
      </VSensor>
    );
  }
}

VisibilitySensor.propTypes = {
  once: PropTypes.bool,
  children: PropTypes.func.isRequired
};

VisibilitySensor.defaultProps = {
  once: false
};

export default VisibilitySensor;
