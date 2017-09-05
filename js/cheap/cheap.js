/**
 * Created by hsyoml on 2017/7/5.
 */
$(function () {
    var goTop = $('.goTop');
    //节流阀
    $(window).scroll(function () {
        $(window).scrollTop() > 500 ? goTop.show() : goTop.hide(); //返回顶部
    });
        //默认加载第一个的样式
        $.ajax({
            type:"get",
            url:"http://139.199.192.48:9090/api/getbaicaijiatitle",
            success:function (data) {
                $(".sitenav").html(template("sitenavTmp",data));
                $("header h1").html($(".sitenav li a").eq(0).html());
                var sili =  $(".sitenav li");
                sili.eq(0).addClass("active");
                var id = sili.eq(0).children().attr("data-titleId");
                getAjax(id);
            }
        });
        //点击事件
        $(".sitenav").on('click','a',function () {
            if($(this).parent().hasClass("active")) return false;
            var info= $(this).text();
            $("header h1").html(info);
            var list = $('.sitenav li');
            var index=''
            for(var i=0;i<list.length;i++){
                index=i;
                if($(list[i]).hasClass('active')){
                    $(list[i]).removeClass("active")
                }
            };
            $(this).parent().addClass('active');
            var id = ($(this).attr("data-titleId"));
            getAjax(id);
        })
})
function getAjax(id) {
    $.ajax({
        type:"get",
        url:"http://139.199.192.48:9090/api/getbaicaijiaproduct",
        data:{titleid: id},
        success:function (info) {
            $(".hspane").html(template("tmpHs",info))
        }
    })
}