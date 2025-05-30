import { StyleSheet, Text, View } from 'react-native';

import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';

import {useState} from 'react';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer imgSource={selectedImage || PlaceholderImage} />
        </View>
        {showAppOptions ? (
        <View />
      ):(
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
   imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    
  },
  text: {
    color: '#fff',
  }, 
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
