class AppConfig{
    public developmentGroupUrl = "http://localhost:4000/api/development-groups/";
    public meetingsByDevelopmentGroupUrl = "http://localhost:4000/api/meetings-by-development-groups/";
    public addMetingUrl = "http://localhost:4000/api/add-meeting/"
}

const appConfig = new AppConfig();

export default appConfig