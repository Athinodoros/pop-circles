import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { getValueFor, save, USER_ID } from "./Store/secureStore";
import uuid from 'react-native-uuid';
import createUser from './providers/user'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  getValueFor(USER_ID).then((value) => {
    if (!value) {
      let newPhoneID ="12kn12kn12kn";
      createUser(newPhoneID);
      save(USER_ID, newPhoneID)
    }
  }).catch((er) => {
    console.log(er);

    save(USER_ID, uuid.v4()).then(val => {
      console.log("saved user id :", val);

    }).catch(err => {
      console.log("Failed to save");

      console.log("28", err)
    });

  })


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
