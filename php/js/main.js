$(document).ready(function () {
    $('#test').click(function () {
        $.ajax({
            type: 'GET',
            url: 'lib/app_client.php',
            dataType: "json",
            data: {
                token: localStorage.token
            },
            success: function (data) {
                if (typeof data['userId'] !== 'undefined') {
                    var alertMessage = 'You have a valid token! Here is your user Id: ' + data['userId'];

                    if (typeof data['exp'] !== 'undefined') {
                        alertMessage = alertMessage + ' and your token expires: ' + data['exp'];
                    }

                    alert(alertMessage);

                } else if (typeof data['error'] !== 'undefined') {
                    alert('Error: ' + data['error']);
                } else {
                    alert('Error: Your request has failed.');
                }
            }
        });
    });
    $('#js-login').click(function () {
        var user = $('#InputEmail').val();
        var pw = $('#InputPassword').val();
        $.ajax({
            type: "POST",
            url: "lib/app_client.php",
            dataType: "json",
            data: {
                username: user,
                password: pw
            },
            success: function (data) {
                localStorage.token = data['token'];
                alert('Successfully retrieved token from the server! Token: ' + data['token']);
            },
            error: function () {
                alert("Error: Login Failed");
            }
        });
    });
    $('#logout').click(function () {
        localStorage.clear();
    });
});