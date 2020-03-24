import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';


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
        console.log("render");
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
                        ref={(input) => {this.input = input}}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul ref={(ul) => {this.ul =ul}}>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    //组件被挂载到页面之后,自动被执行
    // componentDidMount(){
    //     axios.get('/api/todolist')
    //     .then(() => {alert('succ!!')})
    //     .catch(() => {alert('error!!')})
    // }

    //组件被更新之前,他会自动被执行
    shouldComponentUpdate(nextProps,nextState){
        console.log("this is show componentUpdate.");
        return true;
    }

    //组件被更新之前，它会自动执行，但是他在shouldComponent 之后被执行
    //shouldComponentUpdate 返回true 他才会执行
    //如果shouldComponentUpdate 返回false，他不会执行
    componentWillUpdate(){
        console.log("componentWillUpdate");
    }


    //组件更新完成之后，他会被执行
    componentDidUpdate(){
        console.log("componentDidUpdate");
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

    handleInputChange() {
        const value = this.input.value;
        //console.log(value);
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
        //setState 是一个异步函数,它提供第二参数是一个回调方法
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }),() => {
            console.log(this.ul.querySelectorAll('div').length);
        })

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