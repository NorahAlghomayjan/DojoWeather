var tempreture = document.querySelector("#tempereture");
var heighests = document.querySelectorAll(".highest");
var lowests = document.querySelectorAll(".lowest");
var popUp = document.querySelector(".pop-Up");

tempreture.addEventListener("change",changeTemp);

function removeCookie()
{popUp.remove();}

function changeTemp ()
{
    switch (tempreture.value) 
    {
        case "F" :
            for (i=0;i<heighests.length; i++)
            { 
                heighests[i].innerText = Math.round(parseInt(heighests[i].innerText) * 1.8 + 32);
                lowests[i].innerText = Math.round(parseInt(lowests[i].innerText) * 1.8 + 32);
            };
            break;
        case "C" :
            for (i=0;i<heighests.length; i++)
            { 
                heighests[i].innerText = Math.round((parseInt(heighests[i].innerText) - 32) * 0.5556);
                lowests[i].innerText = Math.round((parseInt(lowests[i].innerText) - 32) * 0.5556)
            };
            break;
    }
}