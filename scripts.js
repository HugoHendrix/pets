// MENU MOBILE
$(document).ready(function () {
    var mobileMenuToggle = $('.mobile-menu-toggle');
    var mobileMenu = $('.mobile-menu');
    var container = $('.container.full.row-menu');
    var fechaMenu = $('.mobile-menu-close');

    mobileMenuToggle.click(function () {
        container.css('marginRight', mobileMenu.css('right') === '0px' ? '0' : '300px');
        mobileMenu.css('right', mobileMenu.css('right') === '0px' ? '-300px' : '0');
    });

    function fechamenu() {
        if (mobileMenu.css('right') === '0px') {
            container.css('marginRight', '0');
            mobileMenu.css('right', '-300px');
        }
    }

    $(document).on('click', function (event) {
        var target = $(event.target);

        // Fecha o menu se o clique não estiver dentro do menu ou do botão de alternância
        if (!target.closest('.mobile-menu, .mobile-menu-toggle').length) {
            fechamenu();
        }
    });

    fechaMenu.click(fechamenu);

    mobileMenu.click(function (event) {
        event.stopPropagation();
    });
});
