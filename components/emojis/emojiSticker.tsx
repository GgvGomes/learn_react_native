import { View, Image } from 'react-native';

export function EmojiSticker({ imageSize, stickerSource }) {
    return (
        <View style={{top: '-58vh'}}>
            <Image
                source={stickerSource}
                resizeMode="contain"
                style={{
                    width: imageSize,
                    height: imageSize,
                }}
            />
        </View>
    )
}