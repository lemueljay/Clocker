/**
 * Created by Lemmeister on 8/9/2016.
 */

$(document).ready(function() {
    $(function(){
        $('.timer').startTimer({
            onComplete: function(){
                console.log('Complete');
            }
        });
    })
})