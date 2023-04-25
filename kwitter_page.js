//YOUR FIREBASE LINKS

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

    u1=localStorage.getItem("username");
r1=localStorage.getItem("roomname");

function h(){
      g=document.getElementById("input1").value;
      firebase.database().ref(r1).push({
            name:u1,
            message:g,
            like:0
      });
      document.getElementById("input1").value ="";
}

function getData() { firebase.database().ref("/"+r1).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
n1=message_data['name'];
m1=message_data['message'];
l1=message_data['like'];
n1tag="<h4>"+n1+"<img src='tick.png' class='user_tick'></h4>";
m1tag="<h4 class='message_h4'>"+m1+"</h4>";
l1tag="<button class='btn btn-warning' id="+firebase_message_id+" value="+l1+" onclick='buttonl(this.id)'>";
stag="<span class='glyphicon glyphicon-thumbs-up'>like: "+l1+"</span> </button> <hr>";
row=n1tag+m1tag+l1tag+stag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function buttonl(ms_id){
console.log(ms_id);
button_id=ms_id;
likes=document.getElementById(button_id).value;
updatedlikes=Number(likes)+1;
console.log(updatedlikes);
firebase.database().ref(r1).child(ms_id).update({
      like:updatedlikes
});
}

function w(){
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location="index.html";
      }
      
