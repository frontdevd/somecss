$(function() {

//	tab

    var pulse = $('.pulse'),
        width = $('div#coming-soon .coming-wrapp .subscribe input[name=subscibe]');


    // $(pulse).on('mouseover', function () {
    //     $(width).css('width', '84%');
    //
    //
    // });


    $(pulse).on('click', function () {
        $(width).css('width', '11.5%');
        $('.subscribe').hide();
        $('.background2').show();
        $('.background .burble:nth-child(4)').show().css('transform', 'scale(0.8)');

    });

});
