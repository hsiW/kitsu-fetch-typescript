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
    constructor(id: number, data: any);
    get url(): string;
}
//# sourceMappingURL=Anime.d.ts.map