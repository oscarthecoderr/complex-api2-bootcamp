document.querySelector("button").addEventListener("click", infoPark);
document.querySelector('ol').style.display = 'non'

function infoPark() {

  let park = document.querySelector(".text").value;

  document.querySelector('ol').style.display = 'block'

  fetch(
    `https://developer.nps.gov/api/v1/parks?q=${park}&api_key=t4NgbVDtfn9QOs80z8UP6PMDSkk5afnqhPRQQnvz`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let name = data.data[0].fullName;
      let info = data.data[0].directionsInfo
      let description = data.data[0].description
       document.querySelector("h2").innerText = name;
       document.querySelector("h3").innerText = info
       document.querySelector('h4').innerText = description
       flic(name);
    });
}

  function flic(parkName) {
   fetch(`https://api.unsplash.com/search/photos/?query=${parkName}&client_id=0fiIzbgYLUuuuzAxDE2hATLVKr9bZDoUMQab5vXv`)
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
       document.querySelector('img').src = data.results[0].urls.small
     });
 }

 //Tyana help me out and explained to me step by step and its very appreciated. //also key broke.
