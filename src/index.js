import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import youtubeSearch from './youtube-api';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './style.scss';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.search = debounce(this.search, 300);
  }

  search(text) {
    youtubeSearch(text).then((videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    return (
      <div className="main">
        <SearchBar onSearchChange={text => this.search(text)} />
        <div id="video-section">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList className="list" onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
