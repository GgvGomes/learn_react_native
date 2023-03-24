import { StyleSheet, Image } from "react-native";

export function ImageViewer({ source, selectedImage }) {
    const imageSouce = selectedImage != null ? { uri: selectedImage } : source;

    return <Image
        style={styles.image}
        source={imageSouce}
    />;
}

const styles = StyleSheet.create({
    image: {
        width: '70vw',
        height: '60vh',
        borderRadius: 18,
    },
});