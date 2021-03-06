import React, { Component } from "react";
import {
    Container, Header, Title, Button, Left, Right, Body, Icon, Col, Row, Content, Text, Card, CardItem
} from "native-base";
import { ScrollView } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spinner: false,
            username: "",
            password: "",
            isLoading: false,
            hidePassword: true,
            options: ''
        };
        this.inputs = {};
    }

    logout = async () => {
        await AsyncStorage.removeItem("isLogin");
        this.props.navigation.navigate("AppLogin")
    }


    render() {

        return (
            <Container>
                <Header style={{ backgroundColor: 'green' }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent>
                            <Icon name='md-arrow-back' onPress={() => this.props.navigation.navigate("HomePage")} />
                        </Button>
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Title>ছাদ বাগান তৈরি!</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Icon name='exit' onPress={this.logout} />
                    </Right>
                </Header>
                <Content>
                    <ScrollView>
                        <Text>

                        </Text>
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}
