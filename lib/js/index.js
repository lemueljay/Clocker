/**
 * Created by Lemmeister on 8/9/2016.
 */

function init() {
    $('#start').show()
    $('#stop').hide()
}

function toggleFullScreen() {
    if (!document.webkitFullscreenElement) {
        $('#fullscreen').text('EXIT FULLSCREEN');
        document.documentElement.webkitRequestFullscreen();
    } else {
        if (document.webkitExitFullscreen) {
            $('#fullscreen').text('SET FULLSCREEN');
            document.webkitExitFullscreen();
        }
    }
}

function countdownTimer() {
    $('.general').hide()
    $('.countdown').show()
    $('#start').hide()
    $('#stop').hide()
}

function generalCounter() {
    $('.countdown').hide()
    $('.general').show()
    $('#stopgeneral').hide();
}


$(document).ready(function() {

    var temp = 100;
    clock = $('.clock').FlipClock({

    });
    clock.stop()
    clock.setCountdown(true)
    $('#start').hide()
    $('#stop').hide()
    $('.message div').hide()
    $('.general').hide()

    $('#start').click(function() {
        clock.start(function() {
            $('.message div').hide()
            var time = clock.getTime().time
            console.log(time)
            if(time == 0 && temp == 0) {
                var audio = new Audio('audio/buzzer_x.wav')
                audio.play()
                temp = 100
                $('.message div').text('TIME IS UP!').fadeIn();
                $('#stop').click()
            }
            else if (time == 4 || time == 3 || time == 2 || time == 1 || time == 0) {
                var audio = new Audio('audio/titit.wav')
                audio.play()
            }
            temp = time
        })
        $(this).hide()
        $('#stop').show()
    })

    $('#stop').click(function() {
        clock.stop()
        $(this).hide()
        $('#start').show()
    })

    $('#reset').click(function() {
        $('#reset').blur

        var timing = $('#timing').val().trim()
        if(timing == '') {
            $('.message div').text('Please set a time!').fadeIn();
        } else {
            $('.message div').hide()
            init()
            clock.stop()
            clock.setTime(timing)
        }
    })

    $('#fullscreen').click(function() {
        toggleFullScreen()
    })

    $('#selecttype').on('change', function() {
        switch(this.value) {
            case '1':
                clock.setCountdown(true)
                clock.setTime(0)
                clock.stop()
                countdownTimer()
                break;
            case '2':
                $('.message div').hide()
                $('#stopgeneral').hide();
                clock.setCountdown(false)
                clock.setTime(0)
                clock.stop()
                generalCounter()
                break;
        }
    })

    $('#startgeneral').click(function() {
        $('#stopgeneral').show();
        $('#startgeneral').hide();
        clock.start()
    })

    $('#stopgeneral').click(function() {
        $('#stopgeneral').hide();
        $('#startgeneral').show();
        clock.stop()
    })

    $('#resetgeneral').click(function() {
        clock.setCountdown(false)
        clock.setTime(0)
        clock.stop()
    })




})