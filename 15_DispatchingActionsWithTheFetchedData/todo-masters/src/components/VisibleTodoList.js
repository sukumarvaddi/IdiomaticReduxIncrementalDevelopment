import React, {Component} from 'react'
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from '../actions';
import {getVisibleTodos} from '../reducers';
import TodoList from './TodoList';
import fetchTodos from '../api';


class VisibleTodoList extends Component {
  componentDidMount(){
    fetchTodos(this.props.filter).then((todos)=>console.log(this.props.filter, todos));
    this.fetchData()
  }
  componentDidUpdate(prevProps){
    if(this.props.filter != prevProps.filter){
      this.fetchData()
    }
  }

  fetchData() {
    const {filter, receiveTodos} = this.props
    fetchTodos(filter).then((todos)=>receiveTodos(filter, todos));
  }

  render () {
    const {toggleTodo, ...rest} = this.props;
    return <TodoList onTodoClick = {toggleTodo} {...rest} />
  }
}


const mapStateToProps = (state, {params}) => {
  const filter = params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter
  };
};

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList));

export default VisibleTodoList;
