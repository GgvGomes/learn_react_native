import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type EmojiPickerProps = {
    isVisible: boolean;
    children: React.ReactNode;
    onClose: () => void;
}

export function EmojiPicker({ isVisible, children, onClose }: EmojiPickerProps) {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible} onPointerLeaveCapture={onClose}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Chose a sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" size={22} color="#fff" />
                    </Pressable>
                </View>

                {children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        height: '35%',
        width: '100%',
        
        backgroundColor: '#25292e',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,

        position: 'absolute',
        bottom: 0,
    },

    titleContainer:{
        height: '16%',
        backgroundColor: '#464C55',

        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        color: '#fff',
        fontSize: 16,
    },

    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        paddingHorizontal: 50,
        paddingVertical: 20,
    }
});