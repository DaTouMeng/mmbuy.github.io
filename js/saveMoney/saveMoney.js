/**
 * Created by ying on 2017/7/4.
 */
//封装ajax函数
function ajaxFn(page) {
    $.ajax({
        url:'http://139.199.192.48:9090/api/getmoneyctrl',
        type:'get',
        data:{pageid:page},
        success:function (info) {
            // console.log(info);
            info.maxPage = Math.ceil(info.totalCount/10);
            info.page=page;
            var htmlStr= template('goodsInfo',info);
            $('#goods_info').html(htmlStr);
        }
    });
}
//默认渲染第一页商品列表的数据
ajaxFn(1);
//分页功能
var page = 1;
//上一页
$('#goods_info').on('click','.btn_advance',function () {
    console.log($(this).data('max-page'));
    //console.log('2222');
    //console.log(page);
    page--;
    if(page<1){
        alert('已经是第一页了');
        page=1;
    }else {
        ajaxFn(page);
    }
});
//下一页
$('#goods_info').on('click','.btn_return',function () {
    //console.log($(this).data('max-page'));
    //console.log('2222');
    //console.log(page);
    var maxpage = $(this).data('max-page');
    page++;
    if(page>maxpage){
        alert('已经是最后一页了');
        page=maxpage;
    }else {
        ajaxFn(page);
    }
});
