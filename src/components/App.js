import React from 'react';
import VideoList from '../containers/VideoListContainer';
import VideoPlayer from '../containers/VideoPlayerContainer';
import Search from '../containers/SearchContainer';
import store from '../store/store.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <Search store={store}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer store={store}/>
          </div>
          <div className="col-md-5">
            <VideoList store={store}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
