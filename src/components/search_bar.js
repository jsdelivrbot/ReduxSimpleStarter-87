import React,{Component} from 'react'

class SearchBar extends React.Component {
  /*
  componentWillMount(){
    console.log('componentWillMount');
  }
  componentDidMount(){
    console.log('componentDidMount');
  }*/

  constructor(props){
    //console.log('constuctor method');
    super(props);
    this.state={term : ''}
  }
    render() {
      //console.log('render method');
      return(
        <div className="search-bar">
          <input
            value={this.state.term}
            onChange={event=> this.onInputChange( event.target.value)}
          />

        </div>
      );
    }
    onInputChange(term){
      this.setState({term});
      this.props.onSearchBarChange(term);
    }
}

export default SearchBar;
