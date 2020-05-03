// Создает обработчик события window.onLoad
YMaps.jQuery(function () {
    // Создает экземпляр карты и привязывает его к созданному контейнеру
    var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
    var traffic = new YMaps.Traffic.Control();

    // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
    map.setCenter(new YMaps.GeoPoint(76.900704, 43.238519), 12);

    map.addControl(new YMaps.TypeControl());
    map.addControl(traffic);
    map.enableScrollZoom(true);
    traffic.show();

//     var actualProvider = new YMaps.Traffic.Provider.Actual({}, {infoLayerShown: true});
// actualProvider.setMap(map);

var temp = new YMaps.Traffic.Provider();

console.log(temp);

})