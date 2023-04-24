import React, {useState, useRef} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';

const startTimeMS = 1200000;
const endTimeMS = 2400000;

function App(): JSX.Element {
  const videoRef = useRef<Video>(null);
  const [progress, setProgress] = useState(0);
  const [seekCounts, setSeekCounts] = useState(0);
  return (
    <SafeAreaView style={styles.globalContainer}>
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={{
            uri: 'PUT-URL-HERE',

            //@ts-expect-error - typed definitions don't match yet patched code
            startTime: startTimeMS,
            endTime: endTimeMS,
          }}
          style={styles.video}
          onProgress={e => {
            setProgress(e.currentTime);
          }}
          onSeek={() => {
            setSeekCounts(state => state + 1);
          }}
        />
        <Button
          title="Seek +20 seconds"
          onPress={() => {
            videoRef.current?.seek(progress + 20);
          }}
        />
        <Text>Progress: {progress}</Text>
        <Text>Seek Counts: {seekCounts}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    flex: 1,
  },
  videoContainer: {
    height: 300,
    width: 300,
  },
});

export default App;
