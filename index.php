
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
       <!--  <li><a id="option1" href=""  onclick="checkLoginState()">
            Login</a></li>
            <fb:login-button scope="public_profile,email" onclick="checkLoginState()">
            </fb:login-button></a>
        <li> onclick="checkLoginState()">Login</a></li>
        <li><a id="option2" href="" onclick="FB.logout();">Logout</a></li><fb:login-button onlogin="logout();">
            </fb:login-button> -->
            <div class="fb-login-button" data-max-rows="1" data-size="large" data-show-faces="false" data-auto-logout-link="true" onlogin="checkLoginState();" ></div>
      </ul>
    </div>

    <div class="center" id="center">
      <h2>What percentage do you get in Exams?</h2>
      <hr>
     
      <img id="image" src="FunApps.jpg">

      <br>
      <h3>Get Your Own FunApp</h3>
     
      <a id="button" href="#share" onclick="share()">Login Through Facebook</a>
      
      <p id="txt"></p>
      <br>
      <br>
      <hr>
    
    </div>

  <div class="footer">
    <p>&copy; Made With Love By <a href="http://www.facebook.com/jain.ankit28" >FunApps</a></p>

  </div>


   
  
  </body>

</html>
