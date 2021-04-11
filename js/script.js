
function CovidData()
{
    event.preventDefault();

    var Country=document.getElementById("countryname").value;
    var StartDate=document.getElementById("startdate").value;
    var EndDate=document.getElementById("enddate").value;

    
    var confirmed=document.getElementById("confirmed");
    var active=document.getElementById("active");
    var deaths=document.getElementById("deaths");

    
    console.log(StartDate);

    if(Country=='' || StartDate=='' || EndDate=='')
       alert("Fill the Required Fields");

    else
    
    {
        var url="https://api.covid19api.com/country/"+Country+"?from="+StartDate+"T00:00:00Z&to="+EndDate+"T00:00:00Z";

            fetch(url)
           .then((res) => res.json())
           .then((res) => {
            console.log(res);
            var length=res.length;
            var index=length-1;

            var a=res[index].Confirmed;
            var b=res[index].Active;
            var c=res[index].Deaths;

              confirmed.innerHTML=a;
              active.innerHTML=b;
              deaths.innerHTML=c;

              document.getElementById("res").style.display="block";
            
        })
       }
}