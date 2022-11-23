const express = require('express')
const admin = require('firebase-admin');
var compare= require('./func.js')
const moment = require('moment');
const { Query } = require('mongoose');
admin.initializeApp();
const db = admin.firestore();
const router = express.Router();
const colletion = 'Project';


// Check service status 
router.get('/status', (req, res) => res.send('OK'));

router.get('/', async (req, res) => {
    const snapshot = await db.collection(colletion).get();
    const entities = []
    snapshot.forEach((doc) => {
        entities.push(doc.data());
    });
    res.json({
        results: entities,
        count: entities.length
    });
});

router.post('/', async (req, res) => {
    let t=  moment().format(); 
    let datetime = t.split('T')[0].split('-').join('/')+' '+t.split('T')[1].split('+')[0]
    const data = {เครื่องที่: compare(req.query.id), DateLogger: datetime};
    const addRequest = await db.collection('Project').add(data);

    res.json({
        status: 'OK',
        data: {
            ...data,
            id: addRequest.id,
            DateLogger: compare(req.query.id)
        }
    });
});

router.put('/:id', async (req, res) => {
    const {
        params
    } = req;
    const {
        id
    } = params;

    const data = {...req.body};
    const docRef = await db.collection(colletion).doc(id);
    const updateRequest = await docRef.update({...data});
    const doc = await docRef.get()
    res.json({
        status: 'OK',
        data: doc.data()
    });
});

router.delete('/', async (req, res) => {
    const snapshot = await db.collection(colletion).get();
    snapshot.forEach((doc) => {
       doc.ref.delete();
    });
    res.sendStatus(204);
});

module.exports = router;