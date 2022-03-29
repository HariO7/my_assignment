const router = require('express').Router()
const Movie = require('../database/models/movie.model')


router.get('/',(req,res)=>{
    Movie.find()
    .then(Movies => res.json(Movies))
    .catch(err => res.json(err))
})

router.post('/add',(req,res)=>{
    const Name = req.body.Name;
    const Release = new Date.now();
    const Plot = req.body.DOB;
    const Poster = req.body.Bio;

    const newMovie = new Movie({
        Name,
        Release,
        Plot,
        Poster
    })
    console.log(newMovie);
    newMovie.save()
    .then(()=> res.json('Movie added'))
    .catch(err => res.status(400).json(err))
})

router.post('/:id',(req,res)=>{
    Movie.findByIdAndUpdate(req.params.id)
        .then(Movies => {
            Movies.username = req.body.username;
            Movies.description = req.body.description;
            Movies.duration = req.body.duration;

            Movies.save()
                .then(() => res.json('updated Movie'))
                .catch(err => res.status(400).json(err)) 
        })
        .catch(err => res.status(400).json(err))
})

router.delete('/:id',(req,res)=>{
    Movie.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Movie deleted'))
        .catch(err => res.status(400).json(err))
})

module.exports = router