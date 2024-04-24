<?php
// Database connection parameters
$servername = "localhost";
$username = "root"; // Replace with your database username
$password = ""; // Replace with your database password
$dbname = "umair7738_portfolio"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare SQL statement to insert data into the database
$sql = "INSERT INTO portfolio_form (name, email, message) VALUES (?, ?, ?)";

// Prepare and bind parameters
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $name, $email, $message);

// Get form data from POST request
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Execute SQL statement
if ($stmt->execute()) {
    echo "Form data saved successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close statement and database connection
$stmt->close();
$conn->close();
?>
