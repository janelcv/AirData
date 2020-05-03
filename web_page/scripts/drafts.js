// Visualization API with the 'corechart' package.
// google.charts.load('visualization', { packages: ['corechart'] });
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {
//     $.getJSON("data/air/airkaz_data.json", function(data) {
//         console.log(data); // this will show the info it in firebug console
//         var arr = [['Date', 'P.M25']];    // Define an array and assign columns for the chart.
//         // Loop through each data and populate the array.
//         $.each(data, function (index, value) {
//             arr.push([parseInt(value.pm25ss), value.date]);
//         });

//         // Set chart Options.
//         var options = {
//             title: 'Monthly Sales',
//             curveType: 'function',
//             legend: { position: 'bottom', textStyle: { color: '#555', fontSize: 14} }  // You can position the legend on 'top' or at the 'bottom'.
//         };

//         // Create DataTable and add the array to it.
//         var figures = google.visualization.arrayToDataTable(arr)

//         // Define the chart type (LineChart) and the container (a DIV in our case).
//         var chart = new google.visualization.LineChart(document.getElementById('chart'));
//         chart.draw(figures, options);      // Draw the chart with Options.
//     });
// }

// }

// function drawLineChart() {
//     $.ajax({
//         type : 'GET',
//         dataType : 'json',
//         url: "./data/sample-sales.json",
//         contentType: "application/json; charset=utf-8",
//         success: function (data) {
//             var arrSales = [['Month', 'Sales Figure', 'Perc. (%)']];    // Define an array and assign columns for the chart.

//             // Loop through each data and populate the array.
//             $.each(data, function (index, value) {
//                 arrSales.push([value.Month, value.Sales_Figure, value.Perc]);
//             });

//             // Set chart Options.
//             var options = {
//                 title: 'Monthly Sales',
//                 curveType: 'function',
//                 legend: { position: 'bottom', textStyle: { color: '#555', fontSize: 14} }  // You can position the legend on 'top' or at the 'bottom'.
//             };

//             // Create DataTable and add the array to it.
//             var figures = google.visualization.arrayToDataTable(arrSales)

//             // Define the chart type (LineChart) and the container (a DIV in our case).
//             var chart = new google.visualization.LineChart(document.getElementById('chart'));
//             chart.draw(figures, options);      // Draw the chart with Options.
//         },
//         error: function (XMLHttpRequest, textStatus, errorThrown) {
//             alert('Got an Error');
//         }
//     });
// }

