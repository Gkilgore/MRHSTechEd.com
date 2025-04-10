
$(document).ready(function () {
    $('.hiddenContent').hide();

    $('.question').click(function () {
        $(this).toggleClass('active');
        $(this).next('.hiddenContent').slideToggle();
    });


    $(document).ready(function () {
        $('.toggle-button').on('click', function () {
            $('.information').toggle();
        });
    });

    $('.project-image').on('mouseenter', function (event) {
        $(event.currentTarget).next('.project-description').fadeIn(800);
    });

    $('.project-image').on('mouseleave', function (event) {
        $(event.currentTarget).next('.project-description').fadeOut(500);
    });
})


//code for top button

$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $("#scrollTopBtn").fadeIn();
    } else {
        $("#scrollTopBtn").fadeOut();
    }
});

$("#scrollTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

//gallery title

let text = "Welcome to the Gallery!";
let index = 0;

function typeText() {
    if (index < text.length) {
        $("#typing-effect").append(text.charAt(index));
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();


//vue for gallery carousels 
const vue_app = Vue.createApp({

    data() {
        return {
            pageTitle: 'Gallery',
            projects: [
                {
                    title: 'Adobe Photoshop Projects',
                    modalTitle: 'Adobe Photoshop',
                    bgImage: 'img/bluebg.jpeg',
                    images: ['img/nj.JPG', 'img/color.jpg', 'img/candyface.png']
                },
                {
                    title: 'Logos',
                    modalTitle: 'Logos',
                    bgImage: 'img/bluebg.jpeg',
                    images: ['img/hawaiiposter.jpg', 'img/company1.jpg', 'img/logo.JPG']
                },
                {
                    title: 'More Restaurant Projects',
                    modalTitle: 'Restaurant Logo Projects',
                    bgImage: 'img/bluebg.jpeg',
                    images: ['img/menus.jpg', 'img/IMG_4462.JPG', 'img/tshirt.JPG']
                },
                {
                    title: 'More Photoshop Projects',
                    modalTitle: 'Photoshop Projects',
                    bgImage: 'img/bluebg.jpeg',
                    images: ['img/apartment.png', 'img/todolist.JPG', 'img/typography.png']
                }
            ]
        };
    },
    methods: {
        openModal(index) {
            const modalId = "#carouselModal" + index;
            const modalEl = document.querySelector(modalId);
            const modal = new bootstrap.Modal(modalEl);
            modal.show();
        }
    }
})
vue_app.mount("#vue_app")

