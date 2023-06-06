
class MeetingsModel{
   public meetingId: number;
   public developmentGroupId: number;
   public startMeeting: string;
   public endMeeting: string;
   public meetingDescription: string;
   public meetingRoom: string;


   public constructor(meeting: MeetingsModel){
    this.meetingId = meeting.meetingId
    this.developmentGroupId = meeting.developmentGroupId
    this.startMeeting = meeting.startMeeting
    this.endMeeting = meeting.endMeeting
    this.meetingDescription = meeting.meetingDescription
    this.meetingRoom = meeting.meetingRoom

   }



}
export default MeetingsModel