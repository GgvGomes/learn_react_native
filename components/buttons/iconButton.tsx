import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text } from "react-native";

type IconButtonProps = {
    icon?: 'refresh' | "save-alt";
    label: string;
    onPress: () => void;
}

export function IconButton({ icon, label, onPress } : IconButtonProps){
    return(
        <Pressable style={styles.iconButton}>
            <MaterialIcons name={icon} size={24} color={'#fff'} onPress={onPress} />
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButtonLabel: {
        color: '#fff',
        marginTop: 12,
    }
});