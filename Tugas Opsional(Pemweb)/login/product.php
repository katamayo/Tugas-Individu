<?php 

	session_start();

	if(isset($_SESSION['uname'])){

		echo "<center><h2>Selamat Datang Bossssss</h2></center>";
		echo "<center>Nama : Martha Yogi Yuda Rifendy</center>";
		echo "<center>NIM : 18051204016</center>";
		echo "<center>Prodi : S1 Teknik Informatika</center>";

		echo "<center><br><a href='welcome.php'><input type=button name=back value=back></a></center>";
	}
	else{
		echo "<script>location.href='login.php'</script>";
	}

 ?>