/**
 * Created by ying on 2017/7/5.
 */
// 获取数据
$.ajax({
    url:'http://139.199.192.48:9090/api/getinlanddiscount',
    type:'get',
    success:function (info) {
        // var htmlStr = template('ch_temp',info);
        // $('#ch_goods').html(htmlStr);
        listResult = info.result;
        //console.log(listResult);
        for(var i = 0;i<6;i++){
            var htmlStr = template('ch_temp',listResult[i]);
            $('#ch_goods').append(htmlStr);
            //console.log(listResult[i]);
        }
    }
});

//页面滚动时触发
var listResult;
var index = 6;
$(window).scroll(function () {
    if(index<listResult.length){
        if(isVisible()){
            //$('').remove();
            var htmlStr = template('ch_temp',listResult[index]);
            $('#ch_goods').append(htmlStr);
            index++;
        }
    }
});

//判断是否到底
function isVisible() {
    if ($(window).scrollTop()>=$(document).height()-$(window).height()-30){
        console.log(1);
        return true;
    }
    else return false;
}

// 点击跳转
$('.details').on('click',function () {
    var id = $(this).parent().attr(data-id);
    console.log(id);
});




