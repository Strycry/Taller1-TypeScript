import { Serie} from "./Serie.js"
import { series } from "./data.js";
let serieTable :HTMLElement = document.getElementById("series")!;
let averageTable :HTMLElement = document.getElementById("averageSeasons")!;
mostrarDatosSerie(series)
showAverageSeason(series)

function mostrarDatosSerie(series : Serie[]) :void {
    let tbodySerie = document.createElement("tbody");
    console.log('Series array:', series);
    for (let serie of series){
        let trElement :HTMLElement = document.createElement("tr")
        trElement.innerHTML=`<td>${serie.index}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`
        console.log('Created trElement:', trElement);
        tbodySerie.appendChild(trElement)
        

    }
    serieTable.appendChild(tbodySerie);
    console.log('Appended tbodySerie to serieTable');

} 






function showAverageSeason(series: Serie[]):void{
    let lenSerie : number =0
    let averageseason : number =0;
    let tbody = document.createElement("p");
    let lengSerie : number =0
    for (let serie of series){
        lenSerie+=1
        averageseason += serie.seasons;
        lengSerie +=1
    }
    tbody.innerHTML=`<b>Average Seasons&nbsp;&nbsp;${averageseason/lengSerie}&nbsp;&nbsp</b> `;
    averageTable.appendChild(tbody);
}





