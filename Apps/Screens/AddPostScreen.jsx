import { View, Text, StyleSheet, Button, TouchableOpacity, Image, ToastAndroid, ActivityIndicator, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { app } from '../../firebaseConfig'
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useUser } from '@clerk/clerk-expo';
import { createContext } from 'react';
import { Platform } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';
import moment from 'moment';

// Get the current date and time as a moment object
let now = moment();

// Convert Date.now() to a moment object
let dateNow = moment(Date.now());

// Format the date and time in a specific format
let formattedDate = dateNow.format('YYYY-MM-DD HH:mm:ss');

export default function AddPostScreen() {
    // Tạo UserContext
    // image picker
    const [image, setImage] = useState(null);

    //Upload Image to Firebase Storage
    const storage = getStorage();
    //const { user } = useUser();

    //Loading
    const [loading, setLoading] = useState(false);

    const db = getFirestore(app);

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        getCategoryList();
    }, [])

    const getCategoryList = async () => {
        setCategoryList([]);
        const querySnapshot = await getDocs(collection(db, 'Category'));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(" => ", doc.data());
            setCategoryList(categoryList => [...categoryList, doc.data()])
        })
    }
    // Use to pick image from gallery
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        // console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const onSubmitMethod = async (value) => {
        //Loading
        setLoading(true);

        // console.log(value);
        //Convert Uri to Blob File
        const resp = await fetch(image);
        const blob = await resp.blob();

        //Upload Image to Firebase Storage
        const storageRef = ref(storage, 'communityPost/' + Date.now() + ".jpg");

        uploadBytes(storageRef, blob)
            .then((snapshot) => {
                // console.log('Uploaded a blob or file!');
            })
            .then((resp) => {
                getDownloadURL(storageRef).then(async (downloadUrl) => {
                    // console.log(downloadUrl);
                    value.image = downloadUrl;
                    // value.userName = user.fullName;
                    // value.userEmail = user.primaryEmailAddress.emailAddress;
                    // value.userImage = user.imageUrl;

                    const docRef = await addDoc(collection(db, "UserPost"), value)
                    if (docRef.id) {
                        setLoading(false);
                        alert("Success!", "Post Added Successfully!")
                    }
                })

            })
            .catch((error) => {
                console.error('Error uploading file:', error);
            });

    }

    return (
        <KeyboardAvoidingView>
            <ScrollView className="p-10">
                <Text className="text-[25px] font-bold">Add New Post</Text>
                <Text className="text-[15px] text-gray-500 mb-2">Create New Post and Start Selling</Text>
                <Formik
                    initialValues={{
                        title: '',
                        description: '',
                        category: '',
                        address: '',
                        price: '',
                        image: '',
                        createdAt: (formattedDate),
                        // userName: '',
                        // userEmail: '',
                        // userImage: ''
                    }}
                    onSubmit={value => onSubmitMethod(value)}
                // validate={(values) => {
                //     const errors = {}
                //     if (!values.title) {
                //         alert("Title is required")
                //         console.log("Title is required")

                //         errors.title = 'Title must be there'
                //     }
                //     return errors
                // }}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                    }) => (

                        <View>
                            <TouchableOpacity onPress={pickImage}>

                                {image ?
                                    <Image
                                        source={{ uri: image }}
                                        style={{ width: 100, height: 100, borderRadius: 15 }}
                                    />
                                    :
                                    <Image
                                        source={require('./../../assets/Image/image-placeholder-icon-5.jpg')}
                                        style={{ width: 100, height: 100, borderRadius: 15 }}
                                    />
                                }

                            </TouchableOpacity>
                            <TextInput
                                style={styles.input}
                                placeholder="Title"
                                value={values.title}
                                onChangeText={handleChange('title')}
                                onBlur={handleBlur('title')}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Description"
                                value={values.description}
                                numberOfLines={5}
                                onChangeText={handleChange('description')}
                                onBlur={handleBlur('description')}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Price"
                                value={values.price}
                                keyboardType='number-pad'
                                onChangeText={handleChange('price')}
                                onBlur={handleBlur('price')}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Address"
                                value={values.address}
                                onChangeText={handleChange('address')}
                                onBlur={handleBlur('address')}
                            />
                            {/* Category list DropDown */}
                            <View style={{ borderWidth: 1, borderRadius: 10, marginTop: 15, marginBottom: 20, borderColor: 'gray' }}>
                                <Picker
                                    selectedValue={values.category}
                                    onValueChange={handleChange('category')}
                                >
                                    {categoryList && categoryList.map((item, index) => (
                                        <Picker.Item label={item.name} value={item.name} key={index} />
                                    ))}
                                </Picker>
                            </View>
                            <TouchableOpacity onPress={handleSubmit}
                                className="p-4 bg-blue-500 rounded-xl"
                                style={{ backgroundColor: loading ? '#ccc' : '#3B82F6' }}
                                disabled={loading}
                            >
                                {loading ?
                                    <ActivityIndicator size="small" color="#fff" />
                                    :
                                    <Text className="text-white text-center text-[16px]">Submit</Text>

                                }
                            </TouchableOpacity>
                            {/* <Button onPress={handleSubmit}
                                    title="submit"
                                    className="mt-7"
                                /> */}
                        </View>


                    )}
                </Formik>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 10,
        marginTop: 15,
        paddingHorizontal: 17,
        fontSize: 15,
        textAlignVertical: 'top',
    }
});