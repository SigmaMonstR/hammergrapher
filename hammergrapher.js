//Function

function hammergrapher(url){
	
//AJAX Call to process the data
  $.ajax({
              url: url,
              dataType: 'json',
               success: function(data) {

                  //return data
                     datafile = data.result;

                  //length of datafile
                      lengths = datafile.length;

                  //csv array placeholder
                      csv = [];
 
                  //Convert data from json to csv
                     for( var i = 0; i < lengths; i++ ){
                        csv.push( [Date.parse(datafile[i].date) , datafile[i].area] );
                        console.log(i);
                        };

                  //Run Dygraph
                     g = new Dygraph(
                          // containing div
                          document.getElementById("graphdiv"),
                          csv,
                             {
                               ylabel: 'Area (sq mi)',
                               drawXGrid: false,
                               drawYGrid: false,
                               colors: ["#5F94D9"],
                               fillGraph: true,
                               drawPoints: true,
                               labels: ['Date', 'Area (sq mi)'],
                               axes: {
                                   x: {
                                       valueFormatter: Dygraph.dateString_, //set date format
                                       axisLabelFormatter: Dygraph.dateAxisFormatter,
                                       ticker: Dygraph.dateTicker
                                   }
                               }
                             }

                        );
                  }    
        });
}
