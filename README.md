# 📈 Régression Linéaire – Évaluation Neurologique (EDSS)

Ce projet utilise **JavaScript** et **Plotly.js** pour simuler une analyse de régression linéaire appliquée à des données médicales fictives, en particulier pour évaluer la **sévérité neurologique** (via l’échelle **EDSS**) en fonction du **temps écoulé depuis l'apparition des symptômes**.

---

## 🚀 Fonctionnalités

- **Génération de données médicales aléatoires**
- **Calcul de la droite de régression linéaire** (coefficients `a` et `b`)
- **Visualisation interactive avec Plotly**
- **Affichage des coefficients statistiques** :
  - Moyennes `x̄` et `ȳ`
  - Coefficient de corrélation linéaire `r`
  - Coefficient de détermination `R²`
- **Formulaire de prédiction** de la sévérité à partir d’un nombre de jours saisi
- **Affichage d’un tableau de calculs intermédiaires** :  
  `(y - ȳ)`, `(x - x̄)`, produit `(y - ȳ)(x - x̄)` et carré `(x - x̄)²`

---

## 📊 Exemple d’utilisation

1. Le graphique s'affiche automatiquement avec les données simulées.
2. L'utilisateur peut saisir un nombre de jours depuis les premiers symptômes.
3. Le script calcule et affiche la prédiction de la sévérité (EDSS).
4. Le graphique inclut la droite de régression sur les points générés.

---

## 🧠 Technologies utilisées

- **JavaScript** (Vanilla)
- **[Plotly.js](https://plotly.com/javascript/)** pour la visualisation interactive

---

## 🧮 Méthodologie

La régression linéaire est calculée selon la formule :

y = a * x + b

markdown
Copier
Modifier

- `a` : pente de la droite, calculée par :

a = Σ[(x - x̄)(y - ȳ)] / Σ[(x - x̄)²]

markdown
Copier
Modifier

- `b` : ordonnée à l'origine :

b = ȳ - a * x̄

yaml
Copier
Modifier

Le coefficient de corrélation `r` et le coefficient de détermination `R²` sont également calculés pour évaluer la qualité de la prédiction.

---

## 📂 Fichiers principaux

- `index.html` : structure HTML de la page
- `script.js` : logique de calculs, graphiques et interactions
- `README.md` : documentation du projet

---

## 🧪 Exemple de prédiction

> **Entrée utilisateur :** 15 jours  
> **Résultat prédit :** sévérité EDSS = 5 *(valeur simulée selon les données)*

---

## 📸 Capture d'écran

*(Ajoutez ici une image du graphique ou de l'interface)*

---

## 📄 Licence

Ce projet est open-source et libre d’utilisation à des fins pédagogiques ou personnelles.

---

## 🙌 Auteurs

Développé dans un but pédagogique pour illustrer les principes de régression linéaire de manière visuelle et interactive.

