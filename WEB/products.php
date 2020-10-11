<?php
	include_once("database.php");
	
	$query = "select * from product";
	$result = mysqli_query($con, $query) or die("Error in SELECT");
    // print_r($result);

	$rows = array();

    if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			array_push($rows, $row);
		}
      
        // print_r($rows);
        echo json_encode($rows);
    }else{
		echo "0 results";
	}
?>