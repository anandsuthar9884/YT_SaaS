const express = require('express');

const { fetchChannels } = require('../controller/channels-controller');
const { login, googleCallback, getUser, isAuthed, logout} = require('../controller/login-controller');
const { YTupload } = require('../controller/YTupload-controller');
const { newConversation, getConversation } = require('../controller/conversation-controller');
const { newMessage, getMessages } = require('../controller/message-controller');
const { googleOauthHandler } = require('../controller/session-controller');
const requireUser = require('../middleware/require-user');
const { getCurrentUser, getUsers } = require('../controller/user-controller');
const { S3upload, S3getFile } = require('../controller/S3-controller');
const { upload } = require('../service/s3-upload-service');



const route = express.Router();




route.get('/login', login);
route.get('/logout', logout);

route.get("/api/me", requireUser, getCurrentUser);

// route.get('/auth/google/callback', googleCallback);
route.get('/auth/google/callback', googleOauthHandler);

route.get('/authed', isAuthed);
route.get('/users', getUsers);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessages);

route.get('/get-channel-info', fetchChannels);
route.post('/upload-to-YT', YTupload);

route.post('/upload-to-S3', upload.single('file'), S3upload);
route.get('/getfile-S3/:key', S3getFile);


module.exports = route;