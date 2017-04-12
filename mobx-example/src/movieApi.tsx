export function requestMovies(): Promise<Array<{title: string, date: string}>> {
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
