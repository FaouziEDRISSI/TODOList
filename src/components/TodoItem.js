import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        const {title, editItem, handleEditItem, handleDeleteItem} = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2" >
                <h6>{title}</h6>
                <div className="todo-icon">
                    {
                        editItem
                        ? ""
                        : <span
                            className="mx-2 text-success"
                            onClick={handleEditItem}
                          >
                            <i className="fas fa-pen" />
                          </span>
                    }
                    {
                        editItem
                        ? <span
                            className="mx-2 text-danger"
                          >
                            <i className="fas fa-ban" />
                          </span>
                        : <span
                            className="mx-2 text-danger"
                            onClick={handleDeleteItem}
                          >
                            <i className="fas fa-trash" />
                          </span>
                    }
                </div>
            </li>
        );
    }
}

export default TodoItem;