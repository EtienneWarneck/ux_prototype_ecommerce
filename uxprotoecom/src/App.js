import React, { Component } from 'react';
import Items from './Items'
import Search from './components/Search';
import Radium from 'radium';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: [],
      filter: [],
      search: '' //keyword
    }
    this.onSearch = this.onSearch.bind(this);
  }


  componentDidMount() {
    this.onSearch("") //empty field onlaod
  }

  //FROM COMPONENTS 
  onSearch(keyword) {

  };

  onFilter(filters) {

  };


  //HELPER FUNCTIONS
  findFilter() {

  };

  findItem() {

  };

  alreadyIn() { //item already displayed or not

  };

  clearAll() {

  };

  render() {
    const list = [];
    for (const item in Items) {
      list.push(Items[item].name)
    }

   const style = {
      color: "red",
      border: "1px solid red",
      ':hover': {
        backgroundColor: 'red',
        color:'black'
      }
    }

    return (

      // style.backgroundColor = 'red';
      // style[':hover']={backgroundColor: 'lightred'} 

      <div className="background-white" >
        <div className="background-white white-text" >
          <Search />
        </div>

        <div className="grid-page">
          <div className="grid-page-column allshade top">
            <div className="box border shade3">
              <p className="header-text black-text font">Filter</p>
              <div className="center entry">
                <div className="">
                  <input type="button"
                    className="button background-gray"
                    value="Clear all"
                    onCLick={this.clearAll}
                    style={style} />
                </div>
                <div className="">
                  <div className="">
                    <div className="">
                      <div className="">
                        <div className="">


                          {list}


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  };
};

export default Radium(App);
