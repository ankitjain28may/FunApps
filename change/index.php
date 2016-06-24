
<!DOCTYPE html>
<html>
  <head>
    <title>FunApps</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link href='https://fonts.googleapis.com/css?family=Sigmar+One' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="index.js"></script>
    
  </head>


  <body>
    
    <div class="header" id="header">
      <a class="brand" href="">Fun Apps</a>
    
      <ul class="left">
        <li><a id="option1" href="" ><fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
            </fb:login-button></a></li>
        <!-- <li> onclick="checkLoginState()">Login</a></li> -->
        <li><a id="option2" href="" onclick="logout();">Logout</a></li><!-- <fb:login-button onlogin="logout();">
            </fb:login-button> -->
      </ul>
    </div>

    <div class="center" id="center">
      <h2>What percentage do you get in Exams?</h2>
      <hr>
     
      <img id="image" src="FunApps.jpg">


      <br>
      <h3>Get Your Own FunApp</h3>
     
      <a id="button" onclick="share()" value="">Login Through Facebook</a>
  
   <!--    <button type="submit" id="postt" onlogin="checkLoginState()">Post On Facebook</button> -->
      
      <p id="txt"></p>
      <br>
      <br>
      <hr>
    
    </div>

   
  
  </body>

</html>
