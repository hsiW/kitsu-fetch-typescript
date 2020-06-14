import Anime from './Classes/Anime';
import Manga from './Classes/Manga';
import Character from './Classes/Character';
declare function searchAnime(searchArgs: string, pageOffset?: number): Promise<Anime[]>;
declare function getAnime(animeID: number): Promise<Anime>;
declare function searchManga(searchArgs: string, pageOffset?: number): Promise<Manga[]>;
declare function getManga(mangaID: number): Promise<Manga>;
declare function searchCharacters(searchArgs: string, pageOffset?: number): Promise<Character[]>;
declare function getCharacter(characterID: number): Promise<Character>;
export { Anime, Character, Manga, searchAnime, getAnime, searchManga, getManga, searchCharacters, getCharacter };
//# sourceMappingURL=index.d.ts.map