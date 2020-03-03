import React, { Component, Fragment } from'react';

class TodoList extends Component{

    constructor(props){
        super(props);
        
    }


    render(){
        return(
            <Fragment>
                <div>
                    <input/>
                    <button>提交</button>
                </div>
                <ul>
                    <li>学英语</li>
                    <li>Learning React</li>
                </ul>
            </Fragment>
        )
    }
}



export default TodoList;