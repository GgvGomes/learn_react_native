import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './components/buttons/button';

import { useState } from 'react';

import { ImageViewer } from './components/Images/imageViewer';
import * as ImagePicker from 'expo-image-picker';
import { IconButton } from './components/buttons/iconButton';
import { CircleButton } from './components/buttons/CircleButton';
import { EmojiPicker } from './components/emojis/emojiPicker';
import { EmojiList } from './components/emojis/emojiList';
import { EmojiSticker } from './components/emojis/emojiSticker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);

  const [pickedEmoji, setPickedEmoji] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
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

  const onReset = () => {
    setSelectedImage(null);
    setShowAppOptions(false);
    console.log('Reset', showAppOptions)
  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  }

  const onModalClose = () => {
    setIsModalVisible(false);
  }

  const onSaveImageAsync = async () => {
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* <View style={styles.container}> */}

      <View style={styles.imageContainer}>
        <ImageViewer
          source={placeHolderImage}
          selectedImage={selectedImage}
        />

        {pickedEmoji != null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null}
      </View>

      {showAppOptions ?
        (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon='refresh' label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon='save-alt' label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
        )
        : (
          <View style={styles.footerContainer}>
            <Button label={"Choose a photo"} theme="primary" onPress={pickImageAsync} />
            <Button label={"Use this photo"} onPress={() => setShowAppOptions(true)} />
          </View>
        )
      }

      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose} >
        <EmojiList onCloseModal={onModalClose} onSelect={setPickedEmoji} />
      </EmojiPicker>

      <StatusBar style="auto" />
    </GestureHandlerRootView>
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
  },

  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },

  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  }
});