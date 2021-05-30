import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {LoginScreen, HomeScreen, ChatScreen} from '../../pages'

const PostNavigator = createStackNavigator({
    Login: LoginScreen,
    Home: {
        screen: HomeScreen
    },
    Chat: ChatScreen
},{
    initialRouteName: 'Login',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: '#00324A',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
          },
    }
});

export default AppNavigation = createAppContainer(PostNavigator);