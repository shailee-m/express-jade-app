//function isDisabled()
(function($) {
    $(document).ready(function() {
        $("#sub").click(function(e) {
            e.preventDefault();
            $("#selF").submit();
        });


        function reset() {
            $('#sub').prop('disabled', true);
            $("input#ip1").val('');
            $("#ip2").val('');
        }

        reset()
        $('#sub').prop('disabled', true);

        $('#ip1').keyup(function() {
                if ($('#ip1').val() == '') {
                    $('#ip1').css('border-color', 'red');
                } else {
                    $('#ip1').css('border-color', 'black');

                }
                if ($(this).val() != '' && $('#ip2').val() !== '') {
                    $('#sub').prop('disabled', false);
                }
            })
            .focusout(function() {
                if ($('#ip1').val() == '') {
                    $('#ip1').css('border-color', 'red');
                } else {
                    $('#ip1').css('border-color', 'black');

                }
            });
        $('#ip2').keyup(function() {
                if ($(this).val() != '' && $('#ip1').val() !== '') {
                    $('#sub').prop('disabled', false);
                }
                if ($('#ip2').val() == '') {
                    $('#ip2').css('border-color', 'red');
                } else {
                    $('#ip2').css('border-color', 'black');

                }
            })
            .focusout(function() {
                if ($('#ip2').val() == '') {
                    $('#ip2').css('border-color', 'red');
                } else {
                    $('#ip2').css('border-color', 'black');

                }
            });

        $(document).on('submit', 'form#selF', function(e) {
            e.preventDefault();
            var name = $("input#ip1").val();
            $.post("/form/savedetails", {
                    name: name
                },
                function(data, status) {
                    console.log(data, status)
                    reset()
                    // $("#respText").innerText = '';

                    if (!data) {
                        $("#respText").text("ERR!");
                        $("#respText").addClass("has-error");

                    } else {
                        $("#respText").addClass("has-success");
                        $("#respText").text(data);
                    }
                    // alert("Data: " + data + "\nStatus: " + status);
                });

        });



        /*--------------------------------------------------------------------*/
        // $('[data-toggle="tooltip"]').tooltip();
        $('*#emailip').on('change', changefn);

        function changefn(e) {
            e.preventDefault();
            var state = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(this).val())
            if (state) {
                var curr = $(this).attr('iter');
                var edts = $('*#edt');
                console.log(edts)
                $("#temp").remove();
                for (i = 0; i < edts.length; i++) {
                    if ($(edts[i]).attr('iter') == curr) {
                        $(edts[i]).text('1')
                        $(this).removeClass('danger');

                        $(edts[i]).parent().addClass("success")
                    }
                }
            } else {
                $(this).parent().parent().removeClass('success');
                $(this).addClass('danger');
                var warning = document.createTextNode('Please enter valid email');
                $(warning).addClass("temp")
                $(this).append(warning)

                // $icon.attr('class', 'glyphicon glyphicon-remove');
            }

            /*------------------------------------------*/



            // console.log($(this).attr())
        }

        // $('#emailip').on('change', function(e) {
        //     e.preventDefault();



        // });


        /*------------------------------------------------------------------------*/



    })

})(jQuery);