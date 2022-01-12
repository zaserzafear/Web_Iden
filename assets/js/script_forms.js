// For Demo Purpose [Changing input group text on focus]
$(function () {
    $('input, select').on('focus', function () {
        $(this).parent().find('.input-group-text').css('border-color', '#2421D2');
        // $(this).parent().find('.input-group-text').css('outline', 'rgba(0, 89, 255, 0.4) solid 2px');
    });
    $('input, select').on('blur', function () {
        $(this).parent().find('.input-group-text').css('border-color', 'rgb(206, 212, 218)');
    });
});

