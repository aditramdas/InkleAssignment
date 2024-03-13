// src/screens/SeriesScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Modal, Button, StyleSheet, TouchableOpacity } from 'react-native';import axios from 'axios';

export default function SeriesScreen() {
  const [series, setSeries] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const apiKey= process.env.EXPO_PUBLIC_TMDB_API_KEY;
        const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=1`);
        setSeries(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSeries();
  }, []);
  const openModal = (movie) => {
    setCurrentMovie(movie);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const movieItem = ({ item }) => (
    <TouchableOpacity onPress={() => openModal(item)} style={styles.movieItem}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.poster}
      />
      <Text style={styles.title} numberOfLines={2}>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={series}
        renderItem={movieItem}
        keyExtractor={item => item.id.toString()}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            {currentMovie && (
              <>
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${currentMovie.poster_path}` }}
                  style={styles.modalPoster}
                />  
                <Text style={styles.modalTitle}>{currentMovie.name}</Text>
                <View style={styles.centeredView}>
      <View style={styles.imdbContainer}>
        <Text style={styles.imdbText}>Release Date: {currentMovie.first_air_date}</Text>
        <Text style={styles.imdbText}>Rating: {currentMovie.vote_average} / 10</Text>
      </View>
    </View>
                <Text style={styles.modalOverview}>{currentMovie.overview}</Text>
                <Button title="Close" onPress={closeModal} color="#d9534f" />
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  movieItem: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff', // Consider a background color to ensure text shadow is visible
    borderRadius: 5, // Optional: Rounded corners for each item
    marginVertical: 5, // Add some vertical spacing between items
    marginHorizontal: 10, // Add some horizontal spacing for aesthetics
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 }, // iOS shadow
    shadowOpacity: 0.1, // iOS shadow
    shadowRadius: 2, // iOS shadow
  },
  title: {
    paddingLeft: 10,
    fontSize: 20, // Increased font size
    fontWeight: 'bold',
    color: '#333', // Darker color for better readability
    textShadowColor: 'rgba(255, 255, 255, 0.9)', // White shadow for contrast
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10, // Soften the shadow
    flexShrink: 1,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background for contrast
  },
  modalContent: {
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#fefefe', // Light background for the content
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalPoster: {
    width: 200,
    height: 300,
    borderRadius: 5,
    marginBottom: 20, // Add some space below the poster
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Dark color for the title
  },
  modalInfo: {
    fontSize: 18,
    marginTop: 5,
    color: '#007bff', // Use a distinct color for info
  },
  modalOverview: {
    fontSize: 16,
    textAlign: 'justify',
    marginTop: 10,
    marginBottom: 20,
    color: '#555', // Slightly muted color for longer text
  },
  centeredView: {
    width: '100%', // Take up all available width
    alignItems: 'center', // Center children horizontally
    marginTop: 10,
  },

  imdbContainer: {
    backgroundColor: '#f5c518', // IMDb's yellow
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },

  imdbText: {
    color: '#000', // Dark text for contrast
    fontWeight: 'bold',
    textAlign: 'center', // Center text within the yellow box
  },
});

