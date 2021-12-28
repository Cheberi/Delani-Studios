$(document).ready(function () {

    //toggle what to do.
    $('#design').click(function () {
        $('#design-content').show(function () {
            $('#design').hide('fast');
        });
    });
    $('#design-content').click(function () {
        $('#design').show(function () {
            $('#design-content').hide('fast');
        });
    });

    $('#dev').click(function () {
        $('#dev-content').show(function () {
            $('#dev').hide('fast');
        });
    });
    $('#dev-content').click(function () {
        $('#dev').show(function () {
            $('#dev-content').hide('fast');
        });
    });

    $('#product').click(function () {
        $('#product-content').show(function () {
            $('#product').hide('fast');
        });
    });
    $('#product-content').click(function () {
        $('#product').show(function () {
            $('#product-content').hide('fast');
        });
    });


    //portfolio
    $('#work1').mouseenter(function () {
        $('.work-heading').filter('#work1-title').show("slow");
    }).mouseleave(function () {
        $('#work1-title').hide("slow");
    });


    $('#work2').mouseenter(function () {
        $('.work-heading').filter('#work2-title').show("slow");
    }).mouseleave(function () {
        $('#work2-title').hide("slow");
    });

    $('#work3').mouseenter(function () {
        $('.work-heading').filter('#work3-title').show("slow");
    }).mouseleave(function () {
        $('#work3-title').hide("slow");
    });


    $('#work4').mouseenter(function () {
        $('.work-heading').filter('#work4-title').show("slow");
    }).mouseleave(function () {
        $('#work4-title').hide("slow");
    });

    $('#work5').mouseenter(function () {
        $('.work-heading').filter('#work5-title').show("slow");
    }).mouseleave(function () {
        $('#work5-title').hide("slow");
    });


    $('#work6').mouseenter(function () {
        $('.work-heading').filter('#work6-title').show("slow");
    }).mouseleave(function () {
        $('#work6-title').hide("slow");
    });

    $('#work7').mouseenter(function () {
        $('.work-heading').filter('#work7-title').show("slow");
    }).mouseleave(function () {
        $('#work7-title').hide("slow");
    });
    $('#work8').mouseenter(function () {
        $('.work-heading').filter('#work8-title').show("slow");
    }).mouseleave(function () {
        $('#work8-title').hide("slow");
    });
});





$(document).ready(function () {
    $('form.contact').on('submit', function (e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $.getJSON('https://saboticonstituency.info/delani_studio/mc-end-point.php', formData, function (data) {
            if (data.status === 'subscribed') {
                alert('We have received your message.Our team will get back to you as soon as possible. Thank you for reaching out to us');
                $('form.contact')[0].reset();
            } else {
                alert("error: " + data.detail);
                $('form.contact')[0].reset();
            }
        });
    });
})