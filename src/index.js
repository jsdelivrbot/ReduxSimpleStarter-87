import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY ='AIzaSyDaXc6Hjkf48XnSHs2Z1D73pFCM-m_nRGQ';


//create a new component which is going to produce some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state ={videos : []};

    YTSearch({key:API_KEY,term:'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render(){
    return( <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
//TAKE THIS component'S GENERATED HTML and put it on the page in the DOM
ReactDOM.render(<App />,document.querySelector('.container'));
