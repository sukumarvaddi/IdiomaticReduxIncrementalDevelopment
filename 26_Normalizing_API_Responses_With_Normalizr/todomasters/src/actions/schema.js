/**
 * Created by svaddi_July_1_2015 on 10/4/16.
 */
import {Schema, arrayOf} from 'normalizr';

export const todo = new Schema('todos');
export const arrayOfTodos = arrayOf(todo);