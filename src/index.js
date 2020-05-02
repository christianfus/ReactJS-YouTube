import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { SearchBar } from './components/searchbar';
import YTSearch from 'youtube-api-search';
import { VideoList } from './components/video_list';
import { VideoDetail } from './components/video_detail';

const YT_API_KEY = 'AIzaSyAlNpkyJSdakYwxCqcYSVNNJfnsSo36g8Q';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };

    YTSearch({ key: YT_API_KEY, term: 'bitconnect' }, (videos) => {
      console.log(videos);

      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
