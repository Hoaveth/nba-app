export interface Games{
    id: number;
    date: string;
    home_team: object;
    home_team_score: number;
    period: number;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    visitor_team: object;
    visitor_team_score: number;
}
