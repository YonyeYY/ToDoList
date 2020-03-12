import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';
import Test from './Test';


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
    }


    render() {
        return (
            <Fragment>
                <div>
                    {/* 
                    for属性与循环的for 有歧义,于是react 中使用htmlFor 来代替for 属性
                    className 代替class 属性
                     */}
                    <label htmlFor="insertArea">输入内容</label>
                    {/* 下面是一个input框 */}
                    <input
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
                <Test content={this.state.inputValue}/>
            </Fragment>
        )
    }

    getTodoItem(){
        return this.state.list.map((item, index) => {
            return(
                <TodoItem
                    key={index}
                    inputData={item}
                    index={index}
                    deleteItem={this.handleItemDelete}
                />
            )
        })
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))

        //旧版语法
        // this.setState({
        //     inputValue: e.target.value
        // })
        //console.log(e.target);
    }

    handleBtnClick(e) {
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }))

    }

    handleItemDelete(index) {
        //immutable
        //state 不允许我们做任何的改变
        
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        })



        // this.setState({
        //     list: list
        // })

        console.log(index);
    }


}





export default TodoList;