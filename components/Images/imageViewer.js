import { StyleSheet, Image } from "react-native";

export function ImageViewer({ source }) {
    return <Image
        style={styles.image}
        source={source}
    />;
}

const styles = StyleSheet.create({
    image: {
        width: '70vw',
        height: '60vh',
        borderRadius: 18,
    },
});