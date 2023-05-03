$(function(){

    $('#calcById').on('click', function() {
        result = 1
        $('#calcByIdResult').text(
            result *
            $('#Data1').val() * 
            $('#Data2').val() * 
            $('#Data3').val()
        );
    })

    $('#calcByClass').on('click', function() {
        result = 1
        Array.from($('.calc-target')).forEach(v => {
            result *= v.value;
        });
        $('#calcByClassResult').text(result);
    })
});
