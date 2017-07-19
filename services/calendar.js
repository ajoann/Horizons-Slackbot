const auth = require('./authentication');

//Generates a meeting event object
function generateReminder(date, subject) {
  return {
    'summary': subject,
    'start': {
      'date': date.toISOString().substring(0,10)
    },
    'end': {
      'date': date.toISOString().substring(0,10)
    }
  };
}

//Generates a meeting event object
function generateMeeting(start, end, subject, attendees) {
  return {
    'summary': subject,
    'start': {
      'dateTime': start.toISOString()
    },
    'end': {
      'dateTime': end.toISOString()
    },'attendees': attendees.map(email => ({'email': email}))
  };
}


function createReminder(slackId, date, subject) {
  auth.getGoogleCalendar(slackId)
    .then(calendar => {
      calendar.events.insert({
        calendarId: 'primary',
        resource: generateReminder(date, subject)
      })
    })
    .catch(err => console.log('ERROR: ', err));
}

function createMeeting(slackId, start, end, subject, attendees) {
  auth.getGoogleCalendar(slackId)
    .then(calendar => {
      calendar.events.insert({
        calendarId: 'primary',
        resource: generateMeeting(start, end, subject, attendees)
      })
    })
    .catch(err => console.log('ERROR: ', err));
}



module.exports = {
  createReminder,
  createMeeting
}