ifUserIsLoggedIn(function() {
  //Update the user data
  updateUserData();

  loadUsers(function(users){
    var usersList="";

    for(var uid in users){
      var user= users[uid];

        if(window.currentUser.id != uid){ //if user is not current user only then add it
            usersList += renderUser(user);
        }


    }

    getElement("members").innerHTML= usersList;
  });

      onClickMultiple("member",function(element){
            var chat_id= element.id;


            loadMessages(chat_id, function(messages){
              var messagesList="";

              for(var uid in messages){
                var message= messages[uid];
                messagesList += renderMessage(message);
              }

              getElement("messages").innerHTML= messagesList;
            });

            getElement("chat_id").value = chat_id;

      });

          click("send-button", function(){
              var text = getElement("message-text").value;
              var chat_id=getElement("chat_id").value;

              sendMessage(chat_id, text);

      });

});
