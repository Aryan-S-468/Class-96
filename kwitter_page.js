// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAEGOS6NSSSBGRDJRZiE5HrGb1_4htiqks",
      authDomain: "class-93-1a311.firebaseapp.com",
      databaseURL: "https://class-93-1a311.firebaseio.com",
      projectId: "class-93-1a311",
      storageBucket: "class-93-1a311.appspot.com",
      messagingSenderId: "276581751742",
      appId: "1:276581751742:web:e8a11c694d50def40eb7ef"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//YOUR FIREBASE LINKS

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
//Start code

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}
//End code
}
});
});
}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}