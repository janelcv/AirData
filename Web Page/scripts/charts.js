Promise.all([
    d3.csv("data/csv/airkaz_data.csv"),
    d3.csv("data/csv/kazgidromet_data.csv"),
]).then(makeChart);

function makeChart(data) {
    // console.log(data);

    almaty_airkaz = data[0].filter(function(d){
        if(d['city (S)'] == 'Алматы' && d['pm25ss (S)'] < 800){
            return d;
        }
    });

    var kgm = data[1].filter(function(d){
        if(d['code (S)'] == 'PM2.5'){
            return d;
        }
    });

    var day = almaty_airkaz.map(function(d){return moment(d['date (S)']).format('ll');});
    var pm25_airkaz = almaty_airkaz.map(function(d){return d['pm25ss (S)'];});
    var pm25_kgm = kgm.map(function(d){return d['value (N)']*100; })

    var chart = new Chart('chart', {
        type: 'line',
        data: {
            labels: day,
            datasets: [
            {
                label: 'Airkaz',
                data: pm25_airkaz,
                borderColor: '#0088a3',
            }
            // {
            //     label: 'Kazgidromet',
            //     data: pm25_kgm,
            //     borderColor: '#a3007a',
            // }
            ]
        },
        options: {
            scales: {
                xAxes: [{
                    display: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
}