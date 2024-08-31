import { Redirect } from 'expo-router';

export default function _layout() {
	return <Redirect href="/(auth)/welcome" />;
}
