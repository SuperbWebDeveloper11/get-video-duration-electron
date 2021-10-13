## get video duration

`what is it`

- get video duration is a desktop application built using electron js and fluent-ffmpeg to be able to select a video from your computer and get it's duration

`How does it work`

- when the user opened the app, a browser window will be opened that display form to select a video
- once the user select a video and click on 'get duration' button (form submission) a new message will be displayed bellow the form showing the video duration

`application workflow`

- no authentication will be required
- a mainWindow will be created
- the mainWindow will load an html file into it
- that html file will contain a form to select a video and submit
- when the user submit the form an event will be sent from mainWindow to the electron app along with the file path
- electron app will listen to the event and calculate video duration using ffmpeg & fluent-ffmpeg
- once duration is calculated another event will be sent back to mainWindow along with video duration in seconds
- mainWindow will listen to that event and display to duration bellow the form

`tools used`

- electron js
- ffmpeg
- fluent-ffmpeg
- html, css and bootstrap

`Note:`  
I created this application after i watched this tutorial, with some modification
