var istatus = document.querySelector("h5")
var addFriend = document.querySelector("#add")

var flag = 0;

addFriend.addEventListener("click", function(){
    if(flag==0){

        istatus.innerHTML ="Friends"
        istatus.style.color = "green"
        addFriend.innerHTML = "Remove"
        flag =1
    }
    else{
        addFriend.innerHTML="Add Friend"
        istatus.innerHTML="Stranger"
        istatus.style.color="red"
        flag=0
    }
})
