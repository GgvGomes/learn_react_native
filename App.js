import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { ImageViewer } from './components/Images/imageViewer';

export default function App() {
  const placeHolderImage = require('./assets/image/background-image.png');

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <ImageViewer source={placeHolderImage} />
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
});
