const router = require('express').Router();
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
    console.log(newActor);
    newActor.save()
    .then(()=> res.json('Actor added'))
    .catch(err => res.status(400).json(err))
})

router.post('/:id',(req,res)=>{
    Actor.findByIdAndUpdate(req.params.id)
        .then(Actors => {
            Actors.username = req.body.username;
            Actors.description = req.body.description;
            Actors.duration = req.body.duration;

            Actors.save()
                .then(() => res.json('updated Actor'))
                .catch(err => res.status(400).json(err)) 
        })
        .catch(err => res.status(400).json(err))
})

router.delete('/:id',(req,res)=>{
    Actor.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Actor deleted'))
        .catch(err => res.status(400).json(err))
})

module.exports = router