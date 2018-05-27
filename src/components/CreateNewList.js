import React from 'react';

class CreateNewList extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.createNewList(this.newListInput.value);
    e.currentTarget.reset();
    this.props.toggleCreateNewList(false);
  };

  render() {
    return (
      <form className="bg-moon flex w-100" onSubmit={this.handleSubmit}>
        <input
          autoFocus
          className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
          type="text"
          ref={input => (this.newListInput = input)}
          required
          placeholder="Enter New Name"
          name="addNewList"
        />
        <button
          className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
          type="submit"
        >
          Create list
        </button>
      </form>
    );
  }
}

export default CreateNewList;
