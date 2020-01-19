import React, {Component} from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

import "./App.css";

class App extends Component {
    state = {
        items: [],
        item: "",
        id: uuid(),
        editItem: false
    };

    handleChange = e => {
        this.setState({
            item: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const newItem = {
            id: this.state.id,
            title: this.state.item
        };

        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems,
            item: "",
            id: uuid(),
            editItem: false
        });
    };

    handleEditItem = id => {
        const filtredItems = this.state.items.filter(item => item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id);
        console.log(selectedItem);
        this.setState({
            items: filtredItems,
            item: selectedItem.title,
            id: id,
            editItem: true
        });
    };

    handleDeleteItem = id => {
        const filtredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filtredItems
        });
    };

    clearList = () => {
        this.setState({
            items: []
        });
    };

    render() {
        return (
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-4">
                  <h3 className="text-capitalize text-center">todo input</h3>
                  <TodoInput
                    item={this.state.item}
                    editItem={this.state.editItem}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                  />
                  <TodoList
                      items={this.state.items}
                      editItem={this.state.editItem}
                      handleDeleteItem={this.handleDeleteItem}
                      handleEditItem={this.handleEditItem}
                      clearList={this.clearList}
                  />
                </div>
              </div>
            </div>
        )
    }
}
export default App;
