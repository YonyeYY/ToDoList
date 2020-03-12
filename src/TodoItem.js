import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const {inputData} = this.props;
        // JSX -> JS 对象 -> 真实的DOM
        return (
            <div onClick={this.handleClick}>
                {inputData}
            </div>
        )
    }

    handleClick() {
        const {deleteItem, index}=this.props;
        deleteItem(index);
    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;