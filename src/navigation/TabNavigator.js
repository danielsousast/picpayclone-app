import React from 'react';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import Home from '../screens/Home';
import Wallet from '../screens/Wallet';
import Pay from '../screens/Pay';
import Notification from '../screens/Notification';
import Settings from '../screens/Settings';

import PayButton from '../components/PayButton';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: Icon,
        name:'home',
    }, 
    Wallet: {
        lib: Icon,
        name:'creditcard',
    },
    Notifications: {
        lib: Icon,
        name:'notification',
    }  , 
    Settings: {
        lib: Icon,
        name:'setting',
    } 
}

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={({route, navigation}) => ({
            tabBarIcon: ({color, size, focused}) => {
                if (route.name === 'Pay') {
                    return <PayButton onPress={() => navigation.navigate('Pay')} focused={focused}/>
                } 
                const {lib: Icon, name} = icons[route.name];
                return <Icon name={name} size={size} color={color} />
            }
        })}
        tabBarOptions={{
            style: {
                backgroundColor:'#131418',
                borderTopColor:'rgba(255,255,255,0.2)'
            },
            activeTintColor: '#fff',
            inactiveTintColor: '#92929c'
        }}
        >
            <Tab.Screen name="Home" component={Home} 
                options={{
                    title:"Início"
                }}
            />
            <Tab.Screen name= "Wallet" component={Wallet} 
                options={{
                    title:"Carteira"
                }}
            />
            <Tab.Screen name="Pay" component={Pay} options={{
                title:''
            }}/>
            <Tab.Screen name="Notifications" component={Notification} 
                options={{
                    title:"Notificações"
                }}
            />
            <Tab.Screen name="Settings" component={Settings} 
                options={{
                    title:"Ajustes"
                }}
            />            
        </Tab.Navigator>
    )
}