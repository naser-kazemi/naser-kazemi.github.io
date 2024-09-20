
require('./styles.scss');

var Flickity = require('flickity');
require('flickity-imagesloaded');

var $carousels = new Array();

// Modals

var rootEl = document.documentElement;
var $modals = getAll('.modal');
var $modalTriggers = getAll('.modal-trigger');
var $modalCloses = getAll('.modal-card-head .delete, .modal-card-foot .button');

if ($modalTriggers.length > 0) {
    $modalTriggers.forEach(function ($el) {
        $el.addEventListener('click', function () {
            var target = $el.dataset.target;
            openModal(target);
        });
    });
}

if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
        $el.addEventListener('click', function () {
            closeModals();
        });
    });
}

function openModal(target) {
    var $target = document.getElementById(target);
    rootEl.classList.add('is-clipped');
    $target.classList.add('is-active');
    var carouselId = target + '-carousel';

    if (document.querySelector('#' + carouselId)) {
        // Initialize each carousel one time only
        if ($carousels.length === 0) {
            $carousels.push(initCarousel(carouselId));
        }
        else {
            var index = $carousels.findIndex(c => c.element.id == carouselId);
            if (index === -1) {
                $carousels.push(initCarousel(carouselId));
            }
        }
    }
}

function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach(function ($el) {
        $el.classList.remove('is-active');
    });
}

// Functions

function initCarousel(id) {
    return new Flickity('#' + id, {
        imagesLoaded: true,
        adaptiveHeight: true // https://github.com/metafizzy/flickity/issues/11
    });
}

function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}

// Update content from CV and Transcript
document.addEventListener('DOMContentLoaded', function () {
    // About Me Section
    document.getElementById('about-me').innerHTML = `
        <h1>Naser Kazemi</h1>
        <p>Computer Engineering student at Sharif University of Technology, Tehran, Iran</p>
        <p>Email: naserkazemi2002@gmail.com</p>
    `;

    // Education Section
    document.getElementById('education').innerHTML = `
        <h2>Education</h2>
        <ul>
            <li><strong>B.Sc. in Computer Engineering</strong> - Sharif University of Technology, Tehran (2020 - Present)</li>
            <li>GPA: 19.27/20</li>
            <li><strong>Minor in Applied Mathematical Science</strong> - Sharif University of Technology (2021 - Present)</li>
        </ul>
    `;

    // Research Section
    document.getElementById('research').innerHTML = `
        <h2>Research Projects</h2>
        <ul>
            <li><strong>Interactive Video Generation and World Models</strong> - INSAIT, Sofia, Bulgaria (2024)</li>
            <li>Supervised by Prof. Luc Van Gool & Prof. Danda Paudel</li>
            <li><strong>Multi-Objective Optimization Evolutionary Algorithms</strong> - Max Planck Institutes, Saarbrücken (2023)</li>
            <li>Supervised by Prof. Vahid Babaie</li>
        </ul>
    `;

    // Work Experience Section
    document.getElementById('work-experience').innerHTML = `
        <h2>Work Experience</h2>
        <ul>
            <li><strong>Machine Learning Team Member</strong> - Wize Analytics, Tehran (2022)</li>
            <li>Worked on Text mining, Anomaly Detection in Time Series, and Server Resources Controller</li>
        </ul>
    `;

    // Skills Section
    document.getElementById('skills').innerHTML = `
        <h2>Technical Skills</h2>
        <ul>
            <li>Programming Languages: Java, C/C++, C#, Python, Scala, CUDA, R</li>
            <li>Libraries & Frameworks: PyTorch, TensorFlow, Scikit-Learn, Jax, Hadoop, Spark, Kafka</li>
            <li>Tools: Linux, LATEX, Vim</li>
        </ul>
    `;

    // Awards Section
    document.getElementById('awards').innerHTML = `
        <h2>Awards and Honors</h2>
        <ul>
            <li>Ranked 5th in National University Entrance Exam (2020)</li>
            <li>Gold Medal in European Mathematical Cup (2018)</li>
        </ul>
    `;
});
