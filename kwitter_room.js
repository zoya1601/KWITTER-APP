
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyArkoszu-RgONATOz746yoNpSn0jFhIi80",
      authDomain: "kwitter-9dcc2.firebaseapp.com",
      databaseURL:"https://kwitter-9dcc2-default-rtdb.firebaseio.com/",
      projectId: "kwitter-9dcc2",
      storageBucket: "kwitter-9dcc2.appspot.com",
      messagingSenderId: "881725256095",
      appId: "1:881725256095:web:eaaa7a2135fdb7cf01cdaa",
      measurementId: "G-PRPZVPSHBW"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    u=localStorage.getItem("username");
    document.getElementById("p").innerHTML="Welcome  "+u+"!";
    function a(){
      r=document.getElementById("Y").value;
      firebase.database().ref("/").child(r).update({
            purpose:"added roomname"
      });
      localStorage.setItem("roomname",r);
      window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
console.log("room name is "+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      console.log("Hi");
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}
function s(){
localStorage.removeItem("roomname");
localStorage.removeItem("username");
window.location="index.html";
}
