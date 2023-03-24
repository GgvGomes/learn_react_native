import { View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export function CircleButton({onPress} : {onPress: any}) {
    return(
        <View style={style.circleButtonContainer}>
            <Pressable onPress={onPress} style={style.circleButton}>
                <MaterialIcons name="add" size={38} color="#25292e" />
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    circleButtonContainer: {
        width: 84,
        height: 84,

        marginHorizontal: 60,
        borderWidth: 2,
        borderColor: "#ffd33d",
        borderRadius: 42,
        padding: 3,
    },

    circleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#fff',
    }
})