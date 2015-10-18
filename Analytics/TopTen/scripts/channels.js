<script type="text/javascript">
			var Book = [];
			var Salescount = [];
		
			
			var url="https://nielsen.api.tibco.com/TopTen/v1/Products?apikey=9029-09e16fea-cf77-4f2e-a032-1bd8ae3aff9f";
			var json =  $.getJSON(url, function(data) {
			/* Book */
			Book = jsonPath(data, "$.Category[0].SubCategory[0].Demographies[0].Items[*].Name");
			/* SalesCount */
			SalesCount = jsonPath(data, "$.Category[0].SubCategory[0].Demographies[0].Items[*].SalesCount");
			var chart;
			var chartData = [];
			//var mycolors = ["C94591",  "DDC0B2" , "DF75DA" , "003333",  "669999",  "999999", "C04552", "601B4A", "FF3333"];
							
			     for (var i = 0; i < 10; i++) {
                   				
				   var Ebook = '"' + Book[i] + '"';
				   var ESalesCount = parseInt(SalesCount[i]);              
				   console.log(Ebook);
				   console.log(ESalesCount);
				
                   chartData.push({
                       charBook: Ebook,
                       intSalesCount: ESalesCount, 
					   //colorField :  mycolors[i]
                   }); 
				}	
			
			
                // PIE CHART
                chart = new AmCharts.AmPieChart();
                chart.dataProvider = chartData;
                chart.titleField = "charBook";
                chart.valueField = "intSalesCount";
			    //chart.colorField = "colorField";
				chart.outlineColor = "#FFFFFF";
				chart.groupedAlpha = 1;
                chart.outlineAlpha = 0.8;
                chart.outlineThickness = 2;
				chart.groupedPulled = true;
				chart.radius = 150;

                // WRITE
                chart.write("bookdiv");
		});	
            
</script>

SalesDashboard.currentModel = new SalesDashboard.channelsModel();
SalesDashboard.currentModel.init();
