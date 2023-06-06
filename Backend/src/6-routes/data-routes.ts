import express, {Request, Response, NextFunction} from "express";
import MeetingsModel from "../2-models/meetings-model";
import dataService from "../5-service/data-service";

const router = express.Router();

router.get("/development-groups", async(request: Request, response: Response, next: NextFunction) => {
    try{
      const developmentGroups = await dataService.getAllDevelopmentGroups();
         response.json(developmentGroups);
    }
    catch(err: any){

        next(err)
    }
})

router.get("/meetings-by-development-groups/:developmentGroupId([0-9]+)", async(request: Request, response: Response, next: NextFunction) => {
    try{
       const developmentGroupId = +request.params.developmentGroupId;
       const meeting = await dataService.getMeetingByDevelopmentGroup(developmentGroupId);
         response.json(meeting);

    }
    catch(err: any){

        next(err)
    }
})

router.post("/add-meeting", async(request: Request, response: Response, next: NextFunction) => {
    try{
       const meeting = new MeetingsModel(request.body);
       const addedMeeting = await dataService.addMeeting(meeting);
         response.status(201).json(addedMeeting);
    }
    catch(err: any){

        next(err)
    }
})


export default router