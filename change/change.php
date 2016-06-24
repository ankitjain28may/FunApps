<?php
$_name="FunApps";
$_per="99%";
$img=imagecreatefrompng("mark.png");
if (isset($_REQUEST["q"])) {
  $_arr=json_decode($_REQUEST["q"]);
  $_name=$_arr->{'name'};
  $_path=substr($_arr->{'id'},0,5);
  $_per=rand(70,95)."%";


// if(isset($q))
// {
// // $json_file = file_get_contents($_POST['hidden1']);
// // convert the string to a json object
// var_dump(json_decode($q));
// }


$clr = imagecolorallocate($img, 0, 0, 0);
$clrr=imagecolorallocate($img, 65, 65, 65);

$font_name= 'OpenSans-SemiBold.ttf';

imagettftext($img, 12, 0, 370, 220, $clr,$font_name, $_name);
imagettftext($img, 12, 0, 240, 244, $clr,$font_name, $_per);

$pa=rand(1000,10000);
$path='upload/'.$_path.'.jpg';
imagejpeg($img,$path);
imagedestroy($img);
}
echo $path;


?>

