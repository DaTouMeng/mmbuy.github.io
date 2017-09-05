/**
 * Created by ying on 2017/7/5.
 */
//获取数据
    var id = location.search.substr(4);
    //console.log(id);
if(id>=20&&id<=163){
    $.ajax({
        url:'http://139.199.192.48:9090/api/getmoneyctrlproduct',
        type:'get',
        data:{productid:id},
        success:function (info) {
            //console.log(info);
            var htmlStr = template('detailTemp',info);
            $('#detail').html(htmlStr);
        }
    });
}