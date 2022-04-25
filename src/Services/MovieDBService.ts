import IMedia from "../Models/IMedia";

interface IDiscoveryTVResponse {
    page: number;
    results: Array<IMedia>;
    total_pages: number;
    total_results: number;
}

class MovieDBService {
    private apiKey: string;
    private baseUrl: string;
    private language: string;
    private timezone: string;
    private readonly DISCOVER_ENDPOINT = "discover/tv";

    public constructor(apiKey: string, baseUrl: string, language: string, timezone: string) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.language = language;
        this.timezone = timezone;
    }

    public async GetDiscoveries(page = 1, sortBy = "popularity.desc", includeNullFirstAirDates = false): Promise<Array<IMedia>> {
        const params = new URLSearchParams({
            api_key: this.apiKey,
            language: this.language,
            sort_by: sortBy,
            page: page.toString(),
            timezone: this.timezone,
            include_null_first_air_dates: includeNullFirstAirDates ? "true" : "false"
        });
        const url = `${this.baseUrl}/${this.DISCOVER_ENDPOINT}?` + params;
        const response = await fetch(url)
        if (response.ok) {
            let jsonResponse: IDiscoveryTVResponse = await response.json();
            return jsonResponse.results;
        } else {
            throw new Error(response.statusText);
        }
    }
}

export default MovieDBService;