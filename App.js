import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const [screen, setScreen] = useState('Home');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>QUICK GROCERY PLATFORM</Text>
      </View>

      <ScrollView>
        {screen === 'Home' ? (
          <View style={styles.body}>
            <Text style={styles.subTitle}>Select Party (Seller):</Text>
            <TouchableOpacity style={styles.card} onPress={() => setScreen('Details')}>
              <Text style={styles.name}>Suman Fresh Mart</Text>
              <Text>Mangaldoi, Assam</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.body}>
            <TouchableOpacity onPress={() => setScreen('Home')}>
              <Text style={{color: 'blue'}}>← Back</Text>
            </TouchableOpacity>
            <Text style={styles.subTitle}>Products List</Text>
            <Text>Yahan automatic stock dikhega...</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { backgroundColor: '#27ae60', padding: 50, alignItems: 'center' },
  headerText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  body: { padding: 20 },
  subTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  card: { padding: 20, backgroundColor: '#f1f1f1', borderRadius: 10, marginBottom: 10 }
});
    
