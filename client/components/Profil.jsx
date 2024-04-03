// import * as  ImagePicker from 'expo-image-picker'
import { useState } from 'react';
import { View, TouchableOpacity,StyleSheet } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
// import ImageViewer from './ImageViewer';
import Bouton from './Bouton';

export default function Profil() {
    const [selectionImage, setSelectionImage] = useState(null);

    const pickImageAsync = async () => {
        // les permissions vers la camera
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let post = await ImagePicker.launchImageLibraryAsync({
            // la fonction d'affichage des photos
            allowsEditing: true,
            quality: 1,
        });

        if (!post.canceled) {
            setSelectionImage(post.uri);
        } else {
            alert('Vous n\'avez pas sélectionné d\'image');
        }
    };

    return (

        <TouchableOpacity onPress={pickImageAsync} style={styles.touchableOpacity}>
            <View></View>
            {selectionImage && <UserAvatar style={styles.userAvatar} source={{ uri: selectionImage }} />}
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    touchableOpacity: {
        alignItems: 'center',
        marginTop: 20,
    },
    userAvatar: {
        backgroundColor: '#3498db',
        borderRadius: 10,
        color: 'white',
        padding: 10,
        width: 200,
        alignSelf: 'center',
    },
});
