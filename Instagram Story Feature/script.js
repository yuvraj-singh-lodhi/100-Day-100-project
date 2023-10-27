var arr =[
    {dp:"https://wallpapers-clan.com/wp-content/uploads/2022/09/one-piece-pfp-1.jpg",
    story:"luffy.jpg"},

    {dp:"https://wallpapers-clan.com/wp-content/uploads/2022/09/one-piece-pfp-4.jpg",
    story:"zoro.jpg"},
    
    {dp:"https://wallpapers-clan.com/wp-content/uploads/2022/09/one-piece-pfp-6.jpg",
    story:"sanji2.jpg"},
    
    {dp:"https://wallpapers-clan.com/wp-content/uploads/2022/09/one-piece-pfp-27.jpg",
    story:"nami.jpg"},

    {dp:"https://wallpapers-clan.com/wp-content/uploads/2022/09/one-piece-pfp-9.jpg",
    story:"robin2.jpg"},

    {dp:"https://wallpapers-clan.com/wp-content/uploads/2022/09/one-piece-pfp-10.jpg",
    story:"ussop.jpg"},
]
var story_container = document.querySelector(".story-container")
var clutter = " "
arr.forEach(function(elem,idx){
        clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})
story_container.innerHTML = clutter
story_container.addEventListener("click",function(dets){
    document.querySelector("#full-Screen").style.display = "block"
    document.querySelector("#full-Screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-Screen").style.display = "none"
    },3000)
})

