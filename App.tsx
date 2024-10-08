import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import AppNavigator from "./src/navigation/AppNavigator";
import { SafeAreaProvider } from 'react-native-safe-area-context';


SplashScreen.preventAutoHideAsync();

const App = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		async function prepare() {
			try {
				await new Promise(resolve => setTimeout(resolve, 3000));
			} catch(e) {
				console.warn(e)
			} finally {
				setIsLoading(true)

				await SplashScreen.hideAsync();
			}
		}

		prepare();
	}, []);

	if(!isLoading) {
		return null
	}

	return (
		<SafeAreaProvider>
			<AppNavigator />
		</ SafeAreaProvider>
	)
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},
	splashText: {
		fontSize: 24,
		fontWeight: 'bold',
	},
});