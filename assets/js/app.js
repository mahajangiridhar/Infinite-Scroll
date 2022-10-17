let cl = console.log;

// const main = document.getElementById("main")


const count = 50;
const apiKey = 'onjgeazmS79Oz-VQj85E58hSvzZgOWe9Aepb7eyXyMQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`; 


const templating = (arr)=>{
  arr.forEach(ele => {
    let col4 = document.createElement("div")
    col4.classList.add("col-md-4")
    let div = document.createElement("div");
    div.classList.add("gallary-img")
    anchor = document.createElement("a");
    anchor.setAttribute("href", `${ele.urls.regular}`)
    anchor.setAttribute("target", "_blank")
    let img = document.createElement("img");
    img.setAttribute("src", `${ele.urls.regular}`)
    img.classList.add("img-fluid")

    anchor.appendChild(img);
    div.appendChild(anchor);
    col4.appendChild(div);
    main.appendChild(col4)

  });
}

async function fetchData(){
  try{let response = await fetch(apiUrl)
  let data = await response.json()
  cl(data)
  templating(data)}
  catch{
    cl("error")
  }
}
window.addEventListener("scroll", ()=>{
  let scrolltop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;
  if(scrolltop+clientHeight >= scrollHeight-300){
    fetchData()
  }
})

fetchData()






