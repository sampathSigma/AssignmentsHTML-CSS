<?php
/**
 * Created by PhpStorm.
 * User: sampathkumar
 * Date: 13/10/20
 * Time: 10:07 AM
 */

$servername = "localhost";
$username = "username";
$password = "root123";

$conn = new mysql($servername, $username, $password);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";