import React, { Component } from "react";
import "./select.css";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      options: props.options,
      selectedValue: props.defaultValue,
      noRecord: false
    };
  }

  inputChangeHandler = () => {
    this.setState({
      isActive: true
    });
  };

  searchHandler = (e) => {
    var curValue = e.target.value;
    var copyValue = this.props.options.slice();
    var filterValue = curValue
      ? copyValue.filter((item) => {
          return !(item instanceof Object)
            ? item.includes(curValue)
            : item.value.includes(curValue);
        })
      : copyValue;
    this.setState({
      options: [...filterValue],
      noRecord: filterValue >= 0 ? true : false
    });
  };

  changeValueHandler = (e) => {
    this.setState({
      selectedValue: e.target.innerHTML,
      isActive: false,
      searchValue: ""
    });
  };

  render() {
    return (
      <div className="dropdown-container">
        {this.state.isActive ? (
          <div
            className="backdrop"
            onClick={() => {
              this.setState({ isActive: false, searchValue: "" });
            }}
          ></div>
        ) : null}
        <div
          className={`inBox ${this.state.isActive ? "active" : false}`}
          onClick={this.inputChangeHandler}
        >
          {this.state.selectedValue}
        </div>
        <ul className={`dropdown ${this.state.isActive ? "active" : false}`}>
          <li className="dropdown-search">
            <input placeholder="Search" onChange={this.searchHandler} />
          </li>
          {this.state.options.map((item, index) => {
            return !(item instanceof Object) ? (
              <li onClick={this.changeValueHandler} key={index} value={item}>
                {item}
              </li>
            ) : (
              <li
                onClick={this.changeValueHandler}
                key={item.id}
                value={item.value}
              >
                {item.value}
              </li>
            );
          })}
          {this.state.noRecord ? (
            <li className="norecord">No record found</li>
          ) : null}
        </ul>
      </div>
    );
  }
}

export default Select;
