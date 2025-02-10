import express from "express";
import metaWorld from "./metaapis";
const router = express.Router();
router.get('/accessToken',async (req,res)=>{
    let URI=new URL(`https://${metaWorld.facebookLogin}/v22.0/me`);
    URI.searchParams.set('access_token',metaWorld.accessToken);
    URI.searchParams.set('fields','id');
    let response=await fetch(URI);
    let data=await response.json();
})
export default router;