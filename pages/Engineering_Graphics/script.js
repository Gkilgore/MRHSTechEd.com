
// gallery js start 
$('.gallery ul li a').click(function () {
    var itemID = $(this).attr('href');
    $('.gallery ul').addClass('item_open');
    $(itemID).addClass('item_open');
    return false;
});
$('.close').click(function () {
    $('.port, .gallery ul').removeClass('item_open');
    return false;
});

$(".gallery ul li a").click(function () {
    $('html, body').animate({
        scrollTop: parseInt($("#top").offset().top)
    }, 400);
});
// gallery js end 

function calculateScore() {
    let score = 0;
    const questions = ["q1", "q2", "q3", "q4", "q5", "q6"];

    questions.forEach(q => {
        const answer = document.querySelector(`input[name="${q}"]:checked`);
        if (answer && answer.value === "yes") {
            score++;
        }
    });

    let resultText = "";
    if (score >= 5) {
        resultText = "You're a great fit for Engineering Graphics!";
    } else if (score >= 3) {
        resultText = "You might enjoy Engineering Graphics!";
    } else if (score >= 1){
        resultText = "Engineering Graphics may not be your thing, but you never know until you try!";
    } else {
    resultText = "Please Input Your Answers!";
    }
    document.getElementById("result").textContent = resultText;
}