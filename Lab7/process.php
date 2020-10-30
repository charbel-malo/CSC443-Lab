<?php
require('database.php');
$connection = connectDb("localhost","root","","db_lab7");
$errors         = array();     
$data           = array();      
if($_SERVER["REQUEST_METHOD"]=="POST")
{
if (empty($_POST['name']))
    $errors['name'] = 'Name is required.';

if (empty($_POST['email']))
    $errors['email'] = 'Email is required.';

    if (empty($_POST['password']))
    $errors['password'] = 'password is required.';
    if (empty($_POST['birthday']))
        $errors['birthday'] = 'Birthday is required.';

if ( ! empty($errors)) {

    $data['success'] = false;
    $data['errors']  = $errors;
} else {
    $result= addUser($connection,"users",$_POST["name"],$_POST["email"],$_POST["password"],$_POST["birthday"]);

    if($result==-1)
    {
        $errors['user'] = 'User already exists.';
        $data['success'] = false;
    $data['errors']  = $errors;
    }
   
    else if($result==1)
    {
    $data['success'] = true;
    $data['message'] = 'Success!';
    }
     
}

echo json_encode($data);}

if($_SERVER["REQUEST_METHOD"]=="GET")
{

if (empty($_GET['email']))
    $errors['email'] = 'Email is required.';

    if (empty($_GET['password']))
    $errors['password'] = 'password is required.';
    
if ( ! empty($errors)) {

    $data['success'] = false;
    $data['errors']  = $errors;
} else {
    $result= signInUser($connection,"users",$_GET["email"],$_GET["password"]);

    if($result==-1)
    {
        $errors['user'] = 'Wrong credentials.';
        $data['success'] = false;
    $data['errors']  = $errors;
    }
   
    else if($result==1)
    {
    $data['success'] = true;
    $data['message'] = 'Success!';
    }
     
}

echo json_encode($data);

}?>