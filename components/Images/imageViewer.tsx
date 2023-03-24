import { StyleSheet, Image } from "react-native";

type ImageViewerProps = {
    source: any;
    selectedImage: string | null;
}

export function ImageViewer({ source, selectedImage } : ImageViewerProps) {
    const imageSouce = selectedImage != null ? { uri: selectedImage } : source;

    return <Image
        style={styles.image}
        source={imageSouce}
    />;
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: '60vh',
        borderRadius: 18,
    },
});