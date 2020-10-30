<?php

function connectServer($servername,$username,$password)
{
$connection = new mysqli($servername, $username, $password);
if ($connection->connect_error)
{
throw new Exception("Connection Error");
}
else {
    return $connection;
}
}

function connectDb($servername,$username,$password,$dbname)
{
$connection = new mysqli($servername, $username, $password,$dbname);
if ($connection->connect_error)
{
throw new Exception("Connection Error");
}
else {
    return $connection;
}
}

function selectQuery($connection, $query)
{
    $result= $connection->query($query);

    $multiArray=array();
    While($row = $result->fetch_assoc()) {
        array_push($multiArray,$row);
        }
    return $multiArray;
}

function executeQuery($connection, $query)
{
    $result= $connection->query($query);
    return $result;
}

function userExists($connection, $tablename, $email)
{
    $result= selectQuery($connection,"select * from $tablename where email='$email'");
    return count($result)>0;
}
function checkPasswordMatch($password,$ccpassword)
{
    return ($password==$ccpassword);
}
function addUser($connection, $tablename, $username,$email, $password, $birthday)
{
    if(userExists($connection,$tablename,$email))
    {
        return -1;
    }
    
    $hashedPassword= md5($password);
    
    executeQuery($connection,"Insert into $tablename (name,email,password,birthday) values ('$username','$email','$hashedPassword','$birthday')");
    return 1;
}

function passwordMatches($connection,$tablename,$username,$password)
{
    $result= selectQuery($connection,"Select password from $tablename where email='$username'");
    return $result[0]["password"]==md5($password);
    
}

function signInUser($connection,$tablename,$email,$password)
{
    if(userExists($connection,$tablename,$email) )
    {
        if(passwordMatches($connection,$tablename,$email,$password))
        {
            return 1;  
        }
      return -1;
    }
    return -2;
}
function alert($msg) {
    echo "<script type='text/javascript'>alert('$msg');</script>";
}

$connection = connectDb("localhost","root","","db_lab4");
?>