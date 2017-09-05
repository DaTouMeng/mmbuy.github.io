/**
 * Created by ying on 2017/7/5.
 */
//获取数据
    var id = location.search.substr(4);
    //console.log(id);
if(id>=0&&id<20){
    $.ajax({
        url:'http://139.199.192.48:9090/api/getdiscountproduct',
        type:'get',
        data:{productid:id},
        success:function (info) {
            //console.log(info);
            var htmlStr = template('detail_temp',info);
            $('#detail').html(htmlStr);
        }
    });
}