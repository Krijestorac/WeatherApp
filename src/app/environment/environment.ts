// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://us-weather-by-city.p.rapidapi.com/getweather',
  XRapidAPIKeyHeaderValue: '67812fdb7cmshda484c7ee61de94p1ad8e2jsn0069d5f6b3e4',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIHostHeaderValue: 'us-weather-by-city.p.rapidapi.com',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
