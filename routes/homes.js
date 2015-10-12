var pgCon = require('../middleware/dbConnect');

exports.startPage = function(req, res) {

    pgCon.query('SELECT * FROM "dsGroups" WHERE "dsGroups"."idGroups"=1', function(errGroups, resGroups)
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