$(function(){

    // IDから計算
    $('#calcById').on('click', function() {
        result = 1
        result *= $('#Data1').val() * $('#Data2').val() * $('#Data3').val() // ...
        $('#calcByIdResult').text(result)
    })

    // Classから計算
    $('#calcByClass').on('click', function() {
        result = 1
        Array.from($('.calc-target')).forEach(e => {
            result *= e.value;
        });
        $('#calcByClassResult').text(result);
    })

});
