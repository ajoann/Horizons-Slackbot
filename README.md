# Slackbot
This Slackbot, nicknamed Jarvis, allows you to schedule and share google calendar events.

In communicating with this Slackbot, users can create gCal events (repeating, or just once), and share with others in the Slack group. If a Slack user has not authenticated Google Calendar, the event will remain pending until all invitees authenticate google access. After two hours, if not everyone has accepted, the event creator can decide to cancel the event or schedule it anyway. A successfully created event will automatically be added to the event creator's gCal, and invitations sent to all the invited slack members.

<img align="center" width="500" height="370" src="https://github.com/ajoann/Slackbot/blob/master/img/jarvis_meeting.png">

This repo is forked from the original created in collaboration with @ahijaouy, @dchan331, and @pradyutbensal
