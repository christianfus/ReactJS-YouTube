import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { SearchBar } from './components/searchbar';
import YTSearch from 'youtube-api-search';
import { VideoList } from './components/video_list';
import { VideoDetail } from './components/video_detail';
import { debounce } from 'lodash';

const YT_API_KEY = 'AIzaSyAlNpkyJSdakYwxCqcYSVNNJfnsSo36g8Q';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.videoSearch('bitconnect');
  }

  videoSearch(term) {
    YTSearch({ key: YT_API_KEY, term }, (videos) => {
      console.log(videos);

      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={(term) => videoSearch(term)} />
        <div className='row'>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
