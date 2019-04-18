import React from "react";
import ReactSelect from "react-select";
import classNames from "classnames";

class MyInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }


    getInitialState() {
        return {
            isUnedited: true,
            formIsValid: undefined,
            fieldIsValid: undefined,
            selectOptions: this.props.selectOptions || [],
            value: undefined,
            isPrefilled: undefined
        };
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {
        var value = this.state.value;
        if (value === undefined) {
            value = this.props.value;
        }

        var isPrefilled = this.state.isPrefilled || this.props.isPrefilled;
        var style = this.props.style || {};

        var inputClass = classNames("");
        if (this.props.type !== 'react-select') {
            inputClass = classNames("form-control");
        }

        var disabled = this.props.disabled || false;

        if (this.state.formIsValid === false && this.state.fieldIsValid === true) {
            inputClass = classNames(inputClass,"parsley-success");
            if (this.props.type === 'react-select') {
                style.backgroundColor = "#d5f0db";
                style.border = "2px solid #2bb54c";
            }
        } else if (this.state.fieldIsValid === false) {
            inputClass = classNames(inputClass,"parsley-error");
            if (this.props.type === 'react-select') {
                style.backgroundColor = "#f2dede";
                style.border = "2px solid #cc0000";
            }
        } else if (isPrefilled && this.state.isUnedited && value !== '') {
            inputClass = classNames(inputClass,"prefilled","unedited");
        }

        if (this.props.type === 'date') {
            inputClass = classNames(inputClass, "date");
        }

        var createSelectOption = function(option, index) {
            return (
                    <option value={option.value} key={index}>{option.label || option.value}</option>
                );
        };

        if (this.props.type === 'select') {
            return (
                <select className={inputClass}
                    name={this.props.name}
                    value={value}
                    style={this.props.style}
                    onChange={this._onChange}
                    disabled={disabled} >
                        {this.props.selectOptions.map(createSelectOption, this)}
                </select>
                );
        } else if (this.props.type === 'react-select') {
            return (
                <ReactSelect className={inputClass}
                    name={this.props.name}
                    value={value}
                    style={style}
                    onChange={this._onChangeReactSelect}
                    options={this.props.selectOptions}
                    clearable={false}
                    disabled={disabled}
                    ref="reactselect" />
                );
        } else {
            return (
                <input type="text"
                    className={inputClass}
                    name={this.props.name}
                    value={value}
                    style={this.props.style}
                    onChange={this._onChange}
                    maxLength={this.props.maxLength}
                    disabled={disabled}
                    placeholder={this.props.placeholder}
                    id={this.props.id} />
                );
        }
    }
}

export default MyInput;
