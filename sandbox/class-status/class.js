function calcHP(level, hp) {
    const result = Math.round(hp * Math.pow(1.05, (level-1)/5));
    return result;
}

function calcAtk(level, atk) {
    const result = Math.round(450 * Math.pow(1.1, (level-1)/5) + (atk-450));
    return result;
}

function calcDef(level, def) {
    const result = Math.round(300 * Math.pow(1.08, (level-1)/5) + (def-300));
    return result;
}

var classStatus = {
    Hu: {
        hp: 300,
        atk: 450,
        def: 304
    },
    Fi: {
        hp: 280,
        atk: 454,
        def: 301
    },
    Ra: {
        hp: 240,
        atk: 448,
        def: 300
    },
    Gu: {
        hp: 250,
        atk: 451,
        def: 297
    },
    Fo: {
        hp: 235,
        atk: 453,
        def: 296
    },
    Te: {
        hp: 260,
        atk: 446,
        def: 303
    },
    Br: {
        hp: 270,
        atk: 452,
        def: 302
    },
    Bo: {
        hp: 275,
        atk: 453,
        def: 299
    },
    Wa: {
        hp: 255,
        atk: 451,
        def: 302
    }
}

$(function(){
    $('#calc').on('click', function() {     
        const level = $('input[name="level"]').val();
        const className = $('input[name="className"]:checked').val();

        const selectedClass = classStatus[className]
 
        $('#hp').text(calcHP(level, selectedClass.hp));
        $('#atk').text(calcAtk(level, selectedClass.atk));
        $('#def').text(calcDef(level, selectedClass.def));
    })
});