<?php 

require("./database.php");
//$connection = connectServer("localhost","root",file_get_contents("./pass.txt"));
//$result= executeQuery($connection,"create database test_db_2");
$connection = connectDb("localhost","root","","db_lab4");
/*$result= executeQuery($connection, "create table users(
id int(32) auto_increment primary key,
username varchar(255),
password varchar(255)
)");
*/

if($_SERVER["REQUEST_METHOD"]=="POST")
{

    
    $result= addUser($connection,"users",$_POST["txt_password"],$_POST["txt_ccpassword"],$_POST["txt_username"]);
    if($result==-1)
    {
        alert("user Exists");
        header('Location: welcome.html');
    }
    else if($result==-2)
    {
        alert("password dont match");
        header('Location: welcome.html');
    }
    else if($result==1)
    {
        alert("added successfully");
        header('Location: user.php?username='.$_POST["txt_username"]);
        
    }
}

if($_SERVER["REQUEST_METHOD"]=="GET" && isset($_GET["txt_username"]))
{
    $result= signInUser($connection,"users",$_GET["txt_username"],$_GET["txt_password"]);

    if($result==-1)
    {
        alert("password is wrong");
    }
    else if($result==-2)
    {
        alert("user does not exist");
    }
    else if($result==1)
    {
        alert("signed in");
        header("Location:./signin.html");
    }

}
?>