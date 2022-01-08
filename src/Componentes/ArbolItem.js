import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { withDecay } from 'react-native-reanimated'
import LogoPrincipal from './Logos/LogoPrincipal'
import Colors from './Utils/Colors'


export default function ArbolItem(props) {

    const { type } = props
    console.log(type)
    return (
        <View style={styles.container} >

            {type == 1 ? (
                <TypeA></TypeA>
            ) : (
                <TypeB></TypeB>
            )

            }


        </View>

    )
}


function TypeA() {
    return (
        <View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'rgb(36,64,134)', height: 15, width: '50%', borderTopLeftRadius: 10 }}></View>
                    <View style={{ backgroundColor: 'rgb(252,236,8)', height: 15, width: '50%', borderTopRightRadius: 10 }}></View>
                    <View style={styles.containerLogo}>
                        <LogoPrincipal fillColor={Colors.grisOscuro} width={15} height={15}></LogoPrincipal>
                    </View>
                </View>
                <View style={{ backgroundColor: Colors.whiteTwo, padding: 5 }}>
                    <Text style={{ fontFamily: 'MontserratSemiBold', color: Colors.primario, fontSize: 16 }}>Retacon</Text>
                    <Text style={{fontFamily:'Montserrat',fontSize:8,color:Colors.grisOscuro}}>UCI996M111</Text>
                    <View style={styles.contentTextsContainer}>
                        <View style={styles.contentTexts}>
                            <Text style={styles.textFirst}>Caballo</Text> 
                            <Text style={styles.textLast}>2,9</Text>
                        </View>
                        <View style={styles.contentTexts}>
                            <Text style={styles.textFirst}>Muleta</Text> 
                            <Text style={styles.textLast}>2,9</Text>
                        </View>
                        <View style={styles.contentTexts}>
                            <Text style={styles.textFirst}>Media</Text> 
                            <Text style={styles.textLast}>2,9</Text>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}


function TypeB() {
    return (
        <View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: Colors.primario, height: 15, width: '33%', borderTopLeftRadius: 10 }}></View>
                    <View style={{ backgroundColor: Colors.grisOscuro, height: 15, width: '33%' }}></View>
                    <View style={{ backgroundColor: 'rgb(252,236,8)', height: 15, width: '33%', borderTopRightRadius: 10 }}></View>

                    <View style={styles.containerLogo}>
                        <LogoPrincipal fillColor={Colors.grisOscuro} width={15} height={15}></LogoPrincipal>
                    </View>
                </View>
                <View style={{ backgroundColor: Colors.whiteTwo, padding: 5 }}>
                    <Text style={{ fontFamily: 'MontserratSemiBold', color: Colors.primario, fontSize: 16 }}>Retacon</Text>
                    <Text style={{fontFamily:'Montserrat',fontSize:8,color:Colors.grisOscuro}}>UCI996M111</Text>
                    <View style={styles.contentTextsContainer}>
                        <View style={styles.contentTexts}>
                            <Text style={styles.textFirst}>Caballo</Text> 
                            <Text style={styles.textLast}>2,9</Text>
                        </View>
                        <View style={styles.contentTexts}>
                            <Text style={styles.textFirst}>Muleta</Text> 
                            <Text style={styles.textLast}>2,9</Text>
                        </View>
                        <View style={styles.contentTexts}>
                            <Text style={styles.textFirst}>Media</Text> 
                            <Text style={styles.textLast}>2,9</Text>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        height: 120
    },
    arbolItemA: {
        textAlign: 'center'
    },
    arbolItemB: {
        textAlign: 'center'
    },
    containerLogo: {
        position: 'absolute',
        right: -5,
        backgroundColor: Colors.whiteTwo,
        borderRadius: 100,
        padding: 2,
        top: -2,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    contentTextsContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },  
    contentTexts:{
        
    },
    textFirst:{
        fontFamily:'MontserratMedium',
        fontSize:8,
        color:Colors.grisOscuro,
        textAlign:'center'
    },
    textLast:{
        fontFamily:'MontserratMedium',
        fontSize:8,
        color:Colors.primario,
        textAlign:'center'
    }
})