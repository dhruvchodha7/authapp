exports.login = (req, res) => {
    try {
        res.status(200).render('login').json({
            success: true,
        })
    } catch (error) {
        console.log(error);
    }
}

exports.register = (req, res) => {
    try{
        res.status(200).render('register').json({
            success: true,
        })
    }catch(error){
        console.log(error);
    }

}