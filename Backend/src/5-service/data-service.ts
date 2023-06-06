import dal from "../4-utils/dal";
import { OkPacket } from "mysql";
import DevelopmentGroupModel from "../2-models/development-group-model";
import MeetingsModel from "../2-models/meetings-model";


async function getAllDevelopmentGroups(): Promise<DevelopmentGroupModel[]>{

    const sql = "SELECT * FROM developmentgroups";

    //Bring me the result of the query:
    const developmentGroup = await dal.execute(sql);

    return developmentGroup;

}


async function getMeetingByDevelopmentGroup(developmentGroupId: number): Promise<[MeetingsModel]>{

    const sql = "SELECT * FROM meetings WHERE developmentGroupId = ?";
    const meeting = await dal.execute(sql, [developmentGroupId]);
    return meeting;
    
    }
            
    
async function addMeeting(meeting: MeetingsModel): Promise<MeetingsModel> {
    const sql = "INSERT INTO meetings VALUES(DEFAULT, ?, ?, ?, ?, ?)";

    const result: OkPacket = await dal.execute(sql, 
    [meeting.developmentGroupId, meeting.startMeeting, meeting.endMeeting, meeting.meetingDescription, meeting.meetingRoom]);

   meeting.meetingId = result.insertId;

    return meeting;
}



export default{
    getAllDevelopmentGroups,
    getMeetingByDevelopmentGroup,
    addMeeting
    
    
}