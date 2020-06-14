export default class Manga {
    id: number;
    type: string;
    titles: { 
        english: string | null; 
        romanji: string | null; 
        canonical: string | null; 
        abbrivated: string | null; 
    };
    synopsis: string | null;
    volumeCount: number | null;
    chapterCount: number | null;
    startDate: string | null;
    endDate: string | null;
    ageRating: string | null;
    ageRatingGuide: string | null;
    rating: number | null;
    ratingRank: number | null;
    popularityRank: number | null;
    images: { 
        posterImage: any | null; 
        coverImage: any | null; 
    };
	constructor(id: number, data: any) {
		this.id = id;

		this.type = data.subtype;

		this.titles = {
			english: data.titles.en || null,
			romanji: data.titles.en_jp || null,
			canonical: data.canonicalTitle || null,
			abbrivated: data.abbrivatedTitles || [],
		}

		this.synopsis = data.synopsis || null;

		this.volumeCount = data.volumeCount || null;
		this.chapterCount = data.chapterCount || null;

		this.startDate = data.startDate || null;
		this.endDate = data.endDate || null;

		this.ageRating = data.ageRating || null;
		this.ageRatingGuide = data.ageRatingGuide || null;

		this.rating = parseFloat(data.averageRating) || null;
		this.ratingRank = data.ratingRank || null;
		this.popularityRank = data.popularityRank || null;

		this.images = {
			posterImage: data.posterImage || null,
			coverImage: data.coverImage || null,
		}
	}

	get url(): string {
		return `https://kitsu.io/manga/${this.id}/`
	}
}