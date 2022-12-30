export interface Games{
    id: number;
    date: string;
    home_team: {
        abbreviation: string,
        city: string,
        conference: string,
        division: string,
        full_name: string,
        id: number,
        name: string
    };
    home_team_score: number;
    period: number;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    visitor_team: {
        abbreviation: string,
        city: string,
        conference: string,
        division: string,
        full_name: string,
        id: number,
        name: string
    };
    visitor_team_score: number;
}
