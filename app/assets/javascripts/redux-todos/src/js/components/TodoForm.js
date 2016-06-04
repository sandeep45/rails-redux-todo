import React, { PropTypes, Component } from 'react'

class TodoForm extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const { onSubmit, title } = this.props;

    return(
      <form onSubmit={this._handleSubmission}>
        <input type="text"
          ref={(c) => this._todoText = c}
          defaultValue={title}
        />
        <input type="submit" />
      </form>
    )
  }

  _handleSubmission = (evt) => {
    evt.preventDefault();
    console.log("in handle submission. ", "_todoText is: ", this._todoText.value);
    this.props.onSubmit(this._todoText.value);
    this._todoText.value="";
  }
}

TodoForm.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

export default TodoForm;