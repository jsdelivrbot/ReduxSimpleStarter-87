import _ from "lodash";
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY ='AIzaSyDaXc6Hjkf48XnSHs2Z1D73pFCM-m_nRGQ';


//create a new component which is going to produce some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      videos : [],
      Selectedvideo:null
    };
    this.videoSearch('surfboards');

  }
  videoSearch(term){
    YTSearch({key:API_KEY, term:term}, (videos) => {
      //console.log(videos);
      this.setState({
        videos: videos,
        Selectedvideo:videos[0]
      });
    });
  }

  render(){
    const videoSearched = _.debounce((term) => { this.videoSearch(term) }, 300);

    return( <div>
      <SearchBar onSearchBarChange={videoSearched} />
      <VideoDetail video={this.state.Selectedvideo}/>
      <VideoList
        onVideoSelect ={Selectedvideo => this.setState({Selectedvideo})}
        videos={this.state.videos} />
      </div>
    );
  }
}
//TAKE THIS component'S GENERATED HTML and put it on the page in the DOM
ReactDOM.render(<App />,document.querySelector('.container'));
