import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './components/buttons/button';

import { useState } from 'react';

import { ImageViewer } from './components/Images/imageViewer';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      console.log(result)
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.')
    }

    // Result:
    // {
    //   "assets": [
    //     {
    //       "assetId": null,
    //       "base64": null,
    //       "duration": null,
    //       "exif": null,
    //       "height": 4800,
    //       "rotation": null,
    //       "type": "image",
    //       "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%username%252Fsticker-smash-47-beta/ImagePicker/77c4e56f-4ccc-4c83-8634-fc376597b6fb.jpeg",
    //       "width": 3200
    //     }
    //   ],
    //   "canceled": false,
    //   "cancelled": false
    // }
  }

  const placeHolderImage = require('./assets/image/background-image.png');

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <ImageViewer 
          source={placeHolderImage} 
          selectedImage={selectedImage}
        />
      </View>

      <View style={styles.footerContainer}>
        <Button label={"Choose a photo"} theme="primary" onPress={pickImageAsync} />
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
