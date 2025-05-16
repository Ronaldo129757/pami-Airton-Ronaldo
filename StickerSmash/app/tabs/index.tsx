import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="./tabs/about" style={styles.button}>
        Go to About screen
      </Link>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
  
});
