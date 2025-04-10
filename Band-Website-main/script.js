// Dynamically generates boosters members in boosters.html accordion

const platinumMembers = ["Sara Axelrod-Malagold", "Kunjan Bhatt", "Swati Dhage", "Alicia Caputo Smith", "Wei Ou", "Karen Hao", "Alison and Thomas Tsim", "Peggy Sheehan", "Paula Groesbeck", "Nandini Thomas", "Katherine Trezza", "Kay Haeusser", "Lisa Gianna", "Jessica Ho", "Niranjan Mulay / Madhu Mahajan", "Marine Preap", "Rita Shteynberg", "Ushma Patel", "Anna Bobrowska"]

platinumMembers.forEach(member => {
    $('#platMembers').append(`<li>${member}</li>`);
});

const goldMembers = ["Robert Cameron", "Yanina Reznikov",]

goldMembers.forEach(member => {
    $('#golMembers').append(`<li>${member}</li>`);
});

const silverMembers = ["Michelle Wolf", "Betty Chang", "Melanie Chazanoff", "Chutchauan T", "Monika Kokosza", "Bheemesh Dwarampuri", "Lauren Faulkner", "Archana Kannughatta"]

silverMembers.forEach(member => {
    $('#silMembers').append(`<li>${member}</li>`);
});

const bronzeMembers = ["Lisa Cartelli", "Jamie Sobolewski",]

bronzeMembers.forEach(member => {
    $('#broMembers').append(`<li>${member}</li>`);
});


//Back to top button
// Get the button:
let topbutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Dynamically generates FAQ section

const questions = [`Do I need to perform in all the ensembles at MHS?`,
    `If I am a student at Marlboro HS, do I need to take band, choir, or orchestra as a class elective to participate in any of the performing ensembles?`, 
    `If I am a vocational student, can I perform in the MHS music program?`, 
    `Are there outside honors ensembles that I can audition for?`, 
    `Do I have the opportunity to be sponsored by Marlboro HS to audition for an outside honors ensemble such as All Shore, Region and All State level?`, 
    `Is there a limit on how many ensembles I can perform in?`, 
    `Can I participate in any of the music ensembles and be in a sport or other club?`, 
    `Is attendance to all rehearsals for all ensembles mandatory?`, 
    `Can I be in band, orchestra, and choir?`]

const answers = [`No, you can perform in any ensemble you wish to be a part of. However, the base requirement
is to participate in either of the “core” groups: Concert Band, Concert Choir or Concert
Orchestra in order to participate in another extracurricular ensemble.`, `Yes, the only exception is if you are in the business program.`, `Yes, but your hometown must be Marlboro Township. Also, you must participate in either
Concert Band, Concert Choir, or Concert Orchestra to be in any of the other ensembles.`, `Yes. Some of these ensembles include All Shore Band, All Shore Jazz Band, All Shore Chorus,
CJMEA Region Band, CJMEA Region Orchestra, CJMEA Region Choir, CJMEA Region Jazz Band,
All State Band, All State Choir, All State Orchestra and even All Eastern level ensembles.`, `Yes, but you must be an active member of at least the Concert Band, Concert Choir or Concert
Orchestra, and in good standing.`, `No, but you must adhere to the attendance policy of each ensemble.`, `Yes, but it is difficult. However, it takes planning on your part. Most of the music ensembles
practice once or twice a week. Sometimes, the rehearsals may not run at all based on the busy
schedule conflicted by another ensemble. The majority of sports practices take place usually 5-
7 days a week. The director asks for you to communicate with the coach the importance of our
practices and limited rehearsals compared to multiple practices a week for a sport. In cases
such as a dress rehearsal or concert, attendance is mandatory. On the other hand, games and
meets for sports should be a priority to our rehearsals. PLEASE COMMUNICATE!`, `Yes, unless you have a written excuse by a parent or guardian. If you do not, it is unexcused.
You are only allowed a certain number of excused/unexcused absences per ensembles and
concert cycle until you are dismissed from participation. Plan ahead! If you are planning a
doctor, dentist, etc. appointment, please check the calendar and attempt to avoid rehearsals if
possible. Dress rehearsals and concerts are mandatory.`, `Yes, but it takes planning. You are required to be in the class if you are a Marlboro student for
your primary performance. For example, if you are a saxophone student, you should take band
as a class. However, you may participate in the after-school rehearsals for the other ensembles
because they meet on different days. You are expected to practice on the same level as you
would for your primary performance. There will be time when you are a junior or senior that
you can take multiple electives in your schedule.`]

var i = 0
questions.forEach(question => {
    $(`#accordionExample`).append(
        `<div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapseOne">
                    ${question}
                </button>
            </h2>
            <div id="collapse${i}" class="accordion-collapse collapse"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <h6>${answers[i]}</h6>
                </div>
            </div>
        </div>`
    )
    i++
});