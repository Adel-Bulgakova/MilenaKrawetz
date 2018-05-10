$(".menu-toggle-icon").click(function(){
    console.log("open");
    $(".sidebar").width("100%");
    // document.getElementById("mySidenav").style.width = "100%";
});

$(".menu-close-icon").click(function(){
    console.log('close');
    $(".sidebar").width("0");
    // document.getElementById("mySidenav").style.width = "0";
});