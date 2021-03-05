import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Card, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';

const styles = StyleSheet.create({
    titleText: {
        fontSize: 15,
        fontStyle: "italic",
        marginBottom:10,
        textAlign:"center",
        borderWidth:5,
        borderColor:'white',
    },
    baseStyle:{
        marginTop:10
    }
});

function RenderContact() {
    return(
        <Card>
            
        </Card>
    );
   
}

class Contact extends Component {

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['confusion@food.net'],
            subject: 'Enquiry',
            body: 'To whom it may concern:'
        })
    }

    render() {
        return(
            <ScrollView>
                <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                    <Card
                        title='Contact Information'>
                        <Text style={{margin:10}} >121, Clear Water Bay Road</Text> 
                        <Text style={{margin:10}}>Clear Water Bay, Kowloon</Text>
                        <Text style={{margin:10}}>HONG KONG</Text>
                        <Text style={{margin:10}}>Tel: +852 1234 5678</Text>
                        <Text style={{margin:10}}>Fax: +852 8765 4321</Text>
                        <Text style={{margin:10}}>Email:confusion@food.net</Text>
                    </Card>
                    <Button
                        title="Send Email"
                        buttonStyle={{backgroundColor: "#512DA8"}}
                        icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
                        onPress={this.sendMail}
                    />
                </Animatable.View>
                
            </ScrollView>
        );
    }


}

export default Contact; 