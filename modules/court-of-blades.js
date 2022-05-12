import CourtCharacterSheet from './CourtCharacterSheet.js';

Hooks.on('init', () => {

    console.log(
` _____                  _            __  ______ _           _           
/  __ \\                | |          / _| | ___ \\ |         | |          
| /  \\/ ___  _   _ _ __| |_    ___ | |_  | |_/ / | __ _  __| | ___  ___ 
| |    / _ \\| | | | '__| __|  / _ \\|  _| | ___ \\ |/ _\` |/ _\` |/ _ \\/ __|
| \\__/\\ (_) | |_| | |  | |_  | (_) | |   | |_/ / | (_| | (_| |  __/\\__ \\
\\____/\\___/ \\___,_|_|  \\__|   \\___/|_|   \\____/|_|\\__,_|\\__,_|\\___||___/
`);

    Actors.registerSheet("blades-in-the-dark", CourtCharacterSheet, {
        types: ["character"],
        makeDefault: true,
        label: "Court of Blades Character Sheet"
    });

    //loads parts used for Cour Character Sheet
    loadTemplates([
        "modules/court-of-blades/templates/stress.html",
        "modules/court-of-blades/templates/attributes.html"
    ]);
});
