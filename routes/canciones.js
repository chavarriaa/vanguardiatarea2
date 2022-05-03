let express = require('express');
let router = express.Router();


router.post('/canciones',(req,res)=>{
try{
    res.status(200).json({
        type:"succeded",
        message:`Respuesta a ${req.method}`,
        data:req.body
    })
}catch (err){
    console.log(err)
    res.status(400).json({
        type:"fail",
        message:`Respuesta a ${req.method}`,
        data:err
    })
}
})

router.put('/canciones/:id',(req,res)=>{
 try{
 
        res.status(200).json({
            type:"succeded",
            message:`Respuesta a ${req.method}`,
            data:{
                parametros:{...req.params},
                detalle:{...req.body}
            }
        })
    }catch (err){
        console.log(err)
        res.status(400).json({
            type:"fail",
            message:`Respuesta a ${req.method}`,
            data:err
        })
    }
})

router.delete('/canciones/:id',(req,res)=>{
        try{
            res.status(200).json({
                type:"succeded",
                message:`Respuesta a ${req.method}`,
                data:{
                    parametros:{...req.params},
                }
            })
        }catch (err){
            console.log(err)
            res.status(400).json({
                type:"fail",
                message:`Respuesta a ${req.method}`,
                data:err
            })
        }
})


router.get('/canciones',(req,res)=>{
    //res.sendFile(path.join('./public/html/songs.html'),{ root: __dirname })
    res.sendFile('songs.html',{ root: './public/html' })
})



router.get('/canciones/descargar/:songID',(req,res)=>{
    try{
        let {songID} = req.params;

        switch (songID){
            case "iuahsd9":
                res.download('files/The Beatles - Act Naturally.mid');
            break;
            case "inuf93f+s":
                res.download('files/THE DOORS.The Doors K.mid');
            break;
            case "lkjf80ccs":
                res.download('files/All-Time-Is-Playing-Jazz-Rock.mid');
            break;
            case "mvnuvi9":
                res.download('files/Dr Dre - Still Dre.mid');
            break;
            case "fnf7fof":
                res.download("files/Wii Channels - Mii Channel.mid")
            break;
        }

    }catch(err){

    }
})


module.exports = router;