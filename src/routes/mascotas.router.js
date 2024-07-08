const{Router}= require('express');

const router= Router();

const mascotasCtr1= require('../controllers/mascotas.controller');

router.get('/mascotas/hello',(req,res)=>res.send('hola amo!!'));

router.get('/mascotas/:id', mascotasCtr1.getMascota);

router.get('/mascotas', mascotasCtr1.getMascotas);

router.post('/mascotas', mascotasCtr1.createMascota);

router.delete('/mascotas/:id', mascotasCtr1.deleteMascota);

router.put('/mascotas/:id', mascotasCtr1.editMascota);

module.exports= router;
