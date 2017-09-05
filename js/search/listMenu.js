$(function () {
    //页面渲染
    //发送请求渲染分类大标题
    $.ajax({
        url:"http://139.199.192.48:9090/api/getcategorytitle",
        success: function (data) {
            console.log(data);
            $(".listMenuBox").html(template("listItem",data));
            //大标题渲染成功,根据大标题的id渲染大标题下的小标题
            var titleIdArr = [];
            $.each(data.result, function (index,value) {
                titleIdArr.push(value.titleId);
            });
            for(var i = 0; i < titleIdArr.length; i++) {
                (function (id) {
                    $.ajax({
                        url:"http://139.199.192.48:9090/api/getcategory",
                        data:{
                            titleid:id
                        },
                        success: function (data) {
                            console.log(data);
                            $(".ul"+id).html(template("listItem_list",data));
                        }
                    });
                })(titleIdArr[i])
            }
        }
    });
});