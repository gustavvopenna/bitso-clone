import { StyleSheet } from "react-native";

export const colors = {
  primary: '#212121',
  primaryLight: '#484848',
  primaryDark: '#000000',
  secondary: '#64dd17',
  secondaryLight: '#9cff57',
  secondatyDark: '#1faa00',
  white: '#ffffff'
}

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 26,
    fontWeight: 'bold'
  },
  text: {
    color: colors.white
  }
});