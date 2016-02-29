$("#menu-open").click(function() {
    $(".menu-header").css("top", 0);
    $(this).css("display", "none");
    $("#menu-close").css("display", "block");
});

$("#menu-close").click(function() {
    $(".menu-header").css("top", -59);
    $(this).css("display", "none");
    $("#menu-open").css("display", "block");
});
