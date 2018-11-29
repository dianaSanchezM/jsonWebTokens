/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var SignUpControllerModule = (function () {
    var doRegister = function(){
        var name = document.getElementById("name").value;
        var passwd = document.getElementById("passwd").value;
        var user = {
            "username": name,
            "password": passwd
        };
        console.log(user);
        var callback = {
            onSuccess: function(){
                alert("user created");
            },
            onFailed: function(exception){
                console.log(exception);
                alert("There is a problem with our servers. We apologize for the inconvince, please try again later"); 
            }
        };
        RestControllerModule.postUser(user,callback);
    };
    
    return{
        doRegister: doRegister
    }
})();

