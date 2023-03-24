import { StyleSheet, Image } from "react-native";

export function ImageViewer({ source }) {
    return <Image
        style={styles.image}
        source={source}
    />;
}

const styles = StyleSheet.create({
    image: {
        width: 340,
        height: '80%',
        borderRadius: 18,
    },
});