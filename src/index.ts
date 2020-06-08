import { default as fetch, Response } from 'node-fetch';
import Anime from 'Classes/Anime';
import Manga from 'Classes/Manga';
import Character from 'Classes/Character';

async function searchAnime(searchArgs: string, pageOffset = 0): Promise<Anime[]> {
  const response: any[] = await request(`/anime?${encodeURIComponent(`filter[text]=${searchArgs}&page[offset]=${pageOffset}`)}`);

  return response.map(anime => new Anime(anime.id, anime.attributes));
}

async function getAnime(animeID: number): Promise<Anime> {
  const anime: any = await request('/anime/' + animeID);

  return new Anime(anime.id, anime.attributes);
}

async function searchManga(searchArgs: string, pageOffset = 0): Promise<Manga[]> {
  const response: any[] = await request(`/manga?${encodeURIComponent(`filter[text]=${searchArgs}&page[offset]=${pageOffset}`)}`);

  return response.map(manga => new Manga(manga.id, manga.attributes));
}

async function getManga(mangaID: number): Promise<Manga> {
  const manga: any = await request('/manga' + mangaID);
  
  return new Manga(manga.id, manga.attributes);
}

async function searchCharacters(searchArgs: string, pageOffset = 0): Promise<Character[]> {
  const response: any[] = await request(`/characters?${encodeURIComponent(`filter[name]=${searchArgs}&page[offset]=${pageOffset}`)}`);

  return response.map(character => new Character(character.id, character.attributes));
}

async function getCharacter(characterID: number): Promise<Character> {
  const character = await request('/characters/' + characterID);

  return new Character(character.id, character.attributes);
}

async function request(url: string) {
  const response: Response = await fetch('https://kitsu.io/api/edge' + url, {
    method: 'GET',
		headers: {
			'Accept': 'application/vnd.api+json',
			'Content-Type': 'application/vnd.api+json',
		},
  });
  return (await response.json()).data;
}

export default {
  searchAnime,
  getAnime,
  searchManga,
  getManga,
  searchCharacters,
  getCharacter
}
