import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity");

});

/* Population - bigger than 500.000 */
document.querySelector("#populationBigger").addEventListener("click", () => {

   const bt500 = data.filter(city => city.population > 500000);
   createTableElements(bt500,"allcities");

});
// Land Area Button

document.querySelector("#landAreaLess").addEventListener("click",() => {
   const la1000 = data.filter(city => city.landArea <= 1000);
   createTableElements(la1000,"allcities");

});

// Population Less Than 100 000 

document.querySelector("#isPopulationLess").addEventListener("click", () => {
    const lt100000 = data.some(city => city.population <=100000);
    if(lt100000) {
        alert("YES");
    }else {
        alert("NO");
    }
});

// 100 den büyük olan

document.querySelector("#isLandBigger").addEventListener("click", () => {
    const big100 = data.every(city =>city.landArea>100);
    if(big100) {
        alert("YES");
    }else {
        alert("NO");
    }
});

//Select City içine şehirleri ekleme
const cityName=data.map(cityName=>cityName.name);
cityName.forEach((element)=>{
  const citySlct=document.querySelector(".custom-select");
  const cityCrt=document.createElement("option");
  cityCrt.setAttribute("id","select-city");
  cityCrt.setAttribute("value",element);
  cityCrt.textContent=element;
  citySlct.appendChild(cityCrt);

});

//şehirleri bulma
document.querySelector(".custom-select").addEventListener("change",(e)=>{
  const slctCity=data.filter(cities=>e.target.value===cities.name);
  createTableElements(slctCity,"singlecity");
})