import React from 'react';
import Search from './components/Search';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: [],
      filter: [],
      search: ''
    }
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    this.onSearch("") //empty field onlaod
  }

  onSearch(keyword) {
    const list = [];
    for (const item in Items) {
      if (Items)

    }
  };

  onFilter() { };

  findItem() { };

  alreadyIn() { };

  clearAll() { };


  return(
    <div className="background-white">
    <div className="grid-page">
    <div className="grid-page-column allshade top">
    </div>
    </div>
  );
}

export default App;
