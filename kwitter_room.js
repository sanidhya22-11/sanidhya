
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyAH7ZDg5is77JOu6Hb3XQCS7hmxjiXpTvM",
      authDomain: "kwitter-1233.firebaseapp.com",
      projectId: "kwitter-1233",
      storageBucket: "kwitter-1233.appspot.com",
      messagingSenderId: "151734555893",
      appId: "1:151734555893:web:ba69f8686cfe04e821e1bc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){

}
function addRoom(){

}