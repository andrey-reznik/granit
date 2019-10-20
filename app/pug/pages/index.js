$(function() {
    
    $("[data-scroll]").click(function(e) {
        e.preventDefault();
        var position = $($(this).attr("data-scroll")).offset().top;
        $("body, html").animate({
            scrollTop: position
        });
    });

    $('[data-modal]').on('click', function (e) {
        e.preventDefault();
        var id = this.getAttribute('data-modal');
        if($(id).length === 0) return false;
        else {
            $('body').css('overflow', 'hidden');
            $(id).fadeIn()
        }
        $(id.concat(' .modal-window__close-button')).on('click', function (e) {
            $(id).fadeOut();
            $('body').css('overflow', 'auto')
        })
    });

    $('[data-modal]').on('click', function (e) {
        e.preventDefault();
        var id = this.getAttribute('data-modal');
        if ($(id).length === 0) return false;
        else {
            $('body').css('overflow', 'hidden');
            $(id).fadeIn()
        }
        $(id.concat(' .modal-window__close-button')).on('click', function (e) {
            $(id).fadeOut();
            $('body').css('overflow', 'auto')
        })
    });

    $("input[type='submit']").on('click', function (e) {
        var form = $(this).closest('.form');
        form.validate({
            rules: {
                name: {
                    required: true
                },
                phone: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Введите Ваше имя"
                },
                phone: {
                    required: "Введите Ваш номер телефона"
                }
            },
            submitHandler: function () {
                swal({
                    title: "Спасибо за заявку",
                    text: "Мы перезвоним Вам в течении 5 минут.",
                    icon: "success",
                    button: "Хорошо",
                });
            }
        })
    });

    $('a.hamburger-icon').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('active')
        $('.navbar').fadeToggle()
    })

});