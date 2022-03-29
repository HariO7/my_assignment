const router = require('express').Router()
const Producer = require('../database/models/producer.model')


router.get('/',(req,res)=>{
    Producer.find()
    .then(Producers => res.json(Producers))
    .catch(err => res.json(err))
})

router.post('/add',(req,res)=>{
    const Name = req.body.Name;
    const Gender = req.body.Gender;
    const DOB = req.body.DOB;
    const Bio = req.body.Bio;

    const newProducer = new Producer({
        Name,
        Gender,
        DOB,
        Bio
    })
    console.log(newProducer);
    newProducer.save()
    .then(()=> res.json('Producer added'))
    .catch(err => res.status(400).json(err))
})

router.post('/:id',(req,res)=>{
    Producer.findByIdAndUpdate(req.params.id)
        .then(Producers => {
            Producers.username = req.body.username;
            Producers.description = req.body.description;
            Producers.duration = req.body.duration;

            Producers.save()
                .then(() => res.json('updated Producer'))
                .catch(err => res.status(400).json(err)) 
        })
        .catch(err => res.status(400).json(err))
})

router.delete('/:id',(req,res)=>{
    Producer.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Producer deleted'))
        .catch(err => res.status(400).json(err))
})

module.exports = router