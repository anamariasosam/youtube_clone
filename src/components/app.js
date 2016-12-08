import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const API_KEY = 'AIzaSyCYwoFZ3t5lGwGfkndc1TfAisLHLhcLlCs';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('cats')
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
       });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={ term => this.videoSearch(term) }/>
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          videos={ this.state.videos }
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) } />
      </div>
    );
  }
}
