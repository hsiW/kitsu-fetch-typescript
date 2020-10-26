"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacter = exports.searchCharacters = exports.getManga = exports.searchManga = exports.getAnime = exports.searchAnime = exports.Manga = exports.Character = exports.Anime = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const Anime_1 = __importDefault(require("./Classes/Anime"));
exports.Anime = Anime_1.default;
const Manga_1 = __importDefault(require("./Classes/Manga"));
exports.Manga = Manga_1.default;
const Character_1 = __importDefault(require("./Classes/Character"));
exports.Character = Character_1.default;
async function searchAnime(searchArgs, pageOffset = 0) {
    const response = await request(`/anime?${encodeURIComponent(`filter[text]=${searchArgs}&page[offset]=${pageOffset}`)}`);
    return response.map(anime => new Anime_1.default(anime.id, anime.attributes));
}
exports.searchAnime = searchAnime;
async function getAnime(animeID) {
    const anime = await request('/anime/' + animeID);
    return new Anime_1.default(anime.id, anime.attributes);
}
exports.getAnime = getAnime;
async function searchManga(searchArgs, pageOffset = 0) {
    const response = await request(`/manga?${encodeURIComponent(`filter[text]=${searchArgs}&page[offset]=${pageOffset}`)}`);
    return response.map(manga => new Manga_1.default(manga.id, manga.attributes));
}
exports.searchManga = searchManga;
async function getManga(mangaID) {
    const manga = await request('/manga' + mangaID);
    return new Manga_1.default(manga.id, manga.attributes);
}
exports.getManga = getManga;
async function searchCharacters(searchArgs) {
    const response = await request(`/characters?${encodeURIComponent(`filter[name]=${searchArgs}`)}`);
    return response.map(character => new Character_1.default(character.id, character.attributes));
}
exports.searchCharacters = searchCharacters;
async function getCharacter(characterID) {
    const character = await request('/characters/' + characterID);
    return new Character_1.default(character.id, character.attributes);
}
exports.getCharacter = getCharacter;
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
//# sourceMappingURL=index.js.map