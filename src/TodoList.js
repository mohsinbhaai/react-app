import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

    class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        e.preventDefault();
        if (this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    item: prevState.item.concat(newItem)
                };
            });
        }
        this._inputElement.value = "";
        console.log(this.state.item);
    }

    deleteItem(key) {
        const filteredItems = this.state.item.filter(function (item) {
            return (item.key !== key)
        });

        this.setState({
            item: filteredItems
        })
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input type="text" ref={(a) => this._inputElement = a } placeholder="enter task"/>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoItem entries={this.state.item} delete={this.deleteItem}/>
            </div>
        )
    }
}

export default TodoList;
