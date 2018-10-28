$.get("/api/notices", function(data, status){
$("#noticeBox").mirandajs(data);
$("#noticeBox").hide();
});

$.get("/api/members/final", function(data, status){
$("#finalYear").mirandajs(data);
});

$.get("/api/members/prefinal", function(data, status){
$("#prefinalYear").mirandajs(data);
});

$("#notificationBtn").click(function () {
        $("#noticeBox").toggle();
});
$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#noticeBox').hide();
     }
 });
