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
        <div>
          <input
            value={this.state.term}
            onChange={event=> this.setState({term : event.target.value})}
          />

        </div>
      );
    }
}

export default SearchBar;
