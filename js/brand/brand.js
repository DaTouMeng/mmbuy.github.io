$(function () {
    window.onload=function () {
        $.ajax({
            type:"get",
            url:"http://139.199.192.48:9090/api/getbrandtitle",
            success:function (data) {
                $("#rankLine").html(template("hotTemp",data));
            }
        });
    }
});
