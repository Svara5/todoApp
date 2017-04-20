$(document).ready(function() {
    $('#btnID').click(function() {
        var inputVal = $('#inputTask').val();
        var d = new Date();
        if (inputVal === '') {
            $(".alert").remove();
            $("#secOne").append("<div class='alert alert-danger'> Please enter a value </div>");
        } else {
            $(".alert").remove();
            $('#listUl').append('<li class="well"><a href="#"><span class="glyphicon glyphicon-check"></a></span><strong>' + inputVal + '</strong><a href="#"><span class="checked glyphicon glyphicon-remove"></span></a></li>');
        }
        $('#inputTask').val('');
    });
});
