import todoService from './todo.service';

export const services = {
  todoService
}

export interface IServices {
  todoService: typeof todoService
}