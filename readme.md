
#  PROJECT ON COVID-19 Status in India

This project is a simple, responsive web application that allows users to check the COVID-19 statistics for 10 major Indian states using data fetched from a live API.
### 🔗 Live Demo 


#### 👉 https://corona-api-woad.vercel.app/
---

### 📁 Project Structure
       corona-API/
           │ 
           ├── index.html # Main HTML structure
           ├── style.css # Styling and UI design
           ├── script.js # JavaScript logic (API fetch and DOM manipulation)


### 🧑‍💻 Languages & Technologies Used
   
    🧾 HTML5	- Structure of the webpage (index.html)  
    🎨 CSS3 -	Styling and layout (style.css)
    📜 JavaScript (ES6) - Logic, API fetching, and interactivity (script.js)
    🌐 REST API - Live COVID-19 data from Rootnet API
    🔤 Google Fonts


### 🚀 How It Works

1. **Dropdown Generation**  
   - The project fetches data from the API.
   - It filters out 10 predefined Indian states.
   - These states are dynamically added to a dropdown menu.

2. **User Interaction**  
   - When a user selects a state from the dropdown, its COVID-19 stats are displayed.
   - The data shown includes:
     - Total Confirmed Cases
     - Recovered Cases
     - Death Count

3. **Dynamic UI Update**  
   - The data is shown inside a styled card using JavaScript DOM manipulation.
   - The display area is initially hidden and shown only when a state is selected.


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
