// Using axios 

let btn = document.querySelector("#button1");
let btn1 = document.querySelector("#button3")
let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
let url3 = "https://icanhazdadjoke.com/";
let url4 = "http://universities.hipolabs.com/search?name=";

btn.addEventListener("click", async ()=>{
  let fact = await getFacts();
  console.log(fact);
  let p = document.querySelector("#result");
  p.innerText = fact;
});

async function getFacts(){
  try{
    let response = await axios.get(url);
    return response.data.fact;
  }catch (e){
    console.log("error - ", e);
    return "NO fact found";
  }
}

btn.addEventListener("click", async ()=>{
  let link = await getImage();
  console.log(link);
  let img = document.querySelector("#result2");
  img.setAttribute("src", link);
});

// sending headers
async function getImage(){
  try{
    let response = await axios.get(url2);
    return response.data.message;
  }catch (e){
    console.log("error - ", e);
    return "NO Image found";
  }
}

async function getJocks(){
  try{
    const config = {headers: {Accept: "application/json"}};
    let res = await axios.get(url3, config);
    console.log(res.data);
  }catch(err){
    console.log(err);
  }
}

// Updating query strings
btn1.addEventListener("click", async() =>{
  let country = document.querySelector("input").value;
  console.log(country);
  // console.log("button was clicked");
  // getCollages(country)

  let colArr = await getCollages(country);
  show(colArr);
});

function show(colArr){
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of colArr){
    console.log(col.name);

    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

async function getCollages(country){
  try{
    let res = await axios.get(url4 + country);
    return res.data;
  }catch(e){
    console.log("error: ", e);
    return [];
  }
}





