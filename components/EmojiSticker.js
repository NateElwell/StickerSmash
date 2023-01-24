import Animated from 'react-native-reanimated';
import { View, Image } from 'react-native';
import { PanGestureHandler, TapGestureHandler} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';

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
    const AnimatedView = Animated.createAnimatedComponent(View);
    const AnimatedImage = Animated.createAnimatedComponent(Image);
    const scaleImage = useSharedValue(imageSize);
    const onDoubleTap = useAnimatedGestureHandler({
    onActive: () => {
      if (scaleImage.value) {
        scaleImage.value = scaleImage.value * 2;
      }
    },
  });
  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

export default function EmojiSticker({ imageSize, stickerSource }) {
  return (
    <PanGestureHandler onGestureEvent={onDrag}>
    <AnimatedView style={[containerStyle, { top: -350 }]}>
      <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
        <AnimatedImage
          source={stickerSource}
          resizeMode="contain"
          style={[imageStyle, { width: imageSize, height: imageSize }]}
        />
      </TapGestureHandler>
      </AnimatedView>
      </PanGestureHandler>
  );
  };

export default function EmojiSticker({ imageSize, stickerSource }) {
 const translateX = useSharedValue(0);
 const translateY = useSharedValue(0);
};