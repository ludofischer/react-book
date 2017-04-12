import { observable } from 'mobx';

export default class Movie {
  title: string;
  day: string;
  @observable
  favorite = false;
    constructor(title: string, day: string) {
    this.day = day;
    this.title = title;
  }
};
