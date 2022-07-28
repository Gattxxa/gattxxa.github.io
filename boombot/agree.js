$(function(){
    $('#agree').on('click', function() {
        if($(this).prop('checked') == false) {
            $('#invite').addClass('btn-disabled');
            $('#invite').removeClass('btn');
        } else {
            $('#invite').addClass('btn');
            $('#invite').removeClass('btn-disabled'); 
        }
    })
});