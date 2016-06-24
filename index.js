 
function statusChangeCallback(response) {

  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    testAPI();
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    //document.getElementById('status').innerHTML = 'Please log ' +'into this app.';
  } else {
    document.getElementById("image").src = "FunApps.jpg";
    document.getElementById("button").innerHTML="Login With Facebook";
    // document.getElementById("option2").style="display:none";
    // document.getElementById("option1").style="display:block";
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    //document.getElementById('status').innerHTML = 'Please log ' +'into Facebook.';
  }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : 'Facebook app id',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use graph api version 2.5
  });

 

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

function logout()
{
  FB.logout(function(response) {
    // Person is now logged out
    console.log("out");
    document.getElementById("image").src = "FunApps.jpg";
    document.getElementById("button").innerHTML="Login With Facebook";
    document.getElementById("option2").style="display:none";
    document.getElementById("option1").style="display:block";
  });

}

// Load the SDK asynchronously
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/en_US/sdk.js";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.6&appId=1719516855004739";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
var id;
var pic;
var res;
function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    //Ajax to send data
    var name=response.name;
    var arr=JSON.stringify(response);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
         res=xmlhttp.responseText;
        if (res!=null) {
          document.getElementById("image").src = res;
          document.getElementById("button").innerHTML="Post On Facebook";
          // document.getElementById("option1").style="display:none";
          // document.getElementById("option2").style="display:block";
        };
      }
    };
    xmlhttp.open("GET", "change.php?q=" + arr, true);
    xmlhttp.send(); 
  });
}
  

//  var body = 'Reading JS SDK documentation';
// FB.api('/me/feed', 'post', { message: body }, function(response) {
//   if (!response || response.error) {
//     alert('Error occured');
//   } else {
//     alert('Post ID: ' + response.id);
//   }
// });

// Post on fb
// FB.login(function(){
//   // Note: The call will only work if you accept the permission request
//   FB.api('/me/feed', 'post', {message: 'Hello, world!'});
// }, {scope: 'publish_actions'});



// Share on facebook
function share() {
  // var wallPost = {
  //   message: "Test to post a photo",
  //   picture: 'https://localhost/funapps/'+res
  // };
  // FB.api('/me/feed', 'post', wallPost , function(response) {
  //   if (!response || response.error) {
  //     alert('Failure! ' + response.status + ' You may logout once and try again');
  //   } else {
  //     alert('Success! Post ID: ' + response);
  //   }
  // });


  FB.ui(
    {
      method: 'feed',
      link: 'http://funapps.esy.es/',
      picture: 'funapps.esy.es/'+res,
      caption: 'Get Your Own Result',
    },
    function(response) {
      if (response && response.post_id) {
        alert('Succeeded to post');
      }
      else {
        alert('Failed to post');
      }
    }
  );


  // FB.ui(
  // {
  //   method: 'share',
  //   href: 'https://localhost/funapps/'+res,
  // }, function(response){});
}