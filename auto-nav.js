var noo = false ;
var cata = document.getElementById('catalogue') ;
var catabtn = document.getElementById('cata-btn') ;
function turned(){
    if(noo){
        cata.style.display = "none";
        catabtn.style.backgroundColor = " whitesmoke" ;
    }else {
        cata.style.display = "block";
        catabtn.style.backgroundColor = " #EC2D7A" ;
    }
    noo = !noo ;
    
}