# WeatherApp
The purpose of this simple app is to help users find out relevant current weather data for every US city by providing its state and city name.
The app shows current temperature in degrees celsius and displays humidity, air quality and wind speed.

## Technical Documentation


### 1.1 Project Architecture: 


The code represents a Weather App website. The project follows the Angular framework, which provides a component-based architecture, where each component represents a specific part of the web page.
 
Components: 

1.	App-home: This component represents the home page of the website. It contains a button that navigates to the same page with the information regarding the weather of the selected city. 

Services: 

1.	Weather Service
This service is responsible to communicate with the US Weather by City API to retrieve current weather data for each city in the United States by the states. It has the method getWeatherData()  with two parameters: cityName and stateName. This method calls the API and sets the parameters to those we specified. This service is injected in the home.compoent.ts file and it gets the response from the API with the help of an HTTP request. This response is later used in the HTML template of the home component with all the necessary data needed for our application.
Information we retrieve from the API:
1.	Current weather in degrees Celsius
2.	Air quality
3.	Weather Description
4.	Humidity in %
5.	Wind Speed in mph

 



### 1.2 Implementation Details: 


1.	HTML Template:

   - The HTML template represents the structure and content of the Weather App user interface.
   - The `<h1>` element displays a welcome message to the users.
   - The `<p>` element provides brief instructions to the users, informing them to search for any city and state in the United States.
   - The `<form>` element is used to create a search form with two input fields and a submit button.
   - The first input field allows users to enter the US state abbreviation (e.g., CA for California).
   - The second input field allows users to enter the city name.
   - The ngModel directive is used to bind the input values to the corresponding properties in the component.
   - The ngSubmit directive triggers the onSubmit() method when the form is submitted.
   - The weather data section is enclosed within a `<div>` element with the class "container".
   - The *ngIf directive is used to conditionally display the weather data section when the weatherData object is available.
   - The upper-data section displays an image based on the temperature, the city name, and the current temperature in Celsius.
   - The lower-data section provides additional weather information, including the minimum and maximum temperatures, humidity, and wind speed.

2.	CSS style

   - The CSS style defines the visual appearance and layout of the Weather App.
   - Custom variables are defined using the `--variableName` syntax to store colors, shadow values, and other reusable values.
   - The * selector sets margin, padding, and box-sizing properties to normalize the styling across different elements.
   - The body element sets the background color, font family, font size, and centers the content horizontally and vertically using flexbox.
   - The container class styles the main weather data display area. It sets the width, height, background color, background gradient, border radius, and box-shadow.
   - The upper-data and lower-data classes define the layout and styles for the upper and lower sections of the container, respectively.
   - The weather-data class styles the background color, font color, and alignment of the city name and temperature.
   - The more-info-container class uses flexbox to create a responsive layout for the additional weather information blocks.
   - The info-block class sets the width and alignment of each weather information block within the more-info-container.
   - Images are used to represent weather conditions, and alt attributes provide alternative text for accessibility.
   - The search section is styled with a margin-bottom and text alignment.
   - The search input and button have a consistent background color, padding, and margin to enhance their appearance.
   - The media query `@media (max-width: 600px)` targets screens with a maximum width of 600px, applying specific styles to optimize the layout for mobile devices.

The HTML template and CSS style work together to create an interactive and visually appealing Weather App. The HTML structure defines the content and form elements, while the CSS style provides the visual presentation, layout, and responsiveness. By utilizing custom variables, appropriate class names, and CSS properties, the Weather App achieves a consistent and user-friendly design across different devices and screen sizes.


3.	TypeScript Code:

The provided TypeScript code represents a service class called WeatherService.
The service is responsible for fetching weather data from an API endpoint.
It utilizes the HttpClient module from @angular/common/http for making HTTP         requests.
The service is marked with the @Injectable decorator, making it injectable throughout the application.
The constructor injects the HttpClient instance.

        getWeatherData() Method:
        The getWeatherData() method is used to retrieve weather data from the API.
        It takes two parameters: cityName (string) and stateName (string).
        It returns an Observable of type WeatherData from the API response.
        The method utilizes the http.get() method from HttpClient to send a GET request to the          API endpoint.
        The API endpoint URL is obtained from the environment.weatherApiBaseUrl variable defined in the environment file.
        The method also sets the necessary headers for the request, including XRapidAPIHostHeaderName and XRapidAPIKeyHeaderName.
        The values for these headers are obtained from environment.XRapidAPIHostHeaderValue and environment.XRapidAPIKeyHeaderValue variables defined in the environment file.
        The method sets the city and state parameters in the request URL using the HttpParams class.
        The response from the API is of type WeatherData, and the http.get() method returns an Observable of this type.

    Environment Variables:
        The environment import statement refers to an environment file where environment-specific variables are defined.
        The environment file (e.g., environment.ts) contains variables such as weatherApiBaseUrl, XRapidAPIHostHeaderName, XRapidAPIHostHeaderValue, XRapidAPIKeyHeaderName, and XRapidAPIKeyHeaderValue.
        These variables store the API base URL and the headers required to authenticate and access the weather data API.
        The values of these variables may vary depending on the specific environment (e.g., development, production).

The WeatherService class acts as a bridge between the Weather App component and the weather data API. It handles the HTTP requests and provides a method getWeatherData() to retrieve the weather information based on the provided city and state names. The service can be injected into the components that require weather data, allowing them to fetch and use the data returned by the API.

Please note that this code assumes the availability of the necessary models and environment files referenced in the import statements (WeatherData and environment). These files contain the relevant data structures and environment-specific variables required for the Weather App to function correctly.

### Further Developemnt
Our next goal in the near future is to deploy this website on the cloud and to include more sofisticated error handling mechanism. 

### 1.3 User Manual
#### How to use App?

The Weather App provides users with a simple way to retrieve weather information for any city in the United States by specifying the state and the city belonging to that state. To use the app effectively, follow these steps:

1.	Open the Weather App in a web browser or relevant platform.
2.	On the main screen, locate the search section.
3.	In the first input field, enter the two-letter abbreviation of the desired US state. For example, you can enter "CA" for California.
4.	In the second input field, enter the name of the city for which you want to retrieve weather information. For example, you can enter "Sacramento" for the city of Sacramento.
5.	Once you have entered the state and city information, click the "Search" button to initiate the weather data retrieval process.
6.	The app will communicate with API and the server to fetch the weather data for the specified location.
7.	After a brief loading period, the weather information for the specified city will be displayed in the weather display section.
8.	Observe the main weather data, including the location (city name) and temperature in degrees Celsius.
9.	For more detailed information, refer to the "More Information" section below the main weather data.
o	The "min" value represents the minimum temperature in degrees Celsius.
o	The "max" value represents the maximum temperature in degrees Celsius.
o	The "humidity" value represents the relative humidity in percentage.
o	The "wind" value represents the wind speed in miles per hour.
10.	If you wish to search for weather information for another location, repeat steps 3 to 9.
Please note that the Weather App is designed to retrieve weather data for cities in the United States only. Ensure that you enter the correct state abbreviation and city name to obtain accurate results.
Remember to use the app responsibly and refer to reliable weather sources for the most up-to-date and accurate weather information.


