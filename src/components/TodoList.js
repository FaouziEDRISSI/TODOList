import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {
    render() {
        const {items, editItem, handleEditItem, handleDeleteItem, clearList} = this.props;

        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {items.map(item => {
                    return <TodoItem
                        key={item.id}
                        editItem={this.props.editItem}
                        title={item.title}
                        handleEditItem={() => handleEditItem(item.id)}
                        handleDeleteItem={() => handleDeleteItem(item.id)}
                    />
                })}
                {
                    editItem || items.length === 0
                        ? <button
                            className="btn btn-block btn-danger text-capitalize mt-5 btn-disabled"
                            disabled
                          >
                            clear list
                          </button>
                        : <button
                            className="btn btn-block btn-danger text-capitalize mt-5"
                            onClick={clearList}
                          >
                            clear list
                          </button>
                }
            </ul>
        );
    }
}

export default TodoList;