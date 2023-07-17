# Author: KIPNGENOH AARON

# Car Ticket Booking

Car Ticket Booking is a web application that allows users to book car tickets, make payments, and provide feedback. It provides a simple and convenient way for users to reserve seats in different car types and enjoy a hassle-free booking experience.

This project is built using JavaScript, HTML, and CSS on the frontend, and it utilizes a JSON file (`db.json`) as a simple database to store booking, payment, and feedback data. The backend server is implemented using Node.js and Express.

## Features

- User-friendly interface for booking car tickets.
- Ability to select car type and specify the number of seats.
- Real-time calculation of the total amount based on the selected car type and number of seats.
- Secure login functionality for authenticated access.
- Payment integration to complete the ticket purchase process.
- Feedback submission to gather user input and improve the booking experience.

## Setup and Usage

1. Clone the repository or download the source code.

2. Install the required dependencies by running the following command:
   ```
   npm install
   ```

3. Start the server by running the following command:
   ```
   node server.js
   ```

4. Access the application by opening your web browser and navigating to `http://localhost:3000`.

5. Follow the on-screen instructions to navigate through the application, book tickets, make payments, and provide feedback.

## Project Structure

- `index.html`: The main HTML file that contains the structure and layout of the web pages.
- `styles.css`: The CSS file that provides styling for the web pages.
- `script.js`: The JavaScript file that handles the dynamic functionality and interaction with the server.
- `db.json`: The JSON file acting as a simple database to store booking, payment, and feedback data.
- `server.js`: The Node.js server file that handles API endpoints for bookings, payments, and feedbacks.

## Dependencies

- Express: A fast and minimalist web application framework for Node.js.
- Body-parser: A middleware to parse JSON data sent in requests.

## Contributing

Contributions are welcome! If you have suggestions, feature requests, or bug reports, please open an issue or submit a pull request. Make sure to follow the existing code style and include relevant tests and documentation.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

This project was inspired by the need for a simple and user-friendly car ticket booking system. Special thanks to the developers and contributors of the used libraries and frameworks.

## Login 
Username === 'admin' && password === 'password'

---

Feel free to update and customize this README file based on your project's specific details and requirements. Provide clear instructions for setup, usage, and customization, and include any additional information that will help users understand and contribute to the project.