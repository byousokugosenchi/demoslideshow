let activeindexImg=0;
let imageArray;

imageArray=document.getElementsByClassName('slides');
imageArray[activeindexImg].style.display='block';



function hienThiSlide(i){
    imageArray[i].style.display='block';

}

function anSlide(k) {
    imageArray[k].style.display='none';
}
function hienThiSlideTruocDo() { 
    anSlide(activeindexImg);


    if(activeindexImg <= 0)  {
        activeindexImg=imageArray.length -1;
    }else {
        activeindexImg -=1;

    }
    hienThiSlide(activeindexImg);

//
}

function hienThiSlideKeTiep() {
    anSlide(activeindexImg);


    if(activeindexImg >=imageArray.length -1) {
        activeindexImg=0;
    }else {
        activeindexImg +=1;

    }
    hienThiSlide(activeindexImg);

}