<?php

	header("Content-Type:application/json");
	$data = json_decode( file_get_contents('php://input') );
	if($data && $data->email=="sarath" && $data->password=="123456"){
		echo json_encode(array('login'=>true,'id'=>100,'message'=>'User logined '));die();
	}
	echo json_encode(array('login'=>false,'id'=>0,'message'=>'Login failed'));die();
	
