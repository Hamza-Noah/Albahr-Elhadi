// Start caorusel
$('.owl-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    items: 1,
    margin: 10,
    nav: false,
    rtl: true,
    autoHeight: true,
    dots: false,



});
// End carousel
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $('#form').validate({

        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 5,
                maxlength: 200
            }
        },
        // Specify validation error messages
        messages: {
            name: "الرجاء ادخال الاسم",
            message: {
                required: "ارسل رسالة",
                minlength: "Your message must be at least 5 characters long",
                maxlength: "Your message must be 5 characters long maximum"
            },
            email: "الرجاء ادخال بريد الكتروني صحيح"
        },

        submitHandler: function(form) {
            form.submit();
        }
    });
});
// End form