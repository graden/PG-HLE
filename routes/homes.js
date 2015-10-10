var pgCon = require('./dbConnect');

exports.startPage = function(req, res) {

    pgCon.query('SELECT * FROM "dsGroups"', function(errGroups, resGroups)
    {
        if (errGroups) {
            console.error('Error = ', errGroups);
        }
        else
        {
            res.render('home.ejs', {
                username:    resGroups.rows[0].idGroups,
                txtGroup:    resGroups.rows[0].textGroups
            });

            pgCon.end();
        }
    });



};