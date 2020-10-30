$(document).ready(function() {

    // process the form
    $('#signupform').submit(function(event) {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name'              : $('input[name=name]').val(),
            'email'             : $('input[name=email]').val(),
            'password'             : $('input[name=password]').val(),
            'birthday'    : $('input[name=birthday]').val()
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'process.php', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
                        encode          : true
        })
            // using the done promise callback
            .done(function(data) {
                if(data.success == true){
                    $('#error').addClass('hidden');
                $('#submit').addClass('hidden');
                $('#success').removeClass('hidden');}
                else{
                    $('#error').html(data.errors.user);
                    $('#error').removeClass('hidden');}
                // log data to the console so we can see
                console.log(data);

                window.location.href = "signin.html";
                // here we will handle errors and validation messages
            })
            .fail(function(data) {
                
                $('#error').removeClass('hidden');
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});
$(document).ready(function() {

    // process the form
    $('#signinform').submit(function(event) {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'email'             : $('input[name=email]').val(),
            'password'             : $('input[name=password]').val(),
        };

        // process the form
        $.ajax({
            type        : 'GET', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'process.php', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
                        encode          : true
        })
            // using the done promise callback
            .done(function(data) {
                if(data.success == true){
                    $('#error').addClass('hidden');
                $('#submit').addClass('hidden');
                $('#success').removeClass('hidden');}
                else{
                    $('#error').html(data.errors.user);
                    $('#error').removeClass('hidden');}
                // log data to the console so we can see
                console.log(data);
                window.location.href = "user.html";
                // here we will handle errors and validation messages
            })
            .fail(function(data) {
                
                $('#error').removeClass('hidden');
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});
