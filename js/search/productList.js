$(function () {
    var o = {
        cutString: function () {
            var search = location.search.slice(1);
            console.log(search);
            var searchArr = search.split("&");
            var obj = {};
            $.each(searchArr, function (index,value) {
                var tempArr = value.split("=");
                obj[tempArr[0]] = tempArr[1];
            });
            return obj;
        }
    }
    //根据ID获取数据进行页面的渲染
    var categoryid = o.cutString().categoryid;
    var category = decodeURIComponent(o.cutString().category);
    console.log(category);
    console.log(categoryid);
    function ajax(page) {
        $.ajax({
            url:"http://139.199.192.48:9090/api/getproductlist",
            data:{
                categoryid:categoryid,
                pageid:page
            },
            success: function (data) {
                console.log(data);
                console.log(page);
                data.page = page;
                data.category = category;
                data.categoryid = categoryid;
                data.maxPages = Math.ceil(data.totalCount/data.pagesize);
                $(".product_box").html(template("products",data));
            }
        });
    }
    ajax(1);
    //分页功能
    var page = 1;
    //下一页
    $(".product_box").on("click","#nextPage", function () {
        var maxPage = $(this).data("max-page");
        page++;
        console.log(maxPage);
        if(page <= maxPage) {
            ajax(page);
        }else {
            page = maxPage;
            alert("这已经是最后一页了!");
        }
    });
    //上一页
    $(".product_box").on("click","#prePage", function () {
        page--;
        if(page < 1) {
            alert("这已经是第一页了!");
            page = 1;
        }else {
            ajax(page);
        }
    })
});