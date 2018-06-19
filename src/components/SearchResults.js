import React from "react";

class SearchResults extends React.Component {
  renderSuggestions = () => {
    if (this.props.query) {
      if (this.props.results.items && this.props.results.items.length) {
        return (
          <ul className="bg-white list pl0">
            {Object.keys(this.props.results.items).map(key => (
              <li className="pa4 bb flex" key={key}>
                {this.props.results.items[key].volumeInfo.imageLinks ? (
                  <img
                    className="mw3"
                    src={
                      this.props.results.items[key].volumeInfo.imageLinks
                        .thumbnail
                    }
                    alt={this.props.results.items[key].volumeInfo.title}
                  />
                ) : null}
                <span>{this.props.results.items[key].volumeInfo.title}</span>
              </li>
            ))}
          </ul>
        );
      } else {
        return <p>No results</p>;
      }
    }
  };
  render() {
    return <div>{this.renderSuggestions()}</div>;
  }
}

export default SearchResults;
