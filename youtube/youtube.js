var key = "AIzaSyAhRdcFrIY9YY4AQrDbkOiQAAEK3-QoOHw"

// link = https://youtube.googleapis.com/youtube/v3/search?key=[YOUR_API_KEY] 

async function run(){
 
    try{
        let input = document.querySelector("#input").value
        let datafrom = await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${key}&type=video&q=${input}&maxResults=40&part=snippet`);
        let dataget = await datafrom.json();
        let videodata = dataget.items
        append(videodata)
        console.log(dataget)
    }catch(err){
        console.log(err)
    }
}

const append = (videos) => {
      document.querySelector("#condub").innerHTML = "";
    // let {id} = videos;
    document.querySelector("#container").innerHTML = "";
    // console.log(videos)
    videos.forEach((videos)=>{
        let {id:{videoId}} = videos;
        let div = document.createElement("div")
        div.id = "videobox";
        let {snippet:{description}} = videos;
        // let title = document.createElement("p").innerHTML = channeltitle;
        
        let des = document.createElement("p").innerHTML = description;
        des.id = "des"
        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.setAttribute = ("allowfullscreen",true)
        div.append(iframe,des);
    // console.log(videoId)
        document.querySelector("#container").append(div)
    // console.log(div)

    })
}




// -------------------------------------------------


async function start(){
  
    try{
        
        let datafrom1 = await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${key}&type=video&maxResults=40&part=snippet`);
        let dataget1 = await datafrom1.json();
        let videodata1 = dataget1.items
        console.log(dataget1)
        append2(videodata1)
        
    }catch(err){
        console.log(err)
    }
}
start()
const append2 = (videos1) => {

    // let {id} = videos;
   
    // console.log(videos)
    videos1.forEach((videos1)=>{
        let {id:{videoId}} = videos1;
        let div1 = document.createElement("div")
        div1.id = "videobox";
        let {snippet:{title}} = videos1;
        let p1 = document.createElement("p")
        p1.innerHTML = title;
        let iframe1 = document.createElement("iframe");
        iframe1.src = `https://www.youtube.com/embed/${videoId}`;
        iframe1.setAttribute = ("allowfullscreen",true)
        div1.append(iframe1,p1);
    // console.log(videoId)
        document.querySelector("#condub").append(div1)
    // console.log(div)

    })
}

