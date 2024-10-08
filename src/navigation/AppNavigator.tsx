import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider, BottomNavigation, Text, Screen } from 'react-native-paper';
import HomeRouteScreen from '../screens/HomeRouteScreen';
import NewsScreen from '../screens/NewsScreen';
import CardScreen from '../screens/CardScreen';
import FAQScreen from '../screens/FAQScreen';
import ProfileScreen from "../screens/ProfileScreen";

const ProfileRoute = () => <Text>Profile</Text>;

const NavComponent = () => {
	const theme = {
		...DefaultTheme,
		custom: '	property',
		colors: {
			...DefaultTheme.colors,
			secondaryContainer: 'transparent'
		}
	};

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', focusedIcon: 'home-variant'},
        { key: 'news', title: 'News', focusedIcon: 'newspaper-variant' },
        { key: 'card', title: 'Card', focusedIcon: 'card-account-details'},
        { key: 'faq', title: 'FAQ', focusedIcon: 'frequently-asked-questions'},
        { key: 'profile', title: 'Profile', focusedIcon: 'account'}
    ])

	const renderScene = BottomNavigation.SceneMap({
		home: HomeRouteScreen,
		news: NewsScreen, 
		card: CardScreen, 
		faq: FAQScreen, 
		profile: ProfileScreen
	});

	return (
		<PaperProvider theme={theme}>
			<BottomNavigation
				navigationState={{ index, routes }}
				onIndexChange={setIndex}
				renderScene={renderScene}
				activeColor={'#3498db'}
			/>
		</PaperProvider>
	);
};

export default NavComponent;