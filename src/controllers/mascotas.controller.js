const mascotasCtr1={};

mascotasCtr1.getMascota= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM mascota WHERE id = ?',[id], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows[0]);
        })
    })
}

mascotasCtr1.getMascotas= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM mascota', (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows);
        })
    })
}

mascotasCtr1.createMascota= (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO mascota SET ?',[data], (err, mascota) => {
            res.redirect('/mascotas');
        })
    })
}

mascotasCtr1.deleteMascota= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM mascota WHERE id = ?',[id], (err, rows) => {
            res.json(rows);
        })
    })
}


mascotasCtr1.editMascota= (req, res) => {
    const data = req.body;
    const {id}= req.params;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('UPDATE mascota SET ? WHERE id = ?',[data, id], (err, mascota) => {
            this.getMascotas
        })
    })
}


module.exports=mascotasCtr1;