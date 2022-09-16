import React from 'react';
import propTypes from 'prop-types';
import Todoitem from './toDoItem';

class TodoContainer extends React.Component {
  render() {
    return this.props.todos.map((task) => (
      <Todoitem key={task.id} todos={task} handleCheck={this.props.handleCheck} />
    ));
  }
}

TodoContainer.propTypes = {
  todos: propTypes.array.isRequired,
};

export default TodoContainer;
