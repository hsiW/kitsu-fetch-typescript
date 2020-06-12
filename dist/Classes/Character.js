"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    constructor(id, data) {
        this.id = id;
        this.malId = data.malId || null;
        this.name = data.name;
        this.description = data.description || null;
        this.images = data.image || null;
    }
    get malURL() {
        return `https://myanimelist.net/character/${this.id}/`;
    }
}
exports.default = Character;
//# sourceMappingURL=Character.js.map