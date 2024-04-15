var arr = [
  { dp: "https://images.unsplash.com/photo-1533488069324-f9265c15d37f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2lnbWElMjBtYWxlfGVufDB8MXwwfHx8MA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1663036880678-62ae2e87c4c1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, { dp: "https://images.unsplash.com/photo-1621347311229-fd6e0b5a75e8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1621604474789-055748a2b13b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJvZHlidWlsZGVyfGVufDB8MXwwfHx8MA%3D%3D" }, { dp: "https://plus.unsplash.com/premium_photo-1672857822411-ad82b8180078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfDF8MHx8fDA%3D", story: "https://plus.unsplash.com/premium_photo-1677553953986-a78e31a192f8?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, { dp: "https://images.unsplash.com/photo-1544168190-79c17527004f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFRlYWNoZXJzfGVufDB8MXwwfHx8MA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1674343963928-d67007d2ae74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2Vyc3xlbnwwfDF8MHx8fDA%3D" }, { dp: "https://images.unsplash.com/photo-1523278669709-c05da80b6a65?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhcmQlMjBtYW58ZW58MHx8MHx8fDA%3D", story: "https://images.unsplash.com/photo-1489913590284-9269438bb411?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhcmQlMjBtYW58ZW58MHx8MHx8fDA%3D" }
]

// const storysection = document.querySelector("#stories");

// var clutter=""
//  arr.forEach(function(ele,index) {
//     let allDp=` <div class="story">
//     <img id="${index}" src="${ele.dp}" alt="">
// </div>`;
//     clutter+=allDp;
//  });

//  storysection.innerHTML = clutter;

//  storysection.addEventListener("click", function(e){
//      document.querySelector("#fullscreen").style.display = "block";
//    document.querySelector("#fullscreen").style.backgroundImage=`url(${arr[e.target.id].story})`

//    setTimeout(function(){
//     document.querySelector("#fullscreen").style.display = "none";
//  },3000);

// });


const storysection = document.querySelector("#stories");

var clutter = "";
arr.forEach(function (ele, index) {
  let allDp = `<div class="story" id="${index}">
                    <img src="${ele.dp}" alt="">
                </div>`;
  clutter += allDp;
});

storysection.innerHTML = clutter;

let clickedStory="";
storysection.addEventListener("click", function (e) {
 clickedStory = e.target.closest('.story');

  if (clickedStory) {
    document.querySelector("#fullscreen").style.display = "block";
    document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[clickedStory.id].story})`;

    // if (document.querySelector("#fullscreen").style.backgroundImage === `url(${arr[clickedStory.id].story})`) 
    // {
    //   document.querySelector("#fullscreen").style.backgroundImage =`url(${arr[clickedStory.id].story})`
    // }
    
    if(document.querySelector("#fullscreen").style.display != "none"){
      document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[clickedStory.id].story})`;
    }

    // Change border to "3px solid white" for the clicked story after 3 seconds
    setTimeout(function () {
      clickedStory.style.border = "3px solid white";
    }, 3000);

    // Hide fullscreen after 3 seconds
    setTimeout(function () {
      document.querySelector("#fullscreen").style.display = "none";
    }, 3000);
  }
});


// let pauseStory = document.querySelector("#fullscreen");

// pauseStory.addEventListener("click", () => {

//   if (pauseStory == story) {
//     pauseStory = `url(${arr[clickedStory.id].story})`;
//   }

// })





