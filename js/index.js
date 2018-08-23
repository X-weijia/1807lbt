window.onload=function () {
    let banner = document.querySelector(".banner")
    let img = document.querySelectorAll(".imgbox li");
    // console.log(banner,img);
    //自动滚动
    let t = setInterval(move,2000);
    let now = next = 0;
    function move(){
        next++;
        if (next==img.length) {
            next=0;
        }
        img[next].style.left="1226px";
        animate(img[now],{left:-1226});
        animate(img[next],{left:0});
        point[next].style.background="";
        point[now].style.background="#f8efe2;";
        now=next;
    }
    //移入移出
    banner.onmouseenter=function () {
        clearInterval(t);
    }
    banner.onmouseleave=function () {
        t = setInterval(move,2000);
    }
    //左右切换
    let right = document.querySelector(".pull_right");
    let left = document.querySelector(".pull_left");
    // console.log(right, left);
    left.onclick=moveL;
    function moveL() {
        next--;
        if (next<0){
            next=img.length-1;
        }
        img[next].style.left="-1226px";
        animate(img[now],{left:1226});
        animate(img[next],{left:0});
        now=next;
    }
    right.onclick=move;
    //点击小点
    let point = document.querySelectorAll(".point");
    // console.log(point);
    for (let i=0;i<point.length;i++){
        point[i].onclick=function () {
            if(now==i){
                return;
            }else if(now<i){
                img[now].style.left="1226px";
                animate(img[i],{left:-1226});
                animate(img[now],{left:0});
                point[i].style.background="";
                point[now].style.background="#f8efe2;";
            }else {
                img[i].style.left="-1226px";
                animate(img[now],{left:1226});
                animate(img[i],{left:0});
                point[i].style.background="";
                point[now].style.background="#f8efe2;";
            }
            next=now=i;
        }
    }
}