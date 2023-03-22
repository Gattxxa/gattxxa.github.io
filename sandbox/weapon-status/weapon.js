// 武器データ
const weapons = [
  {
    name: "武器装備無し",
    rarelity: 0,
    base_attack: 0,
    variance: 0,
  },
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


$(function () {
  // 選択肢作成
  $select = $("select[name='weapon']");
  for (let i = 0; i < weapons.length; ++i) {
    $select.append($("<option>").val(i).text(weapons[i].name));
  }

  // 選択時反映
  $select.change(function () {
    const index = $("select[name='weapon'] option:selected").val();
    const weapon = weapons[index]
    $("#rarelity").text(weapon.rarelity);
    $("#base-atk").text(weapon.base_attack);
    $("#variance").text(weapon.variance);

    const rarelity = $("#rarelity").text()
    const base = $("#base-atk").text()
    const enhance = $("#enhance").val()
    const result = calcAtk(rarelity, Number(base), enhance)

    $("#atk").text(result);
  })

  // 選択時反映
  $("#enhance").change(function () {
    const rarelity = $("#rarelity").text()
    const base = $("#base-atk").text()
    const enhance = $("#enhance").val()
    const result = calcAtk(rarelity, Number(base), enhance)

    $("#atk").text(result);
  })

  // 選択時反映
  $("#enhance").keypress(function () {
    const rarelity = $("#rarelity").text()
    const base = $("#base-atk").text()
    const enhance = $("#enhance").val()
    const result = calcAtk(rarelity, Number(base), enhance)

    $("#atk").text(result);
  })

});


