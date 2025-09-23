import { View, Text } from 'react-native'
import React from 'react'
import {styles} from '../../styles/auth.styles'
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View style ={styles.container} >
      <Link href={"/notifications"} >
        feed screen in tabs
      </Link>
    </View>
  )
}