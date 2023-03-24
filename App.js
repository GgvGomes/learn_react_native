import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './components/buttons/button';

import { ImageViewer } from './components/Images/imageViewer';

export default function App() {
  const placeHolderImage = require('./assets/image/background-image.png');

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <ImageViewer source={placeHolderImage} />
      </View>

      <View style={styles.footerContainer}>
        <Button label={"Choose a photo"} theme="primary" />
        <Button label={"Use this photo"} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  }
});
