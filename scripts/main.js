import { series } from "./data.js";
var serieTable = document.getElementById("series");
var averageTable = document.getElementById("averageSeasons");
mostrarDatosSerie(series);
showAverageSeason(series);
function mostrarDatosSerie(series) {
    var tbodySerie = document.createElement("tbody");
    console.log('Series array:', series);
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.index, "</td>\n        <td>").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        console.log('Created trElement:', trElement);
        tbodySerie.appendChild(trElement);
    }
    serieTable.appendChild(tbodySerie);
    console.log('Appended tbodySerie to serieTable');
}
function showAverageSeason(series) {
    var lenSerie = 0;
    var averageseason = 0;
    var tbody = document.createElement("p");
    var lengSerie = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        lenSerie += 1;
        averageseason += serie.seasons;
        lengSerie += 1;
    }
    tbody.innerHTML = "<b>Average Seasons&nbsp;&nbsp;".concat(averageseason / lengSerie, "&nbsp;&nbsp</b> ");
    averageTable.appendChild(tbody);
}
