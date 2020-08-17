import React from 'react';
import { StyleSheet , View, Text } from 'react-native';

const Food = (navigation) => {
  const { food } = navigation.route.params;
  return (
    <View style={styles.container}>
      
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cellDisplayName}>{ 'Calories:' }</Text>
          <Text style={styles.cell}>{ food.Calories }</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cellDisplayName}>{ 'Added Sugars:' }</Text>
          <Text style={styles.cell}>{ food.Added_Sugars }</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cellDisplayName}>{ 'Milk:' }</Text>
          <Text style={styles.cell}>{ food.Milk }</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cellDisplayName}>{ 'Portion:' }</Text>
          <Text style={styles.cell}>{ food.Portion_Display_Name }</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cellDisplayName}>{ 'Portion Amount:' }</Text>
          <Text style={styles.cell}>{ food.Portion_Amount }</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
   paddingTop: 18
 },
 foodDisplayName: {
   textTransform: 'uppercase',
   fontWeight: 'bold',
   fontSize: 20,
   textAlign: 'center'
 },
 table: {
  flex: 1,
  marginTop: 30,
  maxWidth: 400
 },
 row: {
  borderWidth: 2,
  borderColor: '#00b894',
  flexDirection: 'row',
 },
 cell: {
   paddingTop: 20,
   paddingRight: 10
 },
 cellDisplayName: {
  padding: 20,
  fontWeight: 'bold',
  fontSize: 17
 }
});

export default Food;