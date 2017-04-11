export function requestMovies() {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve([
          { title: 'Rebel without a Cause', date: 'Monday' },
          { title: 'Ghost in the Shell', date: 'Tuesday' }
        ]),
      1000
    ));
}
