const fakeList = {
    totallyRandomID: {
    student: 'Billy Bob Student',
    tutor: "Alfred Madere",
    duration: 1.5, 
    startTime: "4:30pm",
    date: "5/6/21",
    subject: "Math",
    status: 'occured',
    notes: 'ayo'
  },
  totallyRandomID2: {
    student: 'Ally Sapire',
    tutor: "Alfred Madere",
    duration: 1.5, 
    startTime: "7:30pm",
    date: "5/24/21",
    subject: "Pre Cal",
    status: 'logged',
    notes: ''
  },
}

exports.sessionInfo = function(req, res, next){
    let sessionId = req.query.id;
    if(sessionId in fakeList){
        res.json(fakeList[sessionId]);
    }else{
        res.sendStatus(404);
    }
    
}