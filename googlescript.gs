// Trigger this function whenever a new response is submitted
function onFormSubmit(e) {
// Form ID, for example:   
// 1ANQfgJQFzRMm0dvdvflUfBPXH6P6TgSfsssUDq8JmOrJYUJi55k
var formID = '<form-id>';
// The token you created earlier:
// b8f68c5c031b87fedb0b6a0c5e9d2030bc8f1cf1
var ghtoken = '<github-token>';
// This is your GitHub user name, for me:
// florianmoss
var ghusername = '<username>';
// The repo name, if you followed the instructions:
// hugo-demo
var ghreponame = '<repo-name>';
// This is the person receiving a notification upon new submissions
// for me: fmoss@example.com
var notificationEmail = '<notificationEmail>';
// Reference to the Form
var form = FormApp.openById(formID);
// Get all the responses, then store the content from the last 
// submitted response
var formResponses = form.getResponses();
var formResponse = formResponses[formResponses.length - 1];
var itemResponses = formResponse.getItemResponses();
// Create the file in the right format with content from received 
// response.
// The array position might be different for you, depending on how // you created the form. Simply map the appropriate form positions // to the array index (starting from 0). What you will see is that // the file created looks like the Post that was pointed our earlier
var content = `
--- \n
title: "${itemResponses[1].getResponse()}"
description: "${itemResponses[2].getResponse()}"
date: ${itemResponses[5].getResponse()}
draft: false
author: "${itemResponses[4].getResponse()}"
image: "${itemResponses[3].getResponse()}"
categories:
- "${itemResponses[6].getResponse()}"
tags:
- "${itemResponses[7].getResponse()}"
type: 'post'
external: "${itemResponses[0].getResponse()}"
---
`
// Create a unique file name with current timestamp
var fileName = Utilities.formatDate(new Date(), 'GMT', "yyyy-MM-dd'T'HH:mm:ss'Z'");
// Make a POST request with a JSON payload.
var data = {
'message': 'New Site Submission from' + itemResponses[4].getResponse(),
'committer': {
'name': itemResponses[4].getResponse(),
'email': itemResponses[4].getResponse() + '@noreply.com'
},
'content': Utilities.base64Encode(content),
'branch': 'new-submission'
};
var options = {
'method': 'put',
'headers': {
"Authorization": "token " + ghtoken
},
'contentType': 'application/json',
// Convert the JavaScript object to a JSON string.
'payload': JSON.stringify(data)
};


// make the PUT request to create a new file with the content
UrlFetchApp.fetch('https://api.github.com/repos/' + ghusername + '/' + ghreponame + '/contents/content/blog/post-' + fileName + '.md', options);


// create the data for the pull request
var data = {
'title': 'There is a new submission from: ' + itemResponses[4].getResponse(),
'body': 'Please merge this new submission',
'head': 'new-submission',
'base': 'master'
};


var options = {
'method': 'post',
'headers': {
"Authorization": "token " + ghtoken
},
'contentType': 'application/json',
// Convert the JavaScript object to a JSON string.
'payload': JSON.stringify(data)
};


// make the POST request to open the pull request.
UrlFetchApp.fetch('https://api.github.com/repos/' + ghusername + '/' + ghreponame + '/pulls', options);


// send a mail notification to the specified person.
var response = "There is a new submission for the website";
MailApp.sendEmail({
to: notificationEmail,
subject: "New Submission for Website",
htmlBody: content
});
}
