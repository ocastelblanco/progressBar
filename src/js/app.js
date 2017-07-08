/* global $ */
$(function() {
    $('#dato').change(function(){
        var data = Number($('#dato').val());
        var total = $('.progress-bar').width();
        var p = data/100* total;
        $('.inner').width(p);
        $('#text').html(data+'%');
    });
});