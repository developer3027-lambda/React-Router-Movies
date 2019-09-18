import React from 'react';


function Home(props) {
  const routeToHome = event => {
    event.preventDefault();
    props.history.push('./');
  }
}

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <button onClick={Home} className="home-button">Home</button>
  </div>
);

export default SavedList;
