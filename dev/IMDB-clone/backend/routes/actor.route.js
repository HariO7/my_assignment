const express = require("express");
const router = express.Router();
const Actor = require('../database/models/actor.model')


router.get('/',(req,res)=>{
    Actor.find()
    .then(actors => res.json(actors))
    .catch(err => res.json(err))
})

router.post('/add',(req,res)=>{
    const Name = req.body.Name;
    const Gender = req.body.Gender;
    const DOB = req.body.DOB;
    const Bio = req.body.Bio;

    const newActor = new Actor({
        Name,
        Gender,
        DOB,
        Bio
    })

    newActor.save()
    .then(()=> res.json('Actor added'))
    .catch(err => res.status(400).json(err))

})