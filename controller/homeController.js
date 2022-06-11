exports.index = (req, res) => {
    
    try {
        res.status(200).render('index').json({
            success: true,
        });
        
    } catch (error) {
        console.log(error);
        
    }
}

exports.dashboard = (req, res) => {
    try {
        res.status(200).render('dashboard').json({
            success: true,
        })
    } catch (error) {
        console.log(error);
    }
}