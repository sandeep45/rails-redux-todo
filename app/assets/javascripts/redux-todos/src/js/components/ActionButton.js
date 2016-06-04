import React, { PropTypes, Component } from 'react'

const ActionButton = (props) => {
  const {handler, text} = props;

  return(
    <span>
      <input type="button" value={text}
        onClick={handler} />
    </span>
  )
}

ActionButton.propTypes = {
  handler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default ActionButton

