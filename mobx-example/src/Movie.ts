import { observable } from 'mobx';

export default class Movie {
  @observable
  favorite = false;
  constructor(title, date) {
    this.date = date;
    this.title = title;
  }
};
