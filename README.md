# 🌤 Weather App
A simple and stylish weather application built with React that fetches real-time weather data using the OpenWeather API.

## 🚀 Features
- 🌍 Search weather by city name
- 🌞 Displays temperature, weather conditions like humidity and wind speed
- 🎨 Responsive design with animated weather icons
- ⚡ Instant search with "Enter" key support

## 🛠 Tech Stack
- **React.js** - Frontend framework
- **OpenWeather API** - Weather data provider
- **CSS** - Styling
- **React Icons** - Weather icons

## 📂 Project Structure
/weather-app
│── /src
│   │── /components
│   │   ├── Weather.jsx   # Weather component
│   │── App.jsx          # Main App file
│   │── App.css          # Global styles
│── index.html           # Entry point
│── package.json         # Dependencies
│── vite.config.js       # Configuration file

## 🏗 Setup & Installation

1️⃣ Clone the repository  
```sh
git clone https://github.com/PatilLaxmikant/weather-app.git
cd weather-app
```
2️⃣ Install dependencies
```sh
npm install
```
3️⃣ Create a .env file and add API keys
Create or Replace a `.env` file in the root directory and add:
```sh
VITE_APP_API=your_openweather_api_key
```

4️⃣ Start the development server
```sh
npm run dev
```

5️⃣ Open http://localhost:5173 in your browser 🎉
### 🔥 How to Use
- Open the app and enter a city name in the search bar.
- Press **Enter** or click the search button.
- The app will display the weather details.

## 🔗 API Reference
The app fetches weather data from OpenWeather API: https://api.openweathermap.org/

## 👤 Author
- **Laxmikant Patil** - [GitHub](https://github.com/PatilLaxmikant)


