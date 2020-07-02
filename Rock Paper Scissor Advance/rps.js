var arr=["scissor","spock","paper","lizard","rock"];
var imgs=["images/icon-scissors.svg","images/icon-spock.svg","images/icon-paper.svg","images/icon-lizard.svg","images/icon-rock.svg"];
var color=["hsl(39, 89%, 49%),hsl(40, 84%, 53%)","hsl(189, 59%, 53%),hsl(189, 58%, 57%)","hsl(230, 89%, 62%),hsl(230, 89%, 65%)","hsl(261, 73%, 60%),hsl(261, 72%, 63%)","hsl(349, 71%, 52%) ,hsl(349, 70%, 56%)"];
var score=0;
function back()
{
  $('.game').remove();
  $('#rstick').hide();
  $('.rps-icons').show();
  $('.rules').show();

}
function result(nameNo,ans,con)
{
  $('.rps-icons').hide();
  $('.rules').hide();
  $('#rstick').show();
  $('#result').append(`<div class="game">
  <div class="select">
      <div class="yp">YOU PICKED</div>
      <div class="hp">THE HOUSE PICKED</div></div>
      <div class="select-icon">
         <div class="scissors">
             <button class="sci" style="background-image:radial-gradient(${color[nameNo]});">
                 <div class="wbox">
                 <img src=${imgs[nameNo]} alt="">
             </div>
             </button>
         </div>
         <div class="scissorr">
             <button class="sci">
                 <div class="wbox">
                 <img src="" alt="">
             </div>
             </button>
         </div>
      </div>  
 </div>`);
 $('#rstick').append(`<div class="rules" style="margin-top: 200px;"><button id="rclick" onclick="pop()">RULES</button></div>`);
  setTimeout(function(){ 
    $('.game').remove();
    $('#result').append(`<div class="game">
    <div class="select">
        <div class="yp">YOU PICKED</div>
        <div class="hp">THE HOUSE PICKED</div></div>
        <div class="select-icon">
           <div class="scissors" style="padding-right:40px">
               <button class="sci" style="background-image:radial-gradient(${color[nameNo]});">
                   <div class="wbox">
                   <img src=${imgs[nameNo]} alt="">
               </div>
               </button>
           </div>
           <div class="scissors" style="padding-left:40px">
               <button class="sci" style="background-image:radial-gradient(${color[ans]});">
                   <div class="wbox">
                   <img src=${imgs[ans]} alt="">
               </div>
               </button>
           </div>
        </div>  
   </div>`);
   setTimeout(function()
   {
    $('.game').remove();
    if(con=="win")
    {
      score++;
      $('.rem').remove();
      $('#sc-num').append(`<div class="rem">`+score+`</div>`);
    $('#result').append(`<div class="game">
    <div class="select">
        <div class="yp" style="padding-right:400px">YOU PICKED</div>
        <div class="hp">THE HOUSE PICKED</div></div>
        <div class="select-icon">
           <div class="scissors" style="margin-right:40px;z-index:-1;position:relative;border-radius:50%;     box-shadow: 2px 5px 3px #000, 0 0 0 28px #2b3a59, 0 0 0 56px #263554, 0 0 0 80px #202f4e;">
               <button class="sci" style="background-image:radial-gradient(${color[nameNo]});">
                   <div class="wbox">
                   <img src=${imgs[nameNo]} alt="">
               </div>
               </button>
           </div>
           <div class="con-box style="display:flex;justify-content:center;">
           <div class="con-title-box" style="padding-top:200px">
           <h1 style="color:white;font-size:45px;position absolute;z-index:100">YOU WIN</h1></div>
           <div class="play-box" style="padding-top:10px">
           <button style="background-color:white;border:none; width:180px;height:30px;border-radius:6px;color:hsl(229, 64%, 46%);font-style:'Barlow Semi Condensed';font-weight:bold;" onclick="back()">PLAY AGAIN</button></div></div>
           <div class="scissors" style="padding-left:40px">
               <button class="sci" style="background-image:radial-gradient(${color[ans]});">
                   <div class="wbox">
                   <img src=${imgs[ans]} alt="">
               </div>
               </button>
           </div>
        </div>  
   </div>`);
    }
    else{
      score--;
      $('.rem').remove();
      $('#sc-num').append(`<div class="rem">`+score+`</div>`);
      $('#result').append(`<div class="game">
    <div class="select">
        <div class="yp" style="padding-right:400px">YOU PICKED</div>
        <div class="hp">THE HOUSE PICKED</div></div>
        <div class="select-icon">
           <div class="scissors" style="margin-right:40px;">
               <button class="sci" style="background-image:radial-gradient(${color[nameNo]});">
                   <div class="wbox">
                   <img src=${imgs[nameNo]} alt="">
               </div>
               </button>
           </div>
           <div class="con-box style="display:flex;justify-content:center;">
           <div class="con-title-box" style="padding-top:200px">
           <h1 style="color:white;font-size:45px;position absolute;z-index:100">YOU LOSE</h1></div>
           <div class="play-box" style="padding-top:10px">
           <button style="background-color:white;border:none; width:180px;height:30px;border-radius:6px;color:hsl(229, 64%, 46%);font-style:'Barlow Semi Condensed';font-weight:bold;" onclick="back()">PLAY AGAIN</button></div></div>
           <div class="scissors" style="margin-left:40px;border-radius:50%;z-index:-1;position:relative;     box-shadow: 2px 5px 3px #000, 0 0 0 28px #2b3a59, 0 0 0 56px #263554, 0 0 0 80px #202f4e;">
               <button class="sci" style="background-image:radial-gradient(${color[ans]});">
                   <div class="wbox">
                   <img src=${imgs[ans]} alt="">
               </div>
               </button>
           </div>
        </div>  
   </div>`);
    }
  },1000);
   }, 1000);
  
  //console.log(name,cname,con);
}

function show(name)
{
  var ans=Math.floor(Math.random()*5);
console.log(ans);
  while(name==arr[ans])
  {
     ans=Math.floor(Math.random()*5);
  }
  
console.log(ans);
  if(name=="scissor" && arr[ans]!="spock" && arr[ans]!="rock")
  {
    result(0,ans,"win");
  }
  else if(name=="spock" && arr[ans]!="paper" && arr[ans]!="lizard")
  {
    result(1,ans,"win");
  }
  else if(name=="paper" && arr[ans]!="scissor" && arr[ans]!="lizard")
  {
    result(2,ans,"win");
  }
  else if(name=="lizard" && arr[ans]!="scissor" && arr[ans]!="rock")
  {
    result(3,ans,"win");
  }
  else if(name=="rock" && arr[ans]!="paper" && arr[ans]!="spock")
  {
    result(4,ans,"win");
  }
  else
  {
    for(var i=0;i<5;i++)
    {
      if(arr[i]==name)
      {
        result(i,ans,"lose");
        break;
      }
    }
    
  }
  console.log(name,arr[ans]);
}

var modal = document.getElementById("pop");
var btn = document.getElementById("rclick");
var span = document.getElementsByClassName("cross")[0];
function pop()
{
  modal.style.display = "block";
}
function cross()
{
    modal.style.display = "none";
}
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$(document).ready(function(){
});