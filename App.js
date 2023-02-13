import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';
import ButtonSection from './components/button';
import DetailsSection from './components/details';
import ExtraSkillsSection from './components/extraSkills';
import HeroSection from './components/Hero';
import LanguagesSection from './components/languages';
import SkillsSection from './components/skills';



export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <view style={styles.body}>
      <HeroSection />
      <DetailsSection/>
      <LanguagesSection/>
      <SkillsSection/>
    <ExtraSkillsSection/>
    <ButtonSection/>
    </view>
      <StatusBar style="auto" />
    </View></ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black',
  },
  body:{
    backgroundColor:'#61605e',
    padding:5,
  }
});
