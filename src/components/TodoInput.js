import React, {Component} from 'react';

class TodoInput extends Component {
    render() {
        const {item, editItem, handleChange, handleSubmit} = this.props;
        let button;

        if (item.length > 0) {
            button = <button
                        type="submit"
                        className={
                            editItem
                            ? "btn btn-block btn-success mt-3 text-capitalize"
                            : "btn btn-block btn-primary mt-3 text-capitalize"
                        }
                    >
                        {editItem ? "edit item" : "add item"}
                    </button>;
        } else {
            button = <button
                        type="submit"
                        className={
                            editItem
                            ? "btn btn-block btn-success mt-3 text-capitalize btn-disabled"
                            : "btn btn-block btn-primary mt-3 text-capitalize btn-disabled"
                        }
                        disabled
                    >
                        {editItem ? "edit item" : "add item"}
                    </button>;
        }

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>
                        <input
                            type="text"
                            className="form-control text-capitalize"
                            placeholder="add a todo item"
                            value={item}
                            onChange={handleChange}
                        />
                        {button}
                    </div>
                </form>
            </div>
        );
    };
}

export default TodoInput;