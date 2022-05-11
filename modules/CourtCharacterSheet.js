import {BladesActorSheet} from "../../../systems/blades-in-the-dark/module/blades-actor-sheet.js"

export default class CourtCharacterSheet extends BladesActorSheet{
    get template(){
        console.log("CourCharacterSheet")
        return "modules/court-of-blades/templates/court-actor-sheet.html";
    }
}