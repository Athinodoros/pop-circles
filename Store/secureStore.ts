import * as SecureStore from 'expo-secure-store';

const USER_ID= "USER_UNIQUE_ID";

async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        return result;
    } else {
        return null;
    }

}

export {save,getValueFor,USER_ID}