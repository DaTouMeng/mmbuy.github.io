
$(function () {
    window.onload = function () {
        function GetRequest() {
            var url = location.search; //获取url中"?"符后的字串
            var theRequest = new Object();
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                strs = str.split("&");
                for(var i = 0; i < strs.length; i ++) {
                    theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
                }
            }
            return theRequest;
        }
        var Request = new Object();
        Request = GetRequest();
        var id = Request['id'];
        //得到主页面传递过来的id
       console.log(id);
// 十大品牌
        $.ajax({
            type:"get",
            url:"http://139.199.192.48:9090/api/getbrand",
            data:{
                brandtitleid: id
            },
            success:function (data) {

                $("#hotLine").html(template("innerLine",data));
            }
        });
        //最佳销售量
        // 需要参数    brandtitleid：品牌标题id  (Number

        $.ajax({
            type:"get",
            url:"http://139.199.192.48:9090/api/getbrandproductlist",
            data:{
                brandtitleid: id
            },
            success:function (data) {
                $("#sales").html(template("salesTemp",data));
                //获取商品的id
               var pro = $('#sales ul li a').attr('data-id');
                console.log( pro);

                $.ajax({
                    type:"get",
                    url:"http://139.199.192.48:9090/api/getproductcom",
                    data:{
                        productid : pro
                    },
                    success:function (data) {
                        console.log("评论")
                        $("#comment").html(template("commentTemp",data));
                    }
                })
            }
        });
//评论;



    }
});