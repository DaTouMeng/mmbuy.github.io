$(function () {

    $.ajax({
        type: 'get',
        url: 'http://139.199.192.48:9090/api/getcoupon',
        dataType: 'json',
        success: function (data) {
            $('.items ul').html(template('coupons', data));
        }
    })

})


