import React from "react";
import axios from "axios";

class BookItem extends React.Component {
  componentWillMount() {
    this.getInfo();
  }

  constructor(props) {
    super(props);
    this.state = {
      info: []
    };
  }

  getInfo = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?key=AIzaSyBCFbo7v3g_o8UCJ34ns9COvbahi0yfvIo&q=isbn:` +
          this.props.index
      )
      .then(response => {
        this.setState({ info: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let bookTitle = "Loading...";
    let bookImgUrl = "";
    let bookAuthor = "Loading...";
    let bookDate = "";
    let bookDesc = "Loading...";
    if (this.state.info.length === undefined) {
      const volumeInfo = this.state.info.items[0].volumeInfo;
      bookTitle = volumeInfo.title;
      bookImgUrl = volumeInfo.imageLinks.thumbnail;
      bookAuthor = volumeInfo.authors[0];
      bookDate = volumeInfo.publishedDate;
      bookDesc = volumeInfo.description;
    }
    return (
      <React.Fragment>
        <li className="bg-white pa4 br2 mb2 flex">
          <div className="dib mr4">
            <img className="mw4" src={bookImgUrl} alt={bookTitle} />
          </div>
          <ul className="list pl0">
            <li>
              <h2 className="mt0 mb2 bb bw2">{bookTitle}</h2>
            </li>
            <li>{bookAuthor}</li>
            <li>{bookDate}</li>
            <li>{bookDesc}</li>
          </ul>
        </li>
      </React.Fragment>
    );
  }
}

export default BookItem;
