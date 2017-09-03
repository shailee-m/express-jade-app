//function isDisabled()
(function($) {
    $(document).ready(function() {
        $("#sub").click(function(e) {
            e.preventDefault();
            $("#selF").submit();
        });



        $(document).on('submit', 'form#selF', function(e) {
            e.preventDefault();
            var name = $("input#ip1").val();
            $.post("http://localhost:3000/contact/savedetails", {
                    name: name
                },
                function(data, status) {
                    console.log(data, status)
                    $("input#ip1").val('');
                    // $("#respText").innerText = '';

                    if (!data) {
                        $("#respText").text("ERR!");

                    } else {
                        $("#respText").text(data);
                    }
                    //alert("Data: " + data + "\nStatus: " + status);
                });

        });
    })

})(jQuery);