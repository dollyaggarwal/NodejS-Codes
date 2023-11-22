import { userEvents } from "./userEvents.mjs";
const userEvent = new userEvents();    

function saveToDatabase(){
    console.log('Saving post to Database');
}
function sendNotifications(){
    console.log('Sending Notifications');
}
function updateTimeline(){
    console.log('Updating Timeline');
}
userEvent.addListener('postCreated', saveToDatabase);
userEvent.addListener('postCreated', sendNotifications);
userEvent.addListener('postCreated', updateTimeline);
userEvent.createPost('This is my first post');