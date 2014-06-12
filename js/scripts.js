$(document).ready(function () {
    $('#cnzz_stat_icon_5894820').hide();

    var ixiaozhidomain = $.cookie('ixiaozhidomain');
    if (ixiaozhidomain == null) {
        $("#domain").val("ixiaozhi.com");
    } else {
        $("#domain").val(ixiaozhidomain);
    }

    $('.page-container form').submit(function () {
        var domainvalue = $('#domain').val();
        var username = $('#username').val();
        var password = $('#password').val();

        $.cookie('ixiaozhidomain', domainvalue, {expires: 30, path: '/', domain: 'mail.ixiaozhi.com'});

        if (username == '') {
            $(this).find('.error').fadeOut('fast', function () {
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function () {
                $(this).parent().find('#username').focus();
            });
            return false;
        }
        if (password == '') {
            $(this).find('.error').fadeOut('fast', function () {
                $(this).css('top', '166px');
            });
            $(this).find('.error').fadeIn('fast', function () {
                $(this).parent().find('#password').focus();
            });
            return false;
        }
    });

    $('#username,#password').keyup(function () {
        $(this).parent().find('.error').fadeOut('fast');
    });

});
