import React, { Component } from 'react';

let backdropIMG;

class card extends Component {
  render() {
    let data = this.props.data;
    // if movie ID found, then...

    let posterIMG = "http://img.omdbapi.com/?apikey=bbe6ac46&" + data.poster,
      production = data.production,
      genres = data.genre,
      productionList = nestedDataToString(production),
      genresList = nestedDataToString(genres);
    backdropIMG = "http://www.omdbapi.com/?apikey=bbe6ac46&" + data.backdrop;

    if (data.poster == null) {
      posterIMG = "https://images.app.goo.gl/hrvg47ipdv1QuqpA7";
    }

    return (
      <div className="col-xs-12 cardcont nopadding">
        <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
          <h1>{data.original_title}</h1>

          <span className="tagline">{data.tagline}</span>
          <p>{data.overview}</p>
          <div className="additional-details">
            <span className="genre-list">{genresList}</span>
            <span className="production-list">{productionList}</span>
            <div className="row nopadding release-details">
              <div className="col-xs-6">
                {" "}
                Original Release:{" "}
                <span className="meta-data">{data.release}</span>
              </div>
              <div className="col-xs-6">
                {" "}
                Running Time:{" "}
                <span className="meta-data">{data.runtime} mins</span>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
          <img id="postertest" alt="" className="poster" src={posterIMG} />
        </div>
      </div>
    );
  }
  componentDidUpdate() {
    document.body.style.backgroundImage = "url(" + backdropIMG + ")";
  }
}

function nestedDataToString(nestedData) {
  let nestedArray = [],
      resultString;
  if(nestedData !== undefined){
    nestedData.forEach(function(item){
      nestedArray.push(item.name);
    });
  }
  resultString = nestedArray.join(', '); // array to string
  return resultString;
};

export default card;