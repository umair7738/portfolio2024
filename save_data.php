<?php
// Include the configuration file
require_once 'config.php';

// Function to sanitize form data
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Connect to MySQL database
$conn = new mysqli('localhost', 'root', '', 'umair7738_portfolio');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get and sanitize form data
$name = sanitize_input($_POST['name']);
$email = sanitize_input($_POST['email']);
$message = sanitize_input($_POST['message']);

// Validate form data
if (empty($name) || empty($email) || empty($message)) {
    die("Error: Please fill in all fields");
}

// Prepare SQL statement
$sql = "INSERT INTO portfolio_form (name, email, message) VALUES ('$name', '$email', '$message')";

// Execute SQL statement
if ($conn->query($sql) === TRUE) {
    // Send email using Sendinblue's SMTP API with cURL
    $sender_name = "Enquiry Portfolio";
    $sender_email = "umairshaikh7738@gmail.com";
    $to = "umairshaikh7738@gmail.com"; // Replace with the recipient's email address
    $subject = "New Form Submission From Portfolio";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    $apiKey = SENDINBLUE_API_KEY; // Replace with your Sendinblue API key in config.php file

    $url = "https://api.sendinblue.com/v3/smtp/email";
    $data = [
        "sender" => ["name" => $sender_name, "email" => $sender_email],
        "to" => [["email" => $to]],
        "subject" => $subject,
        "htmlContent" => nl2br($body)
    ];

    $headers = [
        "Accept: application/json",
        "Content-Type: application/json",
        "api-key: $apiKey"
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    curl_close($ch);

    if ($response !== false) {
        echo "Email sent successfully";
    } else {
        echo "Failed to send email";
    }
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close database connection
$conn->close();
?>
