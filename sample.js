let input = document.querySelector("input");
let button = document.querySelector("button");
let times = 0;

let ul = document.querySelector("ul");

let country = "";
let url = "http://universities.hipolabs.com/search?country=";

button.addEventListener("click",() =>{
    country = input.value;
    console.log("The name of the country is "+country);
    getInstitutes(url,country);
})

async function getInstitutes(url,country){
    try{
        if(times != 0) ul.innerHTML = "";
        times++;
        let result = await axios.get(url+country);
        let collegesInformation = result.data;
        let para = document.querySelector("h4");
        para.innerText = "Their are "+collegesInformation.length+" colleges in "+country+" and the names are :";
        
        for(collegeName in collegesInformation){
            let name = document.createElement("li");
            console.log(collegesInformation[collegeName].name);
            name.innerText = collegesInformation[collegeName].name
            ul.appendChild(name);
        }
        console.log(collegesInformation);
    }
    catch(err){
        console.log("error is "+err);
    }
}



