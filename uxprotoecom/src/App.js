import React, { Component } from 'react';
import Items from './Items'
import ItemInfo from './components/ItemInfo';
import Search from './components/Search';
import Checkbox from './components/Checkbox';
import Radium, { StyleRoot } from 'radium';
import './index.css';
import './accordion.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

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
        
        {/* ENTIRE BACKGROUND */}
        <div className="background-grey" > bg grey

        {/* SEARCH BAR AND LOGO */}
          <div className="background-blue white-text" >background-blue white-text
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

              <div><br/></div>

              <div className="font">  {/* change font of accordion */}

                {/* REACT-ACCESSIBLE-ACCORDION */}
                <Accordion allowZeroExpanded="true">
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span className="medium-text">Category</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Checkbox label="Electronics" onFilter={this.onFilter} /> {/* Checkbox component */}
                    <Checkbox label="Books" onFilter={this.onFilter} />
                    <Checkbox label="Toys" onFilter={this.onFilter} />
                    <Checkbox label="School" onFilter={this.onFilter} />
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span className="medium-text">Availabity</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Checkbox label="In Stock" onFilter={this.onFilter} />
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span className="medium-text">Price</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Checkbox label="Over $500" onFilter={this.onFilter} />
                    <Checkbox label="$100-$500" onFilter={this.onFilter} />
                    <Checkbox label="$50-$100" onFilter={this.onFilter} />
                    <Checkbox label="$10-$50" onFilter={this.onFilter} />
                    <Checkbox label="Less than $10" onFilter={this.onFilter} />
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span className="medium-text">Rating</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Checkbox label="Over 4 Stars" onFilter={this.onFilter} />
                    <Checkbox label="Over 3 Stars" onFilter={this.onFilter} />
                    <Checkbox label="Over 2 Stars" onFilter={this.onFilter} />
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>

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
