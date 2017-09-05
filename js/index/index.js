/**
 * Created by Chiman on 2017/7/4.
 */
$.ajax({
    url: "http://139.199.192.48:9090/api/getindexmenu",
    type: "get",
    dataType: "json",
    success: function (data) {
        if (data.code = 200) {
            var htmlStr = template('menuList', data);

            $(".menu").html(htmlStr);
            $(".menu").on('click', '.itemMenu', function () {

                if (this.dataset.itemid == 7) {
                    $(".menu .row").toggleClass("menuHide");
                }
                else {
                    var toHref = this.dataset.href.trim().replace(".html", "");
                    switch (toHref) {
                        case 'category':
                            toHref = 'search';
                            break;
                        case 'moneyctrl':
                            toHref = 'saveMoney';
                            break;
                        case 'inlanddiscount':
                            toHref = 'china';
                            break;
                        case 'baicaijia':
                            toHref = 'cheap';
                            break;
                        case 'moneyctrl':
                            toHref = 'oversea';
                            break;
                        case 'coupon':
                            toHref = 'coupon';
                            break;
                        case 'category':
                            toHref = 'search';
                            break;
                        case 'gsproduct':
                            toHref = 'add';
                            break;
                        case 'category':
                            toHref = 'search';
                            break;
                        case 'sitenav':
                            toHref = 'nav';
                            break;
                        case 'brandTitle':
                            toHref = 'brand';
                            break;
                    }
                    if (this.dataset.itemid == 4) {
                        toHref = 'oversea';
                    }
                    window.location = './pages/' + toHref + '/' + toHref + '.html';
                }
            });
        }
    }
});
$.ajax({
    url: "http://139.199.192.48:9090/api/getmoneyctrl",
    type: "get",
    dataType: "json",
    success: function (data) {
        if (data.code = 200) {
            for (var i = 0; i < data.result.length; i++) {
                data.result[i].productComCount =
                    data.result[i].productComCount.slice(1).replace("人评论", "")
            }
            //var htmlStr = template('itemList',data);
            //$(".disItems").html(htmlStr);
            listResult = data.result;
            for (var i = 0; i < 4; i++) {
                // listResult[i].isShowed = true;
                var htmlStr = template('itemList', listResult[i]);
                $(".disItems").append(htmlStr);
            }
            $(".disItems").append("<div id='loading'></div>");
        }
    }
})
/* 页面滚动时触发 */
var listResult;
var index = 4;

$(window).scroll(function () {
    if (index < listResult.length) {
        if(isVisible() ){
                $("#loading").remove();
                var htmlStr = template('itemList', listResult[index]);
                $(".disItems").append(htmlStr);
                $(".disItems").append("<div id='loading'></div>");
                index++;
        }
    } else $("#loading").remove();
})
/* 判断是否到底 */
function isVisible() {
    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 30) {
        console.log(1);
        return true;
    }
    else return false;
}

