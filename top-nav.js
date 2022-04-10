var open = false;
$('#nav-btn').click(function(){
    $(this).css("background-color",open?'#222':'#EE4866');
    var navBar = $('.nav-bar');
    var height = navBar.height() + navBar.height();
    $('#header').animate({
        height: open ? 50 : height
    });
    open = !open;
});