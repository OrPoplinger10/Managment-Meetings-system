import axios from "axios";
import DevelopmentGroupModel from "../models/DevelopmentGroupModel";
import MeetingsModel from "../models/MeetingsModel";
import appConfig from "../Utils/Appconfig";

class DataService {

    public async getAllDevelopmentGroups(): Promise<DevelopmentGroupModel[]>{
        const response = await axios.get<[]>(appConfig.developmentGroupUrl);
        const developmentGroups = response.data;
         return developmentGroups; 
    }

    public async getMeetingByDevelopmentGroup(developmentGroupId: number): Promise<MeetingsModel[]>{
        const response = await axios.get<MeetingsModel[]>(appConfig.meetingsByDevelopmentGroupUrl + developmentGroupId);
        const meeting = response.data;
         return meeting;
    }

    public async addMeeting(meeting: MeetingsModel): Promise<void> {
        const response = await axios.post<MeetingsModel>(appConfig.addMetingUrl, meeting);
        const addedMeeting = response.data;
         console.log(addedMeeting);
    }

}


const dataService = new DataService();

export default dataService