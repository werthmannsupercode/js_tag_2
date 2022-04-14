//lev1_2_js_einführung_inner_html

let headLine1 = document.getElementById('info');
let conTainer = document.getElementById('container');
let galLery = document.getElementById('gallery');

headLine1.innerHTML = "<h1>Hello World!</h1>";
headLine1.innerHTML += "<h2>How are you?</h2>";

conTainer.innerHTML = "<p>start of the element</p>";
document.write('end of the element');

//lev1_3_js_einführung_inner_html

galLery.innerHTML = '<figure><img src = "assets/img/photo-1649829875805-fe55430ed9cd.avif" alt = "Blumen"><figcaption>Fig.1</figcaption></figure >' + '<figure><img src = "assets/img/photo-1649829875805-fe55430ed9cd.avif" alt = "Blumen"><figcaption>Fig.2</figcaption></figure >' + '<figure><img src = "assets/img/photo-1649829875805-fe55430ed9cd.avif" alt = "Blumen"><figcaption>Fig.3</figcaption></figure >';

//lev1_1_intro_function

function intro() {
    let a = 1 + 3;
    console.log(a);
    console.log('Hello World');
    console.log('“1+3 = ” + a');

}

intro();

//lev1_2_intro_function

function intro2(paramName) {
    let varName = "SuperCoder";
    paramName = "Michaela";
    console.log('Hi, ' + varName + '. Mein Name ist ' + paramName + ' .');
}

intro2();

//lev1_3_intro_function

function intro3(name, stadt, alter) {
    name = "Michaela";
    stadt = "Waigolshausen";
    alter = 34;
    console.log('Hallo, mein Name ist ' + name + '. Ich bin ' + alter + ' Jahre alt. Ich komme aus ' + stadt + '.');
}

intro3();

//lev1_5: function multiplikation und division

function math(a, b) {
    console.log(a * b);
    console.log(a / b);
}

math(10, 2);
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);