$(document).ready(function() {
	var participants = ["Edo, gin, ArtūrasB, lewraz, Nerijus, deXter, Aidas, Vidas, Dzulis, Edgaras, Mindaugas."],
		values = [1701, 1870, 1407, 865, 989, 731, 792, 1257, 1191, 554, 140],
		result = 0,
		goal = 40075,
		local = 1762;

	$("section.participants p").html(participants);

	for (var i = 0; i < values.length; i++) {
		result = result + values[i];
	}
	$("div.statRightHolder ul li h3.purple").html(result);

	var progress = ( result / ( goal / 12 * 7 ) ) * 100;
	progress = progress.toFixed();
	if (progress > 100) {
		progress = 100;
	}
	$(".progress-pie-chart").attr("data-percent", progress);

	var lithuania = result / local;
	lithuania = lithuania.toFixed(2);
	$("h3.yellow").html(lithuania);

	var earth = result / goal;
	earth = earth.toFixed(2);
	$("h3.red").html(earth);
});

$(function() {
  var $ppc = $('.progress-pie-chart'),
	percent = parseInt($ppc.data('percent')),
	deg = 360*percent/100;
  if (percent > 50) {
	$ppc.addClass('gt-50');
  }
  $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
  $('.ppc-percents span').html(percent+'%');
});
