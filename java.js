const LoadData = () => {
    fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        .then(response => response.json())
        .then(data => displayData(data))

}
const displayData = (data) => {
    const phonelist = data.data
    const main = document.getElementById("main");
    for (const phone of phonelist) {
        const div = document.createElement("div")
        
        div.className="col-lg-4"
        div.innerHTML = `
        <div align="center" >
            <img  height="300" width="250" src="${phone.image}">
          <div class="card-body">
           <h4 class="card-title">${phone.phone_name}</h4>
            <h5 class="card-text">Brand: ${phone.brand}</h5>
            <button onclick ="Details('${phone.slug}')" class="btn btn-info">  Details </button>
          </div>
        </div>

      `
        main.appendChild(div)
        //div.innerHTML = '';
   //console.log(phone)
    }
}
const Details = (slug) => {
    
    const url = ` https://openapi.programming-hero.com/api/phone/${slug}`;
    //console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data=> displayDetail(data.data))
    
}
const displayDetail = mainfeature => {
    //console.log(mainfeature);
    const detailsDiv = document.getElementById('details');
    detailsDiv.innerHTML = `
        <h4 align="center">  ${mainfeature.releaseDate}</h4>

          <p align="center"> Mainfeatures:<br>          
          chipSet: ${mainfeature.mainFeatures.chipSet} <br>
          Storage: ${mainfeature.mainFeatures.storage} <br>
           Display: ${mainfeature.mainFeatures.displaySize}<br>
           Memory: ${mainfeature.mainFeatures.memory}<br>
              GPS: ${mainfeature.others.GPS}<br>
             WLAN: ${mainfeature.others.WLAN}
       </P>

`
}
const searchbutton = () => {
    const input = document.getElementById("svalue");
    const error = document.getElementById("error");
    const inputdata = input.value;
    input.value = '';
    result.innerHTML = "";
    details.innerHTML = "";
    //console.log(inputdata)
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputdata}`;
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => searchOutput(data))
}
const searchOutput = data => {
     
    const phonelist = data.data
    const result = document.getElementById("result");
    for (const phone of phonelist) {
        const div = document.createElement("div")

        div.className = "col-lg-4"
        div.innerHTML = `
        <div align="center" >
            <img  height="300" width="250" src="${phone.image}">
          <div class="card-body">
           <h4 class="card-title">${phone.phone_name}</h4>
            <h5 class="card-text">Brand: ${phone.brand}</h5>
            <button onclick ="Details('${phone.slug}')" class="btn btn-info">  Details </button>
          </div>
        </div>

      `
        result.appendChild(div)
        //div.innerHTML = "";
        //console.log(result)
    }
    
}