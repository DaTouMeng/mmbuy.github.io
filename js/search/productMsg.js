$(function () {
    var o = {
        cutString: function () {
            var search = location.search.slice(1);
            var searchArr = search.split("&");
            var obj = {};
            $.each(searchArr, function (index,value) {
                var tempArr = value.split("=");
                obj[tempArr[0]] = tempArr[1];
            });
            return obj;
        }
    }
    var productid = o.cutString().productid;
    console.log(productid);
    var category = decodeURIComponent(o.cutString().category);
    console.log(category);
    $.ajax({
        url:"http://139.199.192.48:9090/api/getproduct",
        data:{
            productid:productid
        },
        success: function (data) {
            console.log(data);
            data.category = category;
            $(".msg_container").html(template("product_msg",data))
        }
    });
    $.ajax({
        url:"http://139.199.192.48:9090/api/getproductcom",
        data:{
            productid:productid
        },
        success: function (data) {
            console.log(data);
            $(".comments_text").html(template("comments",data));
        }
    })
})