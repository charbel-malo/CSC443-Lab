<html>
<header>
</header>
<body>
<div class="container">
<h1> Lab 3</h1>
<hr>
<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") { 
     echo"GET"; } 
    elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
        if($_POST["function"]=="palindrome"){
            isPalindrome($_POST["stringfield"]);
        }
        if($_POST["function"]=="capitalizer"){
            drunkenCapitalizer($_POST["stringfield"]);
        }

     }
?>
<h4>Palindrome checker</h4>
<form action="./index.php" method="post">
<input type="text" name="stringfield" id="palindromefield"> 
<input type="hidden" name="function" value="palindrome">
<input type="submit"></form>

<h4>drunkenCapitalizer</h4>
<form action="./index.php" method="post">
<input type="text" name="stringfield" id="capfield"> 
<input type="hidden" name="function" value="capitalizer">
<input type="submit"></form>
</div>
</body>
</html>

<?php 
function isPalindrome($string){
$string = strtolower($string);
$revstring = strrev($string);
if(strcmp($string,$revstring)==0){
    echo $string." is a palindrome!";
}
else{echo $string." is NOT a palindrome!";}
}

function  drunkenCapitalizer($string){
    for($i=0;$i<strlen($string);$i++){
        $randomtemp = rand(0,10);
        if($randomtemp>5)
        $string[$i] = strtoupper($string)[$i];
    }
    echo $string;
}
?>