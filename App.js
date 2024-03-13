import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import MoviesScreen from './src/screens/MoviesScreen';
import SeriesScreen from './src/screens/SeriesScreen';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MainApp({ onSignOut }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'Movies') iconName = focused ? 'film' : 'film-outline';
            else if (route.name === 'Series') iconName = focused ? 'tv' : 'tv-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { paddingBottom: 5, paddingTop: 5, height: 60, backgroundColor: '#f5f5f5' },
          headerStyle: { backgroundColor: '#E91E63' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerRight: () => (
            <TouchableOpacity onPress={onSignOut} style={styles.signOutButton}>
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
          ),
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Movies" component={MoviesScreen} />
        <Tab.Screen name="Series" component={SeriesScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default function App() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID_WEB,
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUserInfo(null); // Successfully signed out
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <NavigationContainer>
      {userInfo ? (
        <MainApp onSignOut={signOut} />
      ) : (
        <View style={styles.outerContainer}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.signInContainer}>
            <Ionicons name="film-outline" size={120} color="#ffffff" />
            <Text style={styles.welcomeText}>Discover Your Favorite Movies</Text>
            <TouchableOpacity style={styles.customSignInButton} onPress={signIn}>
              <Text style={styles.customSignInButtonText}>Sign In with Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // The surrounding white background
  },
  signInContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1e88e5', // The current blue background
    borderRadius: 20, // Adding curved borders to the inner section
    shadowColor: '#000', // Shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 24,
    color: '#FFF',
    marginVertical: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  customSignInButton: {
    backgroundColor: '#ff1744',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  customSignInButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  signOutButton: {
    marginRight: 15,
    backgroundColor: '#FFFFFF', // Set the background color to white for contrast
    borderRadius: 18, // Rounded borders for a modern, pill-shaped button
    paddingVertical: 5,
    paddingHorizontal: 10, // Adjust padding as needed for the content
  },
  signOutText: {
    color: '#E91E63', // Use the header's red color for the text to maintain the theme
    fontSize: 16,
    fontWeight: 'bold',
  },
});
