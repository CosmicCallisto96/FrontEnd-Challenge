function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}
function backfire()
{
    $('#cards-flag').show();
    $('#ifilter-cards').show();
    $('#big-box').hide();
}
function newfun(sname)
{ 
    $('#ifilter-cards').hide();
    $('#cards-solo').hide();
    $('#cards-flag').hide();
    $('.box').remove();
    $('#big-box').show();
//sname=sname.trim();
//sname=sname.toLowerCase();
//var space=0;
console.log(sname);
fetchJSONFile(`https://restcountries.eu/rest/v2/alpha/${sname}`, function(name1){//console.log(fullname[0].name);
console.log(name1.name);
showanchorname(name1.name)
   
})
}
function showanchorname(sname)
{ 
    $('#ifilter-cards').hide();
    $('#cards-solo').hide();
    $('#cards-flag').hide();
    $('.box').remove();
    $('#big-box').show();
//sname=sname.trim();
//sname=sname.toLowerCase();
//var space=0;
console.log(sname);
fetchJSONFile(`https://restcountries.eu/rest/v2/name/${sname}?fullText=true`, function(fullname){console.log(fullname[0].name);
fetchJSONFile('https://restcountries.eu/rest/v2/all', function(data){
    var nn;
    var pop;
    var reg;
    var subreg;
    var cap;
    var tld;
    var curr;
    var lang="";
    var bc='<div class="bboxc"><div class="bh">Border Countries:</div>';
    var p;
    for(let i=0;i<data.length;i++)
    {
        if(data[i].name==fullname[0].name)
        {
            p=i;
            nn=data[i].nativeName;
            //console.log(nn);
            pop=data[i].population;
            //console.log(pop);
            reg=data[i].region;
            //console.log(reg);
            subreg=data[i].subregion;
            //console.log(subreg);
            cap=data[i].capital;
            //console.log(cap);
            tld=data[i].topLevelDomain;
            //console.log(tld[0]);
            curr=data[i].currencies;
            //console.log(curr[0].name);
            for(var j=0;j<data[i].languages.length;j++)
            {
                if(j!=data[i].languages.length-1)
                {
            lang=lang+data[i].languages[j].name+",";
                }
                else
                {
                    lang=lang+data[i].languages[j].name;
                }
            //console.log(lang[j]);
            }
            for(var j=0;j<data[i].borders.length;j++)
            {
            bc+=`<a href="javascript:void(0)" name=${data[i].borders[j]} class="info_link" onclick="newfun(this.name)" ><span class="bbox" onclick="newfun(this.name)">`+data[i].borders[j]+`</span></a>`;
            //console.log(bc[j]);
            }
            bc+=`</div>`
            break;
        }
        console.log(data);
    }
    //console.log()
    $('#big-box').append(` <div class="box">
    <div class="row1"><button class="back" id="back" onclick="backfire()"><i class="fal fa-long-arrow-left fa-2x"></i><h1 class="b">Back</h1></button></div>
    <div class="container">
        <div class="row2">
            <div class="col1"><img src=${data[p].flag} alt="" class="bflag" style="width: 36rem; height:25rem; padding:1rem"></div>
            <div class="col2">
                <div class="c2r1">
                <div class="c2c1">
                    <h1 class="cn">${data[p].name}</h1>
                    <p class="nn">Native Name: ${data[p].nativeName}</p>
                    <p class="pop">Population: ${data[p].population}</p>
                    <p class="reg">Region: ${data[p].region}</p>
                    <p class="sr">Sub Region: ${data[p].subregion}</p>
                    <p class="cap">Capital: ${data[p].capital}</p>
                </div>
                <div class="c2c2">
                    <p class="tld">Top level Domain: ${data[p].topLevelDomain[0]}</p>
                    <p class="curr">Currencies: ${data[p].currencies[0].name}</p>
                    <p class="lang">Languages: `+lang+`</p>
                </div>
                </div>
                <div class="c2r2">
                <div class="bc">`+bc+`</div>
                </div>
            </div>
        </div>
    </div>
</div>`);
    //console.log(data);
})})
}
function check_country()
    {
        $('#cards-solo').show();
        var country_name=$("#flag-search").val();
        if(country_name.length==0)
        {
            $('#big-box').hide();
            $('.card-solo-js').remove();   
            $('#cards-flag').show();
            $('#ifilter-cards').show();       
        }
        else
        {
            $('#ifilter-cards').hide();
        $('#cards-flag').hide();
        $('#big-box').hide();
        }
        fetchJSONFile('https://restcountries.eu/rest/v2/all', function(data){
        for(var i=0;i<data.length;i++)
        {
            if((data[i].name.toLowerCase()).includes(country_name.toLowerCase())==true)
            {
              $('.card-solo-js').remove();
                //console.log(data[i]);
                $('#cards-solo').append(`<div class=\"card-solo-js\" style=\"padding-left:80px\"><div class="card1"><div class="card" style="width: 15rem;border-radius:5px; padding:0 rem;box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.05);">
                <a href="javascript:void(0)" name=${data[i].name} class="info_link" onclick="showanchorname(this.name)" ><img class="card-img-top1"style="width: 15rem;border-radius:5px 5px 0px 0px; padding:0rem" src=${data[i].flag} alt="Card image cap">
                <div class="card-body1">
                <h1 class="card-text" style="font-size:20px;font-weight:700;padding:10px 0 10px 30px">` + data[i].name + `</h1>
                <p class="card-text1" style="font-size:16px;font-weight:600;padding:5px 0 5px 30px">Population: ` + data[i].population + `</p>
                <p class="card-text1" style="font-size:16px;font-weight:600;padding:5px 0 5px 30px">Region: ` + data[i].region + `</p>
                <p class="card-text1" style="font-size:16px;font-weight:600;padding:5px 0 5px 30px">Capital: ` + data[i].capital + `</p>
                </div>
                </a>
                </div></div></div>`); } }
    })
}
$(document).ready(function() 
{
$('body').toggleClass('clicked');
    /*$('a').click(function() 
    {
 alert('hello')
 console.log($(this).attr('name'));
});*/

fetchJSONFile('https://restcountries.eu/rest/v2/all', function(data){
    console.log(data);
let output = "<div class=\"card-columns1\" style=\"padding:0px\">";
for (var i = 0; i < data.length; i++) {
if (i % 4 == 0) {
output += `<a href="javascript:void(0)" name=${data[i].name} class="info_link" onclick="showanchorname(this.name)" ><div class="card1"><div class="card" style="height: 10rem; width:15rem;
 border-radius:5px; padding:0 rem;box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.05);">
<img class="card-img-top1"style="width:100%; 
height:100%; 
object-fit:cover; background-size: cover;background-position-y: top; border-radius:5px 5px 0px 0px; padding:0rem" src=${data[i].flag} alt="Card image cap"></a>
<a href="javascript:void(0)" name=${data[i].name} class="info_link" onclick="showanchorname(this.name)" ><div class="card-body1" style="box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.05);border-radius:5px">
<h1 class="card-text" style="font-size:18px;font-weight:700;padding:10px 0 10px 30px">` + data[i].name + `</h1>
<p class="card-text1" style="font-size:14px;font-weight:regular;padding:5px 0 5px 30px">Population: ` + data[i].population + `</p>
<p class="card-text1" style="font-size:14px;font-weight:600;padding:5px 0 10px 30px">Region: ` + data[i].region + `</p>
<p class="card-text1" style="font-size:14px;font-weight:600;padding:5px 0 25px 30px">Capital: ` + data[i].capital + `</p>
</div>
</div></div></a><br>`;
output += "<br>";
} else {
    output += `<a href="javascript:void(0)" name=${data[i].name} class="info_link" onclick="showanchorname(this.name)" ><div class="card1"><div class="card" style="height: 10rem; width:15rem;
    border-radius:5px; padding:0 rem;box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.05);">
   <img class="card-img-top1"style="width:100%; 
   height:100%; 
   object-fit:cover; background-size: cover;background-position-y: top; border-radius:5px 5px 0px 0px; padding:0rem" src=${data[i].flag} alt="Card image cap"></a>
   <a href="javascript:void(0)" name=${data[i].name} class="info_link" onclick="showanchorname(this.name)" ><div class="card-body1" style="box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.05);border-radius:5px">
   <h1 class="card-text" style="font-size:18px;font-weight:700;padding:10px 0 10px 30px">` + data[i].name + `</h1>
   <p class="card-text1" style="font-size:14px;font-weight:regular;padding:5px 0 5px 30px">Population: ` + data[i].population + `</p>
   <p class="card-text1" style="font-size:14px;font-weight:600;padding:5px 0 10px 30px">Region: ` + data[i].region + `</p>
   <p class="card-text1" style="font-size:14px;font-weight:600;padding:5px 0 25px 30px">Capital: ` + data[i].capital + `</p>
   </div>
   </div></div></a>`;
}
}
output += '</div>';
$('#cards-flag').append(output);
})
$('#cfilter').click(function()
{
    // $('.card-columns').remove();
       var regions=$('#cfilter').val();
       console.log(regions);
       if(regions!="Filter By Region")
       {
           $('#big-box').hide();
           $('#cards-flag').hide();
           $('#cards-solo').hide();
           $('.card-columns1').remove();
           $('#ifilter-cards').show();
           fetchJSONFile('https://restcountries.eu/rest/v2/all', function(data){
           console.log(data);
           let output = "<div class=\"card-columns1\" style=\"padding-left:80px\">";
for (var i = 0; i <data.length; i++) 
{if(data[i].region.toLowerCase()==regions.toLowerCase())
    {
        if (i % 4 == 0) {
            output += `<a href="javascript:void(0)" name=${data[i].name} class="info_link" onclick="showanchorname(this.name)" ><div class="card1"><div class="card" style="height: 10rem; width:15rem;
             border-radius:5px; padding:0 rem;box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.05);">
            <img class="card-img-top1"style="width:100%; 
            height:100%; 
            object-fit:cover; background-size: cover;background-position-y: top; border-radius:5px 5px 0px 0px; padding:0rem" src=${data[i].flag} alt="Card image cap"></a>
            <a href="javascript:void(0)" name=${data[i].name} class="info_link" onclick="showanchorname(this.name)" ><div class="card-body1" style="box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.05);border-radius:5px">
            <h1 class="card-text" style="font-size:18px;font-weight:700;padding:10px 0 10px 30px">` + data[i].name + `</h1>
            <p class="card-text1" style="font-size:14px;font-weight:regular;padding:5px 0 5px 30px">Population: ` + data[i].population + `</p>
            <p class="card-text1" style="font-size:14px;font-weight:600;padding:5px 0 10px 30px">Region: ` + data[i].region + `</p>
            <p class="card-text1" style="font-size:14px;font-weight:600;padding:5px 0 25px 30px">Capital: ` + data[i].capital + `</p>
            </div>
            </div></div></a><br>`;
            output += "<br>";
            } else {
                output += `<a href="javascript:void(0)" name=${data[i].name} class="info_link" onclick="showanchorname(this.name)" ><div class="card1"><div class="card" style="height: 10rem; width:15rem;
                border-radius:5px; padding:0 rem;box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.05);">
               <img class="card-img-top1"style="width:100%; 
               height:100%; 
               object-fit:cover; background-size: cover;background-position-y: top; border-radius:5px 5px 0px 0px; padding:0rem" src=${data[i].flag} alt="Card image cap"></a>
               <a href="javascript:void(0)" name=${data[i].name} class="info_link" onclick="showanchorname(this.name)" ><div class="card-body1" style="box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.05);border-radius:5px">
               <h1 class="card-text" style="font-size:18px;font-weight:700;padding:10px 0 10px 30px">` + data[i].name + `</h1>
               <p class="card-text1" style="font-size:14px;font-weight:regular;padding:5px 0 5px 30px">Population: ` + data[i].population + `</p>
               <p class="card-text1" style="font-size:14px;font-weight:600;padding:5px 0 10px 30px">Region: ` + data[i].region + `</p>
               <p class="card-text1" style="font-size:14px;font-weight:600;padding:5px 0 25px 30px">Capital: ` + data[i].capital + `</p>
               </div>
               </div></div></a>`;
            }
            }
            }
            output += '</div>';
   $('#ifilter-cards').append(output);
       })
    }
})
$('#moon').click(function(){
    $('body').toggleClass('clicked');
  });
  $('#flag-search').keyup(function()
  {
      check_country();
  });
});