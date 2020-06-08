export default class Anime {
    id: number;
    type: string | null;
    titles: { 
        english: string | null; 
        romanji: string | null; 
        japanese: string | null; 
        canonical: string | null; 
        abbrivated: string[] | []; 
    };
    synopsis: string | null;
    episodeCount: number | null;
    episodeLength: number | null;
    startDate: string | null;
    endDate: string | null;
    ageRating: string | null;
    ageRatingGuide: string | null;
    rating: number | null;
    ratingRank: number | null;
    popularityRank: number | null;
    userCount: number | null;
    favoritesCount: number | null;
    nsfw: boolean;
    images: { 
        posterImage: string | null; 
        coverImage: string | null; 
    };
    constructor(id: number, data: any) {
		this.id = id;

		this.type = data.subtype || null;

		this.titles = {
			english: data.titles.en || null,
			romanji: data.titles.en_jp || null,
			japanese: data.titles.ja_jp || null,
			canonical: data.canonicalTitle || null,
			abbrivated: data.abbrivatedTitles || [],
		}

		this.synopsis = data.synopsis || null;

		this.episodeCount = data.episodeCount || null;
		this.episodeLength = data.episodeLength || null;

		this.startDate = data.startDate || null;
		this.endDate = data.endDate || null;

		this.ageRating = data.ageRating || null;
		this.ageRatingGuide = data.ageRatingGuide || null;

		this.rating = parseFloat(data.averageRating) || null;
		this.ratingRank = data.ratingRank || null;
		this.popularityRank = data.popularityRank || null;

		this.userCount = data.userCount || 0;
		this.favoritesCount = data.favoritesCount || 0;

		this.nsfw = data.nsfw;

		this.images = {
			posterImage: data.posterImage || null,
			coverImage: data.coverImage || null,
		}
	}

	get url(): string {
		return `https://kitsu.io/anime/${this.id}/`;
	}
}