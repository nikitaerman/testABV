$("#sendMail").on("click", function() {
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var message = $("#message").val().trim();

    if (email == "") {
        $("#errorMess").text("Введите email");
        return false;
    } else if(name == "") {
        $("#errorMess").text("Введите имя");
        return false;
    } else if(message == "") {
        $("#errorMess").text("Введите сообщение");
        return false;
    } else if(message.length < 10) {
        $("#errorMess").text("Введите сообщение больше 10 символов");
        return false;
    } 

    $("#errorMess").text("");

    $.ajax ({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: { 'email': email, 'name': name, 'message': message},
        dataType: 'html',
        beforeSend: function() {
            $("#sendMail").prop("disabled", true);
        },
        success: function(data) {
            if(!data) {
                $("#mailForm").trigger("reset");
                alert("Cообщение не отправлено");
            }
                
            else {
                alert("Отправлено");
                $("#mailForm").trigger("reset");
            }

            var alert_text = '';
            var alert_height = '';

            function alert(alert_text) {
                $("#alert_dialog").show();
                $("#alert_text").text(alert_text);
                alert_height = $(document).height();
                $("#alert_fog").css('height', alert_height);
            }

            $("#alert_close").click(function(){
                $("#alert_dialog").hide();
            }); 

            $("#sendMail").prop("disabled", false);
        }
    })
});