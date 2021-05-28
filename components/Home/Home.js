import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Home() {
    const [meals, setMeals] = useState([]);
    
    // Load meals data from themealdb.com
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [])

    const handleMeal = (mealId) => {
        // handling meal here
    }

    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <TextInput
                style={styles.searchBox}
                onChangeText={text => onChangeText(text)}
                placeholder={"    Restaurant name, cuisine, or a dish..."}
            />

            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    onPress={() => alert('Nearest To Me')}
                    style={styles.filterBtn}>
                    <Text style={{ color: 'black' }}> Nearest To Me</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => alert('Book a Table')}
                    style={styles.filterBtn}>
                    <Text style={{ color: 'black' }}> Book a Table</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => alert('Open Now')}
                    style={styles.filterBtn}>
                    <Text style={{ color: 'black' }}> Open Now</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.headingText}>Popular restaurants around you</Text>
            {
                meals.map(meal => {
                    return <TouchableOpacity
                        key={meal.idMeal}
                        onPress={() => handleMeal(meal.idMeal)}>
                        <View style={styles.mealComponent}>
                            <Image source={{ uri: `${meal.strMealThumb}` }} style={styles.mealImage} />
                            
                            <View style={{ flexDirection: "row", padding: 10 }}>
                               
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20 }}>{meal.strMeal}</Text>
                                    <Text>{meal.strArea}</Text>
                                    <Text style={{ color: "gray" }}>Mueller, Austin</Text>
                                    <Text style={{ color: "red" }}>Opens at 10 am</Text>
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text style={styles.rating}>3.2</Text>
                                    <Text style={{ textAlign: 'right', color: 'gray' }}>${meal.idMeal.slice(-2)} for two</Text>
                                </View>

                            </View>

                        </View>
                    </TouchableOpacity>
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    searchBox: { 
        height: 40, 
        borderColor: 'lightgray', 
        borderWidth: 2, 
        margin: 10, 
        borderRadius: 15 
    },
    filterBtn: { 
        flex: 1, 
        margin: 2, 
        backgroundColor: 'white', 
        borderColor: 'lightgray', 
        borderWidth: 1, 
        borderRadius: 10, 
        padding: 5 
    },
    headingText: { 
        fontSize: 22, 
        fontWeight: 'bold', 
        marginTop: 10 
    },
    mealComponent: { 
        flex: 1, 
        elevation: 8, 
        backgroundColor: "#fffff4", 
        marginBottom: 12, 
        marginTop: 12, 
        borderRadius: 10 
    },
    mealImage: { 
        width: "100%", 
        height: 190, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10 
    },
    rating: { 
        textAlign: 'right', 
        backgroundColor: 'green', 
        paddingLeft: 8, 
        paddingRight: 8, 
        color: 'white', 
        borderRadius: 10, 
        alignSelf: 'flex-end' 
    }
})
