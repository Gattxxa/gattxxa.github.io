// 武器データ
const weapons = [
    {
      name: "エヴォルイクリス",
      rarelity: 6,
      base_attack: 346,
      variance: 0.5,
    },
    {
      name: "クリスティア",
      rarelity: 7,
      base_attack: 473,
      variance: 0.5,
    },
    {
      name: "ネオス・アストリオン",
      rarelity: 8,
      base_attack: 535,
      variance: 0.5,
    }
]

// 選択肢作成
$(function() {
    for (let i=0; i<weapons.length; ++i) {
        $('select[name="weapon"]').append($("<option>").val(i).text(weapons[i].name));
    }
});

// 反映
$(function(){
    $('select[name="weapon"]').change(function() {
        const index = $('select[name="weapon"] option:selected').val();
        const weapon = weapons[index]
        $('#rarelity').text(weapon.rarelity);
        $('#base-atk').text(weapon.base_attack);
        $('#variance').text(weapon.variance);
    })
});    
