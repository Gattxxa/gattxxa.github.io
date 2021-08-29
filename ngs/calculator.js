$(function(){
    $('#calc').on('click', function() {
        let weapon =  parseFloat($('#weapon').val());
        let unit1 =  parseFloat($('#unit1').val());
        let unit2 =  parseFloat($('#unit2').val());
        let unit3 =  parseFloat($('#unit3').val());

        let step1 = weapon
        let step2 = step1 + (unit1+(unit1*(step1/100)))
        let step3 = step2 + (unit2+(unit2*(step2/100)))
        let total = step3 + (unit3+(unit3*(step3/100)))
        let total2 = weapon+unit1+unit2+unit3
        $("#result").text(total)
        $("#result2").text(total2)
    })
});