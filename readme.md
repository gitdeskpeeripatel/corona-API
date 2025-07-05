
#  PROJECT ON COVID-19 Status in India

This project is a simple, responsive web application that allows users to check the COVID-19 statistics for 10 major Indian states using data fetched from a live API.

### 📁 Project Structure
       corona-API/
           │ 
           ├── index.html # Main HTML structure
           ├── style.css # Styling and UI design
           ├── script.js # JavaScript logic (API fetch and DOM manipulation)


### 🧑‍💻 Languages & Technologies Used
   
    🧾 HTML5	Structure of the webpage (index.html)  
    🎨 CSS3	Styling and layout (style.css)
    📜 JavaScript (ES6)	Logic, API fetching, and interactivity (script.js)
    🌐 REST API	Live COVID-19 data from Rootnet API
    🔤 Google Fonts


### 🚀 How It Works

1. The app loads a dropdown with 10 predefined Indian states.
2. When a user selects a state, COVID-19 statistics (Confirmed, Recovered, Deaths) are shown in a styled card.
3. The data is dynamically fetched using `fetch()` from the live API.

### 🎯 Featured States

- Maharashtra  
- Kerala  
- Karnataka  
- Tamil Nadu  
- Delhi  
- Uttar Pradesh  
- West Bengal  
- Gujarat  
- Rajasthan  
- Bihar

### 🧑‍💻 How to Run

1. Clone or download this repository.
2. Open `index.html` in any modern browser.
3. You’ll see a dropdown with Indian states – select one to view data.

### 📦 Future Enhancements

- Add more states dynamically.
- Include charts and graphs.
- Mobile responsiveness improvements.
- Add a loading spinner or error fallback UI.