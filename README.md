[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/dt7jbj9M)
# Opgave: Interaktiv Galleri-Side med SASS

## Introduktion
I denne opgave skal du bruge dine SASS-færdigheder til at skabe en interaktiv galleri-side. Formålet er at lære at strukturere og style en webapplikation ved hjælp af SASS, samt at arbejde med GitHub til versionskontrol og aflevering. Det er et krav, at din side valideres uden fejl.

## Opgavebeskrivelse
1. **Opsætning af Projekt:**
   - Klon dette repository til din lokale maskine.
   - Lav en ny branch til at arbejde på, f.eks. `dev`. 
   - Opret en grundlæggende HTML-struktur for din galleri-side (se vedlagte design).
   - Find billeder på f.eks. [Colourbox](https://www.colourbox.com/) eller hent dem dynamisk via et API efter eget valg.

2. **SASS Struktur:**
   - Opret en `scss` mappe i dit projekt.
   - Opret følgende SASS-filer:
     - `main.scss` (hovedfilen der importerer de andre filer)
     - `_variables.scss` (til dine variabler som farver, skrifttyper osv.)
     - `_mixins.scss` (til mixins)
     - `_base.scss` (grundlæggende styling som reset, typografi osv.)
     - `_layout.scss` (layout relateret styling)
     - `_components.scss` (styling til individuelle komponenter som billedkort, modals osv.)

3. **Styling med SASS:**
   - Brug variabler til at definere farveskema og skrifttyper.
   - Brug mixins til at skabe genanvendelige stykker CSS.
   - Style din galleri-side ved hjælp af de oprettede SASS-filer.
   - Brug BEM med nestede SASS regeler og mindst én SASS-funktion.

4. **Interaktivitet:**
   - Tilføj JavaScript for at gøre din galleri-side interaktiv (f.eks. ved at åbne billeder i en modal, filtrere billeder efter kategori osv.).
   - Sørg for at din styling understøtter de forskellige tilstande af galleriet (f.eks. hover-effekter, aktive tilstande osv.).

5. **Responsivt Design:**
   - Sørg for at din galleri-side er responsiv ved hjælp af media queries i SASS.

6. **Validering:**
   - Brug en HTML-validator til at sikre, at din side valideres uden fejl. Du kan bruge [W3C Markup Validation Service](https://validator.w3.org/) til dette formål.

7. **Aflevering:**
   - Commit og push dit færdige projekt til din `dev` branch på GitHub.
   - Lav en pull request til `main`.

## Vurderingskriterier
- Korrekt brug af SASS-struktur og -syntaks.
- Kreativitet og æstetik i designet.
- Funktionalitet og responsivitet af galleri-siden.
- Ingen valideringsfejl i HTML.

---

Held og lykke med opgaven! 😊
