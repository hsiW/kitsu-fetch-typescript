"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const Anime_1 = __importDefault(require("Classes/Anime"));
const Manga_1 = __importDefault(require("Classes/Manga"));
const Character_1 = __importDefault(require("Classes/Character"));
async function searchAnime(searchArgs, pageOffset = 0) {
    const response = await request(`/anime?${encodeURIComponent(`filter[text]=${searchArgs}&page[offset]=${pageOffset}`)}`);
    return response.map(anime => new Anime_1.default(anime.id, anime.attributes));
}
async function getAnime(animeID) {
    const anime = await request('/anime/' + animeID);
    return new Anime_1.default(anime.id, anime.attributes);
}
async function searchManga(searchArgs, pageOffset = 0) {
    const response = await request(`/manga?${encodeURIComponent(`filter[text]=${searchArgs}&page[offset]=${pageOffset}`)}`);
    return response.map(manga => new Manga_1.default(manga.id, manga.attributes));
}
async function getManga(mangaID) {
    const manga = await request('/manga' + mangaID);
    return new Manga_1.default(manga.id, manga.attributes);
}
async function searchCharacters(searchArgs, pageOffset = 0) {
    const response = await request(`/characters?${encodeURIComponent(`filter[name]=${searchArgs}&page[offset]=${pageOffset}`)}`);
    return response.map(character => new Character_1.default(character.id, character.attributes));
}
async function getCharacter(characterID) {
    const character = await request('/characters/' + characterID);
    return new Character_1.default(character.id, character.attributes);
}
async function request(url) {
    const response = await node_fetch_1.default('https://kitsu.io/api/edge' + url, {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json',
        },
    });
    return (await response.json()).data;
}
exports.default = {
    searchAnime,
    getAnime,
    searchManga,
    getManga,
    searchCharacters,
    getCharacter
};
//# sourceMappingURL=index.js.map