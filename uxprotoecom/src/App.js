import React, { Component } from 'react';
import Items from './Items'
import Search from './components/Search';
import ItemInfo from './components/ItemInfo';
import Radium, { StyleRoot } from 'radium';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: [],
      filter: [],
      search: '' //keyword
    }
    this.onSearch = this.onSearch.bind(this)
    this.findItem = this.findItem.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.findFilter = this.findFilter.bind(this);
    this.alreadyIn = this.alreadyIn.bind(this);
    this.clearAll = this.clearAll.bind(this);
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

    //   const list = this.state.items.map((item) =>
    //   <ItemInfo key={item.key} item={item} />
    // );


    const style = {
      color: "red",
      border: "1px solid red",
      ':hover': {
        backgroundColor: 'red',
        color: 'black'
      }
    }

    return (

      // style.backgroundColor = 'red';
      // style[':hover']={backgroundColor: 'lightred'}

      <StyleRoot>
        {/* SEARCH BAR AND LOGO */}
        <div className="background-white" >

          <div className="background-blue white-text" >
            <Search />
          </div>

          {/* GRID-PAGE */}
          <div className="grid-page">

            {/* FILTERING COLUMN */}
            <div className="grid-page-column">
              <p className="header-text black-text font">Filter</p>
              <input
                type="button"
                className="button background-gray medium-text"
                value="Clear all"
                style={style}
                onClick={this.clearAll} />

              {/* <div><br/></div> */}

              <div className="font">

                {/* ACCORDION */}

              </div>
            </div>

            <div className="grid-page-column">

              {/* BAR COLUMN */}
              <div className="horizontal-bar">
              </div>
            </div>

            {/* RESULTS COLUMN */}
            <div className="grid-page-column" >grid-page-column
              <div className="grid-result-header">grid-result-header

                <div className="grid-result-header-column">grid-result-header-column
                  <p className="header-text black-text font">Results</p>
                </div>

                <div className="grid-result-header-column">grid-result-header-column
                  <p className="small-text gray-text font">small-text gray-text font
                    Returned 3 results
                </p>
                </div>
              </div> LIST
              {list}
            </div>
          </div>
        </div>
      </StyleRoot >

    );
  };
};

export default Radium(App);
