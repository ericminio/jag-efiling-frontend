import React from "react";
import { RadioGroup, Radio } from "react-radio-group";

class YesNo extends React.Component{

    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.onChange = this.onChange.bind(this);
    }

    getInitialState() {
        return {
            message: <div />,
            yesChecked: null
        };
    }

    onChange(value) {
        if (value !== this.state.yesChecked) {
            this.state.yesChecked = value;
            this.forceUpdate();
        }

        if (value === true) {
            this.state.message = React.Children.only(this.props.children);
        } else {
            this.state.message = <div />;
        }
    }

    render() {
        return(<div>
                <RadioGroup selectedValue={this.state.yesChecked} name={this.props.name} onChange={this.onChange}>
                    <div>
                      <label className="radio-inline"><Radio value={true} id={'yes-'+this.props.ids} />Yes</label>
                      <label className="radio-inline"><Radio value={false} id={'no-'+this.props.ids} />No</label>
                    </div>
                </RadioGroup>
                { this.state.message }
              </div>
        )
    }
}


export default YesNo;
