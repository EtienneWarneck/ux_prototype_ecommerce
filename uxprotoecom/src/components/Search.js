import React, { Component } from 'react'

export class Search extends Component {

    constructor(props) {
        super(props);

        this.onSearch =this.onSearch.bind(this);
        this.textInput = React.createRef();
    }


    onSearch() {

    }

    render() {
        return (
            <div className="grid-header">
                <div className="grid-header-column">
                    <p className="title-text white-text font">Store Logo</p>
                </div>
                <div className="grid-header-column">
                    <input className="input-bar" ref={this.textInput} type="text"/>
                </div>
                <div className="grid-header-column">
                    <button className="button gray-background" onClick={this.onSearch}>Search</button>
                </div>
            </div>
        )
    }
}

export default Search
