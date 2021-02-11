// Trigger this function whenever a new response is submitted
function onFormSubmit(e) {
    // Reference to the Form
    var form = FormApp.openById('<id>>');
    // Get all the responses, then store the content from the last submitted response
    var formResponses = form.getResponses();
    var formResponse = formResponses[formResponses.length-1];
    var itemResponses = formResponse.getItemResponses();
  
    // Create the file in the right format with content from received response
var content = `
--- \n
title: "${itemResponses[2].getResponse()}"
date: ${itemResponses[4].getResponse()}
draft: false
author: "${itemResponses[3].getResponse()}"
image: "${itemResponses[1].getResponse()}"
categories:
- "${itemResponses[5].getResponse()}"
tags:
- "${itemResponses[6].getResponse()}"
type: "post"
external: "${itemResponses[0].getResponse()}"
---
`
  // Create a unique file name with current timestamp
  var fileName = Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd'T'HH:mm:ss'Z'");
  
  // Make a POST request with a JSON payload.
  var data = {
    'message': 'New Post',
    'committer': {
      "name": "Florian Moss",
      "email": "me@florianmoss.eu"
     },
    'content': Utilities.base64Encode(content)
  };
  
  var options = {
    'method' : 'put',
    'headers': {
      "Authorization": "token <github-token>"
     },
     'contentType': 'application/json',
     // Convert the JavaScript object to a JSON string.
     'payload' : JSON.stringify(data)
  };

  UrlFetchApp.fetch('https://api.github.com/repos/<username>/<repo-name>/contents/content/blog/post-' + fileName + '.md', options);

}