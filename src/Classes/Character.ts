export default class Character {
    id: number;
    malId: number | null;
    name: string | null;
    description: string | null;
    images: any | null;
	constructor(id: number, data: any) {
		this.id = id;
		this.malId = data.malId || null;

		this.name = data.name;
		this.description = data.description || null;

		this.images = data.image || null;
	}

	get malURL(): string {
		return `https://myanimelist.net/character/${this.id}/`;
	}
}