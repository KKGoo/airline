import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./tab";

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);
     ( this.state = {
        isChecked: false,
        style: {transform: "none"},
        activeTab: this.props.children[0].props.label,
      });
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
    if(this.state.isChecked==false){
      this.setState({
        style: {transform: "none"}
      })
    }else{
      this.setState({
        style: {transform: "translate(-100%, 0)"}
      })
    }
  };

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div id="menuToggle" className="Menu">
        <input
          className="input"
          type="checkbox"
          defaultChecked={this.state.isChecked}
          onChange={this.toggleChange}
        />
        <span></span>
        <span></span>
        <span></span>
        <ol style={this.state.style} id="menu" className="Menu__list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="Menu__content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
