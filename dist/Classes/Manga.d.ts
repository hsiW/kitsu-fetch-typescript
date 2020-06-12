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
        posterImage: string | null;
        coverImage: string | null;
    };
    constructor(id: number, data: any);
    get url(): string;
}
//# sourceMappingURL=Manga.d.ts.map