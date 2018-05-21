import React from "react";

class CreateNewList extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.createNewList(this.newListInput.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="bg-gray pa3 flex w-100" onSubmit={this.handleSubmit}>
        <input
          className="w-80"
          type="text"
          ref={input => (this.newListInput = input)}
          required
          placeholder="Enter New Name"
        />
        <button className="w-20" type="submit" className="mr3 ml3">
          Create list
        </button>
      </form>
    );
  }
}

export default CreateNewList;
