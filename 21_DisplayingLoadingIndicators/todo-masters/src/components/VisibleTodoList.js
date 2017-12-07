import React, {Component} from 'react'
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from '../actions';
import {getVisibleTodos, getIsFetching} from '../reducers';
import TodoList from './TodoList';

class VisibleTodoList extends Component {
  componentDidMount(){
    this.fetchData()
  }
  componentDidUpdate(prevProps){
    if(this.props.filter != prevProps.filter){
      this.fetchData()
    }
  }

  fetchData() {
    const {filter, requestTodos, fetchTodos} = this.props
    requestTodos(filter);
    fetchTodos(filter);
  }

  render () {
    const {toggleTodo, todos, isFetching} = this.props;

    if (isFetching && !todos.length){
      return <p>Loading...</p>
    }

    return <TodoList onTodoClick = {toggleTodo} todos ={todos} />
  }
}


const mapStateToProps = (state, {params}) => {
  const filter = params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    isFetching:getIsFetching(state, filter),
    filter
  };
};

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList));

export default VisibleTodoList;
