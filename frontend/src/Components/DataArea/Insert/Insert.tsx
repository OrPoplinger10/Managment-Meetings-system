import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DevelopmentGroupModel from "../../../models/DevelopmentGroupModel";
import MeetingsModel from "../../../models/MeetingsModel";
import dataService from "../../../Services/DataService";
import notifyService from "../../../Services/NotifyService";
import "./Insert.css";

function Insert(): JSX.Element {
    

    const[developmentGroups, setDevelopmentGroups] = useState<DevelopmentGroupModel[]>([]);

    useEffect(()=>{
        dataService.getAllDevelopmentGroups()
        .then(dbDevelopmentGroups => setDevelopmentGroups(dbDevelopmentGroups))
        .catch(err => notifyService.error(err));

    }, []);

    const{register, handleSubmit} = useForm<MeetingsModel>();

    const navigate = useNavigate()

    // Send to backend
    function send(gift: MeetingsModel): void {
        dataService.addMeeting(gift)
        .then(()=>{
notifyService.success("New Meeting has been added");
navigate("/list");

        })
        .catch(err => notifyService.error(err))

    }


    return (
        <div className="Insert">
            <h2>Add Meetings</h2>
             <form onSubmit={handleSubmit(send)}>

<label>Development Group: </label>
<select defaultValue=""{...register("developmentGroupId")} required>
 <option disabled value="">Select Development Group...</option>
 {developmentGroups.map(d => <option key={d.developmentGroupId} value={d.developmentGroupId}>{d.nameDevelopmentGroup}</option>)}
</select>

<label>Start Meeting: </label>
<input type="datetime-local" {...register("startMeeting")} required min="2023-06-20T00:00" />


<label>End meeting: </label>
<input type="datetime-local"  {...register("endMeeting")} required min="2023-06-20T00:00"  />

<label>Meeting Description: </label>
<input type="text" {...register("meetingDescription")} required   />

<label>Meeting Room: </label>
<input type="text"  {...register("meetingRoom")} required   />



<button>Add</button>

 </form>
            
			
        </div>
    );
}

export default Insert;
