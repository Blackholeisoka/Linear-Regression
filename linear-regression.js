// Récupération du graphique
const TESTER = document.getElementById('tester');
let count = 100;

const medicalData = {
    y: [], 
    x: []
};


// Ajout des données pour x, y
for(let i = 15; i < count; i++){
    let min = i / 1.5;
    let max = i;

    medicalData.y.push(Math.floor(Math.random() * (max - min) + min));
    medicalData.x.push(i);
}

// Moyenne des x et y
let sommeY = medicalData.y.reduce((total, value) => total + value, 0);
let sommeX = medicalData.x.reduce((total, value) => total + value, 0);
let moyenneX = Math.floor(sommeX / medicalData.x.length);
let moyenneY = Math.floor(sommeY / medicalData.y.length);


// Calcul des écarts à la moyenne
let y_yb = [];
for(let i = 0; i < medicalData.y.length; i++){
    let calc = medicalData.y[i] - moyenneY;
    y_yb.push(calc);
}

let x_xb = [];
for(let i = 0; i < medicalData.x.length; i++){
    let calc = medicalData.x[i] - moyenneX;
    x_xb.push(calc);
}


// Produit des écarts pour chaque point
let y_ybx_xb = [];
for(let i = 0; i < medicalData.x.length; i++){
    let calc = y_yb[i] * x_xb[i];
    y_ybx_xb.push(calc);
}


// Somme des produits des écarts
let somme_y_ybx_xb = Math.floor(y_ybx_xb.reduce((total, value) => total + value, 0));


// Calcul des carrés des écarts de x
let x_xb2 = [];
for(let i = 0; i < medicalData.x.length; i++){
    let calc = x_xb[i] ** 2;
    x_xb2.push(calc);
}

let somme_x_xb2 = Math.floor(x_xb2.reduce((total, value) => total + value, 0));


// Calcul des coefficients de la droite
let a_ = somme_y_ybx_xb / somme_x_xb2;
let b_ = moyenneY - a_ * moyenneX;


// Création des points d'extrémité pour tracer la droite
let x_final = [];
let x1 = Math.min(...medicalData.x);
let x2 = Math.max(...medicalData.x);
x_final.push(x1, x2);

let y_final = [];
let y1 = b_ + a_ * x1;
let y2 = b_ + a_ * x2;
y_final.push(y1, y2);

// Calculer r et R2
let somme_y_yb2 = y_yb.reduce((total, value) => total + value ** 2);
let r = somme_y_ybx_xb / Math.sqrt(somme_x_xb2 * somme_y_yb2);
let R2 = r ** 2;

// Affichage du graphique avec Plotly
Plotly.newPlot(TESTER, [
    {
        y: medicalData.y,
        x: medicalData.x,
        type: 'scatter',
        mode: 'markers',
        marker: { size: 8, color: 'blue' },
        name: 'Données médicales'
    },
    {
        y: y_final,
        x: x_final,
        type: 'scatter',
        mode: 'lines',
        line: { color: 'red' },
        name: 'Droite de régression'
    }
], {
    title: 'Régression linéaire',
    xaxis: { title: 'Temps écoulé depuis l’apparition des symptômes (jours)' },
    yaxis: { title: 'Évaluation clinique de la sévérité neurologique (échelle EDSS)' },
    margin: { t: 50 }
}, {
    displayModeBar: false
});

// Get HTML Elements
const form = document.querySelector('form');
const p_days = document.querySelector('#days');
const p_result = document.querySelector('#result');

// Prediction form
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const input = e.target.elements[0].value;
    p_days.textContent = `l'apparition des symptômes(jours): ${input}j`;
    let calc = Math.floor(b_ + a_ * input);
    p_result.textContent = `sévérité neurologique(EDSS): ${calc}`;
});

// Afficher r et R2
const p_r = document.querySelector('#r');
const r2 = document.querySelector('#R2');

p_r.innerHTML = `Le coefficient de corrélation linéaire <strong><i>r</i></strong> est :<strong><i>${r.toFixed(2)}</strong></i>  tel que <strong><i>-1 < r < 1</i></strong></p>`;
r2.innerHTML = `Le coefficient de détermination <strong><i>R²</i></strong> est : <strong>${R2.toFixed(2)}</strong>, ce qui signifie que <strong>${(R2 * 100).toFixed(1)}%</strong> de la variation de <i>y</i> est expliquée par la variable <i>x</i>.`;

// Afficher la moyenne et la somme
const p_moyenne = document.querySelector('#moyenne');
const p_somme = document.querySelector('#somme');

p_moyenne.innerHTML = `(Moyenne) <strong><i>y: </strong></i>${moyenneY} <strong><i>x: </strong></i>${moyenneX}`;
p_somme.innerHTML = `(somme) <strong><i>(y - yb)(x - xb)</strong></i>: ${somme_y_ybx_xb} <strong><i>(x - xb)^2: </strong></i>${somme_x_xb2}`;

// Tableaux de calculs de données
const tbody = document.querySelector('#data_yx');
for(let i = 0; i < medicalData.x.length; i++){
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${medicalData.y[i]}</td>
    <td>${medicalData.x[i]}</td>
    <td>${y_yb[i]}</td>
    <td>${x_xb[i]}</td>
    <td>${y_ybx_xb[i]}</td>
    <td>${x_xb2[i]}</td>
    `;
    tbody.appendChild(tr);
}