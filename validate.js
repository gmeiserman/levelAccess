function validate(){
 var username = document.getElementById("username").value;
 var password = document.getElementById("password").value;
 if ( username == "level" && password == "Access123"){
  alert ("Login successfully");
  window.location = "loginSuccess.html"; // Redirecting to other page.
  return false;
 }
}