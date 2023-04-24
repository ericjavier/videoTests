# videoTests alpha6

When using startTime and endTime on iOS:

- onSeek event handler is called at the video start, without the user performing any seek action, this beahvior is different from Android, and can be observed on the Seek Counts indicator of the app.
- when a seek action is performed by the user (Seek + 20 seconds button), then onProgress even handler calls are stopped, and the actuall seeking action takes the video close to the initial 20 seconds absolute possition.

I think the problem is the following:

- onProgress calls are both in iOS and Android from 0 to duration (endTime - startTime)
- when seeking iOS require absoulute values and Android doesn't, so seek(progress + offset) works different between platforms
