/**
 * Created by liico on 2017/7/5.
 */
$(function () {

    var goTop = $('.goTop');
    //返回顶部显示
    $(window).scroll(function () {
        $(window).scrollTop() > 200 ? goTop.show() : goTop.hide();
    });
    //回到顶部
    goTop.on('click', function () {
        $('html,body').animate({scrollTop: 0}, 500)
    });


    //标题渲染
    var title = $_GET('title');
    if (title) {
        $('.header h1').text(template('title', decodeURI(title + '优惠券')));
    }

    //页面加载
    function load() {
        $.ajax({
            url: "http://139.199.192.48:9090/api/getcouponproduct",
            data: {couponid: $_GET('couponid')},
            type: 'get',
            dataType: 'json',
            success: function (data) {
                $('.items ul').html(template('couponList', data));
                pullmaster.pullDownSuccess();
                $('#thumbs a').touchTouch();
            },
            error: function () {
                pullmaster.pullDownFailed();
            }

        })
    }

    load();
    // 下拉刷新上滑分页加载
    var pullmaster = new Pull($('.items'), {
        onPullDown: function () {
            $('.items ul').html('');
            load();
        },
    });
    //url参数
    function $_GET(param) {
        var params = location.search.substr(1).split('&');
        var urlParam = {};
        for (var i = 0; i < params.length; i++) {
            var temp = params[i].split('=');
            urlParam[temp[0]] = temp[1];
        }
        return param ? urlParam[param] : urlParam;
    }
    //获得img标签里面的src地址用于touchtouch插件的图片查看
    template.helper('getImgSrc',function(img){
        // return img;
        var b = /<img.+src=\"?(.+\.(jpg|gif|bmp|bnp|png))\"?.+>/i;
        return img.match(b)[1];
    })
})

