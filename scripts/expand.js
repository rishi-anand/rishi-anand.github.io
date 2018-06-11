// $("#short_desc").show();
// $("#show_more").show();
// $("#more_desc").hide();
// $("#show_less").hide();
// $("#show_more").click( function() {
// 	$("#more_desc").show();
// 	$("#show_less").show();
// 	$("#show_more").hide();
// });
// $("#show_less").click( function() {
// 	$("#show_more").show();
// 	$("#more_desc").hide();
// 	$("#show_less").hide();
// });

$("#show_more").show();
 $("#text").hide();
 $("#less").hide();
 $("#more").click( function() {
   $("#text").show();
   $("#less").show();
   $("#more").hide();
 });
 $("#less").click( function() {
   $("#text").hide();
   $("#less").hide();
   $("#more").show();
 });