import { View, Image } from 'react-native';

import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    useAnimatedGestureHandler,
    withSpring,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedView = Animated.createAnimatedComponent(View);

type EmojiStickerProps = {
    imageSize: number;
    stickerSource: any;
}

export function EmojiSticker({ imageSize, stickerSource } : EmojiStickerProps) {
    const scaleImage = useSharedValue(imageSize);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const onDoubleTap = useAnimatedGestureHandler({
        onActive: (event, context) => {
            if (scaleImage.value) {
                scaleImage.value = withSpring(scaleImage.value * 2);
            }
        },
    }, [scaleImage]);
    const imageStyle = useAnimatedStyle(() => {
        console.log(scaleImage.value)
        return {
            width: scaleImage.value,
            height: scaleImage.value,
        };
    });

    const onDrag = useAnimatedGestureHandler({
        onStart: (event, context: any) => {
            context.translateX = translateX.value;
            context.translateY = translateY.value;
        },

        onActive: (event, context) => {
            translateX.value = context.translateX + event.translationX;
            translateY.value = context.translateY + event.translationY;
        }
    }, [translateX, translateY]);

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                },
            ],
        };
    });

    return (
        <PanGestureHandler onGestureEvent={onDrag}>
            <AnimatedView style={[containerStyle, { top: '-58vh' }]}>

                <TapGestureHandler onGestureEvent={onDoubleTap}  numberOfTaps={2}>
                    <AnimatedImage
                        source={stickerSource}
                        resizeMode="contain"
                        style={[imageStyle, { width: imageSize, height: imageSize }]}
                    />
                </TapGestureHandler>

            </AnimatedView>
        </PanGestureHandler>
    )
}