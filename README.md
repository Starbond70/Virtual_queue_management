# Elite Barber Studio - Appointment Booking System
 
 Welcome to the **Elite Barber Studio** appointment booking system. This project enables users to book appointments with barbers, select services, and store details in a **MongoDB database**. The system consists of a frontend (HTML, CSS, JavaScript) and a backend (Node.js, Express, MongoDB).
 
 ---
 
 ## 📌 Features
 - Interactive landing page with animations
 - Selection of multiple services and barbers
 - Step-by-step booking process
 - Responsive design for mobile and desktop
 - MongoDB database integration
 - Dynamic database collection creation for each barber
 
 ---
 
 ## 📁 Project Structure
 ```
 📂 EliteBarberStudio
 ├── 📂 css                # Stylesheets
 │   ├── landing-styles.css  # Landing page styles
 │   ├── main.css           # General styles
 ├── 📂 js                 # JavaScript files
 │   ├── main.js           # General frontend logic
 ├── 📂 assets             # Images, icons, and assets
 ├── 📂 server             # Backend files         
 │   ├── database.js       # MongoDB connection
 ├── server.js             # Express server
 ├── 📜 index.html         # Home page
 ├── 📜 services.html      # Services selection page
 ├── 📜 barbers.html       # Barber selection page
 ├── 📜 details.html       # User details form
 ├── 📜 confirmation.html  # Booking confirmation page
 ├── 📜 README.md          # Documentation (this file)
 ├── 📜 package.json       # Node.js dependencies
 └── 📜 .gitignore         # Git ignored files
 ```
 
 ---
 
 ## 🛠 Installation Guide
 
 ### 1️⃣ Clone the Repository
 ```sh
 git clone https://github.com/starbound70/queue.git
 cd queue
 ```
 
 ### 2️⃣ Install Dependencies
 ```sh
 npm install
 ```
 
 ### 3️⃣ Start MongoDB Server
 Ensure MongoDB is installed and running. You can start MongoDB using:
 ```sh
 mongod
 ```
 Or if using MongoDB Atlas, configure your **MongoDB URI** in `server.js`.
 
 ### 4️⃣ Run the Backend Server
 ```sh
 node server.js
 ```
 The server will start at `http://localhost:5000`.
 
 ### 5️⃣ Open the Frontend
 Simply open `index.html` in a browser or use a live server extension (e.g., VS Code Live Server).
 
 ---
 
 ## 🚀 API Endpoints
 ### 1️⃣ **Book an Appointment**
 - **Endpoint:** `POST /book`
 - **Request Body:**
 ```json
 {
   "barber": "Chris Blades",
   "customerName": "John Doe",
   "phone": "9876543210",
   "services": ["Haircut", "Beard Trim"],
   "date": "2025-02-20",
   "time": "15:30"
 }
 ```
 - **Response:**
 ```json
 {
   "message": "✅ Appointment successfully booked!"
 }
 ```
 
 ### 2️⃣ **View Bookings (MongoDB CLI Command)**
 To see the appointments stored in MongoDB, open the MongoDB shell:
 ```sh
 mongo
 use barberAppointments
 show collections
 ```
 To view a specific barber's appointments:
 ```sh
 db.Chris_Blades.find().pretty()
 ```
 
 ---
 
 ## 📌 Troubleshooting
 
 ### ❌ `Error: Cannot find module 'express'`
 Run:
 ```sh
 npm install express
 ```
 
 ### ❌ `MongoDB connection error`
 Ensure MongoDB is running using:
 ```sh
 mongod
 ```
 Or check if your **MongoDB URI** is correct in `server.js`.
 
 ### ❌ `CORS Policy Error`
 Make sure the **CORS middleware** is correctly set in `server.js`:
 ```js
 app.use(cors());
 ```
 
