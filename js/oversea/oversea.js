/**
 * Created by liico on 2017/7/4.
 */
$(function () {

    var goTop = $('.goTop');
    var page = 1;
    var flag = false;   //节流阀
    $(window).scroll(function () {
        $(window).scrollTop() > 200 ? goTop.show() : goTop.hide(); //返回顶部
    });
    goTop.on('click', function () {
        $('html,body').animate({scrollTop: 0}, 500)   //回到顶部
    });
    template.helper('parseInt', function (str) {
        return parseInt(str.substr(1));     //转数字
    })
//数据刷新
    function loadData() {
        if (flag) return false;
        $.ajax({
            url: 'http://139.199.192.48:9090/api/getmoneyctrl',
            type: 'get',
            data: 'pageid=' + page,
            dataType: 'json',
            beforeSend: function () {
                flag = true
            },
            success: function (data) {
                if(page==1){
                    $('.items').html(template('goods', data));
                }else{
                    $('.items').append(template('goods', data));
                }
                pullmaster.pullDownSuccess();       //刷新成功
                if (data.result.length < 10 || data.result.length == 0) {
                    pullmaster.pullUpDone();        //到底啦
                }
                ++page;
                flag = false;
            },
            error: function () {
                pullmaster.pullDownFailed();        //刷新失败
                pullmaster.pullUpFailed();          //数据加载失败
            }
        })
    }

// 下拉刷新上滑分页加载
    var pullmaster = new Pull($('.items'), {
        onPullDown: function () {
            page = 1;
            loadData();
        },
        onPullUp: function () {
            loadData();
        }
    });
})
