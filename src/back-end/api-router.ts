import express from "express";
import metaWorld from "./metaapis";
const router = express.Router();
router.get('/userDetails',async (req,res)=>{
    let uri=new URL(`${metaWorld.metaHost}/me`);
    uri.searchParams.set('access_token',metaWorld.profSell.accessToken);
    let data=await (await fetch(uri)).json();
    console.log(data);
    res.json(data);
})
export default router;