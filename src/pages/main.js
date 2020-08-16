import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';

export default class Main extends Component {
  state = {
    search: '',
    listFoods: [],
    listOfFoodsFound: [],
    notFound: '',
    listOfFoodsFoundLength: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput style={styles.inputSearch}
            placeholder=" Search a food"
            onChangeText={text => {
              this.setState({search: text});
            }}
            value={this.state.search}
          />
          <TouchableOpacity onPress={this.onPressButtonSearch} style={styles.buttonSearch}>
            <Text style={styles.textButtonSearch}>Search</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={this.onPressButtonClear} style={styles.buttonClear}>
          <Text style={styles.textButtonClear}>Clear Search</Text>
        </TouchableOpacity>

          <Text style={styles.textNotFound}>{ this.state.notFound }</Text>

          <Text style={styles.textListOfFoodsFoundLength}>{ this.state.listOfFoodsFoundLength }</Text>

        <FlatList
          data={this.state.listOfFoodsFound}
          keyExtractor={(item, index) => `${item.Food_Code}-${index}`}
          renderItem={this.renderItem}
          style={styles.list}
        />
      </View>
    )
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemTitle}>{item.Display_Name}</Text>
        <Text style={styles.listItemDescription}>
          {`${item.Calories} calories`}
        </Text>

        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Food', { food: item, title: item.Display_Name })
          }
          style={styles.listItemButton}>
          <Text>Details+</Text>
        </TouchableOpacity>
      </View>
    );
  };

  componentDidMount() {
    this.loadFoods();
  }

  loadFoods = () => {
    this.setState({
      listFoods: require('../services/Food_Display_Table.json')
    });
  }

  searchFoods = () => {
    let limit = 1;
    this.state.listFoods.forEach((food, index) => {
      if (food.Display_Name.search(this.state.search) != -1 && limit <= 25) {
        let foods = this.state.listOfFoodsFound;
        foods.push(food);
        this.setState({listOfFoodsFound: foods});
        limit++;
      }
    });
    this.clearNotFound();
    this.checksIfNoFoodsWereFound();
    this.checksIfFoodsWereFound();
  }

  checksIfNoFoodsWereFound = () => {
    if (this.state.listOfFoodsFound.length == 0) {
      this.setState({notFound: 'Not Found'});
    }
  }

  checksIfFoodsWereFound = () => {
    if (this.state.listOfFoodsFound.length > 0) {
      this.setState({listOfFoodsFoundLength: `${this.state.listOfFoodsFound.length} results`});
    }
  }

  clearNotFound = () => {
    this.setState({notFound: ''});
  }

  clearListOfFoodsFoundLength = () => {
    this.setState({listOfFoodsFoundLength: ''});
  }

  onPressButtonSearch = async () => {
    await this.setState({listOfFoodsFound: []});
    this.searchFoods();
  }

  onPressButtonClear = () => {
    this.setState({
      listOfFoodsFound: [],
      search: ''
    });
    this.clearNotFound();
    this.clearListOfFoodsFoundLength();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#dfe6e9'
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row'
  },
  inputSearch: {
    borderColor: '#c6c6c6',
    borderWidth: 1,
    flex: 1,
    flexGrow: 2,
    marginRight: 5,
    height: 40,
    fontSize: 20,
    padding: 0
  },
  buttonSearch: {
    backgroundColor: '#55efc4',
    borderColor: '#55efc4',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 35
  },
  textButtonSearch: {
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff'
  },
  buttonClear: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButtonClear: {
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#636e72'
  },
  list: {
    marginTop: 30,
    padding: 10,
    flex: 1
  },
  listItem: {
    flex: 1,
    borderBottomWidth: 1
  },
  listItemTitle: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  },
  listItemButton: {
    color: '#000',
    borderColor: '#81ecec',
    backgroundColor: '#55efc4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    height: 30,
    width: 100,
    marginTop: 10,
    marginBottom: 10
  },
  textNotFound: {
    marginLeft: 20
  },
  textListOfFoodsFoundLength: {
    alignSelf: 'center'
  }
});