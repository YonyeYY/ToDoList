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

    //当一个组件从父组件接受参数
    //如果这个组件第一次存在于父组件中，不会执行
    //如果这个组件之前已经存在于父组件中，才会执行
    //只要父组件的render 函数被重新执行了，子组件的这个生命周期函数被执行
    componentWillReceiveProps(){
        console.log("child componentWillReceiveProps");
    }

    //当这个组件即将被从页面中剔除的时候，会被执行
    componentWillUnmount(){
        console.log("child componentWillUnmount");
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