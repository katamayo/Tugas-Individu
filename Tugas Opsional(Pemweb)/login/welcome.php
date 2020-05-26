<?php 

$uname="admin";
$pwd="admin";

session_start();

if(isset($_SESSION['uname'])){

	echo "<h1><center>Welcome ".$_SESSION['uname']."</h1></center>";

	echo "<center><a href='product.php'>My Biodata</a></center><br>";

	echo "<center><br><a href='logout.php'><input type=button value=logout name=logout></a></center>";
}
else{
	if($_POST['uname']==$uname && $_POST['pwd']==$pwd){

	$_SESSION['uname']=$uname;

	echo "<script>location.href='welcome.php'</script>";
	}
	else{
		echo "<script>alert('username atau password salah')</script>";

		echo "<script>location.href='login.php'</script>";
	}
}

 ?>