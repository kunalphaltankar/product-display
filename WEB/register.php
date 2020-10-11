<?php
    include_once("database.php");
    $title = $_POST['title'];
    $description = $_POST['description'];

    $name = uniqid()."_".$_FILES['image']['name'];
    $target_dir = "images/";
    $target_file = $target_dir . basename($_FILES["image"]["name"]);

    // print_r($title.",");
    // print_r($description.",");
    // print_r($name.",");

    // Select file type
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

    // Valid file extensions
    $extensions_arr = array("jpg","jpeg","png","gif");
    
    // Check extension 
    if( in_array($imageFileType, $extensions_arr) ){
        // Insert record
        $query = "insert into product(title, description, image) values ('{$title}','{$description}','{$name}')";
        mysqli_query($con, $query) or die("Error in insert");

        // Upload file
        move_uploaded_file($_FILES['image']['tmp_name'], $target_dir.$name) or die("Error in upload");

        $res = array('title' => $title, 'description' => $description, 'image' => $name );
        echo json_encode($res);
    }
?>