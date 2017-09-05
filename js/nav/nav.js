$(function () {
    window.onload=function () {
        $.ajax({
            type:"get",
            url:"http://139.199.192.48:9090/api/getsitenav",
            success:function (data) {
                $("#navList").html(template("navListTmp",data));
            }
        })
    }
})