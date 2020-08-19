module.exports = function (context, myBlob) {
    files = context.bindingData.name;
    var message = {
        "personalizations": [ 
            { "to": [ { "email": "<DestinationEmail>" } ] } 
        ],
        from: { email: "SenderEmail" },
        subject: "Files has been changed in azure container",
        content: [{
            type: 'text/plain',
            value: files
        }]
    };
    context.done(null, message);
};