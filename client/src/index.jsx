import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import Title from './components/title.jsx';
import Review from './components/review.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'overview',
      _data: {},
      reviewStars: [],
      // ID is hard coded for now
      _id: 1,
    };

    $.ajax({
      type: 'GET',
      url: '/api/restaurant/' + this.state._id,
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        console.log('GET request success!');
        console.log(data);
        this.setState(state => ({
          _data: data,
        }));
        this.state.reviewStars = data.reviewStars;
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(xhr, status);
        console.log(err);
        console.log('GET request failed!');
      }.bind(this)
    });
  }

  render() {
    return (
      <div>
        <Title title={this.state._data.title}/>
        <Review state={this.state}/>
        {/* <div aria-label="4.7 out of 5 stars rating" role="img">
          <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
            <title>Star_8_</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="star-full" fill-rule="nonzero" fill="#DA3743">
            <path d="M3.213,15.984 C3.15,15.984 3.109,15.974 3.088,15.953 C2.984,15.89 2.952,15.817 2.994,15.734 L3.87,10.218 L0.083,6.331 C-5.27355937e-16,6.247 -0.021,6.164 0.021,6.08 C0.042,6.017 0.104,5.965 0.209,5.923 L5.465,5.14 L7.781,0.125 C7.864,0.042 7.937,0 8,0 C8.104,0 8.177,0.042 8.219,0.125 L10.566,5.14 L15.792,5.924 C15.875,5.945 15.938,5.997 15.98,6.081 C16.021,6.164 16,6.247 15.917,6.331 L12.131,10.217 L13.038,15.733 C13.038,15.817 13.007,15.89 12.944,15.952 C12.84,16.015 12.756,16.015 12.694,15.952 L8,13.383 L3.338,15.953 C3.317,15.974 3.275,15.984 3.213,15.984 L3.213,15.984 Z" id="Star_8_"></path>
            </g></g>
          </svg>
        </div> */}
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('overview-section'));