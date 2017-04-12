// @flow
import { observable } from 'mobx';

export default class Movie {
  date: string;
  title: string;
  @observable
  favorite = false;
  constructor(title: string, date: string) {
    this.date = date;
    this.title = title;
  }
};
