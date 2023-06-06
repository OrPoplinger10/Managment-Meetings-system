import { ChangeEvent, useEffect, useState } from "react";
import DevelopmentGroupModel from "../../../models/DevelopmentGroupModel";
import MeetingsModel from "../../../models/MeetingsModel";
import dataService from "../../../Services/DataService";
import notifyService from "../../../Services/NotifyService";

import "./List.css";

function List(): JSX.Element {

    const[developmentGroups, setDevelopmentGroups] = useState<DevelopmentGroupModel[]>([]);

    const [meetings, setMeetings] = useState<MeetingsModel[]>([]);


    useEffect(()=>{
        dataService.getAllDevelopmentGroups()
        .then(dbDevelopmentGroups => setDevelopmentGroups(dbDevelopmentGroups))
        .catch(err => notifyService.error(err));

    }, []);

    function getMeetings(args: ChangeEvent<HTMLSelectElement>): void {
        const developmentGroupId = +args.target.value;
        dataService.getMeetingByDevelopmentGroup(developmentGroupId)
        .then(dbMeeting => setMeetings(dbMeeting))
        .catch(err => notifyService.error(err));
    }








    function formatTime(time:string): string {
        const dateObj = new Date(time);
        const dateString = dateObj.toLocaleDateString("en-GB");
        const timeString = dateObj.toLocaleTimeString("en-GB", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        });
        return `${dateString} | ${timeString}`;
        }



    return (
        <div className="List">
             <select defaultValue="0" onChange={getMeetings}>
            <option disabled value="0">Select Development Group...</option>
            {developmentGroups.map(d => <option key={d.developmentGroupId} value={d.developmentGroupId}>{d.nameDevelopmentGroup}</option>)}
          </select>

          <br/>
          <br/>

          <table>


            <thead>
         <tr>
            <th>Start Meeting</th>
            <th>End meeting</th>
            <th>Meeting Description</th>
            <th>Meeting Room</th>
           
</tr>
</thead>

 <tbody>
{meetings.map(m => <tr key={m.meetingId}>
    <td>{formatTime(m.startMeeting)}</td>
    <td>{formatTime(m.endMeeting)}</td>
    <td>{m.meetingDescription}</td>
    <td>{m.meetingRoom}</td>
   
</tr>)}
</tbody>
          </table>
        </div>
    )
    }
       
            

export default List;
