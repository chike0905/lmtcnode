var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { live: [
      {"date":"2017/8/15(Thu.)",
       "title":"Nobody Dies A Virgin,InFix,ANTIKNOCK pre.【Exist Episodes】",
       "venue":"Shinjuku ANTIKNOCK",
       "bands":"Layout my Torturechamber / Nobody Dies A Virgin / InFix / MASRAO / GIVEN BY THE FLAMES / おしゃめがね / EJECTS",
       "open":"17:30",
       "start":"18:00",
       "adv":"2000yen",
       "door":"2500yen"
      },
      {"date":"2017/8/15(Thu.)",
       "title":"Nobody Dies A Virgin,InFix,ANTIKNOCK pre.【Exist Episodes】",
       "venue":"Shinjuku ANTIKNOCK",
       "bands":"Layout my Torturechamber / Nobody Dies A Virgin / InFix / MASRAO / GIVEN BY THE FLAMES / おしゃめがね / EJECTS",
       "open":"17:30",
       "start":"18:00",
       "adv":"2000yen",
       "door":"2500yen"
      }
      ]
  });
});

module.exports = router;
