import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './SearchBar';
import VideoList from './VideoList';

const API_KEY = 'AIzaSyCYwoFZ3t5lGwGfkndc1TfAisLHLhcLlCs';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <h1>Hello 🍪</h1>
        <SearchBar />
        <VideoList videos= { this.state.videos }/>
      </div>
    );
  }
}
