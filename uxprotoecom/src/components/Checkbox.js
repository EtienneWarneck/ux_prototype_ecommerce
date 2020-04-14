import React, { Component } from 'react'

export class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        }
    }

    onFilter() {

    };

    render() {
        var label = this.props.label;
        return (
            <p className="left entry">
                <input
                    type="checkbox"
                    className="small-input-check"
                    data-value={label}
                    onChange={this.onFilter}
                    defaultChecked={this.state.checked}
                />
                <span className="over">
                    {label}
                </span>
            </p>
        )
    }
}

export default Checkbox
