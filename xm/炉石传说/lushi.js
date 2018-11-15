var news=document.getElementById("news");
var myul=document.getElementById("myul");
var ullis=myul.children;
var myol=document.getElementById("myol");
var ollis=myol.children;
var len=ullis.length;
//自动播放
var timer=null;
var num=0;
 
  function autoplay(){
     timer=setInterval(function(){
    num++;
 if(num>len-1){
     num=0;
 }  
 for(var i=0; i<len;i++){
     ullis[i].className="";
     ollis[i].className="";
 }
 ullis[num].className="cur";
 ollis[num].className="cur";
},1500);
}
autoplay();
  //鼠标移进去
  news.children[0].onmouseenter=function(){
      clearInterval(timer);
  }
  //鼠标移出去
  news.children[0].onmouseleave=function(){
     autoplay();
  }

  //鼠标移上小图换大图
  for(var i=0;i<len;i++){
      //自定义索引值
      ollis[i].index=i;
     //  console.log( ollis[i].index);
     ollis[i].onmouseenter=function(){
      for(var i=0;i<len;i++){
      ullis[i].className="";
     ollis[i].className="";
     }
     ullis[this.index].className="cur";
     ollis[this.index].className="cur";
     num=this.index;
     }
    
  }



  //x选项卡
//   var liaaa=document.getElementsByClassName('lia')

//   for (var i = 0; i < spans.length; i++) {
//     spans[i].onclick = function () {
//     }
// }
//   var Img=document.getElementsByTagName('imgs')


