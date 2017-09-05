/**
 * Created by lenovo on 2017/7/4.
 */

$('#sec1').on('click',function(){
    $.ajax({
        url:'http://139.199.192.48:9090/api/getgsshop',
        type:'get',
        dataType: "json",
        success:function(res){
            console.log(res);
            var htmlStr = template('content1',res);
            $('#Section1').html(htmlStr)
        }
    })
    $('#Section1').toggleClass("active");
})
$('#sec2').on('click',function(){
    $.ajax({
        url:'http://139.199.192.48:9090/api/getgsshoparea',
        type:'get',
        dataType: "json",
        success:function(res){
            console.log(res);
            var htmlStr = template('content2',res);
            $('#Section2').html(htmlStr)
        }
    })
    $('#Section2').toggleClass("active");
})



    $.ajax({
        url:'http://139.199.192.48:9090/api/getgsproduct',
        type:'get',
        data:{
            shopid:0,
            areaid:0
        },
        dataType: "json",
        success:function(res){
            var htmlStr = template('pro_tpl',res);
            $('.pro_list').html(htmlStr);

        }
    // $('.pro_list').masonry({
    //     itemSelector: '.item'
    // });

    //     $(".img.lazy").lazyload({
    //     threshold:200,
    //     event:'click',
    //     container:$('.pro_list'),
    //     failure_limit:2
    // });
})

var curAreaId=0;
function getgsshop(shopid,obj) {
    console.log(shopid,obj)
    curShopId = shopid;
    $('#sec1 a').text($(obj).text());
    $.ajax({
        url: "http://139.199.192.48:9090/api/getgsproduct",
        type: "get",
        data: {
            shopid: shopid,
            areaid: curAreaId
        },
        dataType: "json",
        success: function (res) {
            var htmlStr = template('pro_tpl',res);
            $('.pro_list').html(htmlStr);
        }
    })
}

var curShopId=0;
function getgsarea(areaid,obj){
    console.log(areaid,obj)
    curAreaId = areaid;
    $('#sec2 a').text($(obj).text().substring(0,2));
    $.ajax({
        url:"http://139.199.192.48:9090/api/getgsproduct",
        type:"get",
        data:{
            shopid:curShopId,
            areaid:areaid
        },
        dataType:"json",
        success: function (res) {
            var htmlStr = template('pro_tpl',res);
            $('.pro_list').html(htmlStr);
        }
    })
}

// function render(){
//     var htmlStr = template('pro_tpl',res);
//     $('.pro_list').append(htmlStr);
// }
$('#sec3').click(function(){
    $('#Section3').toggleClass("active");
})