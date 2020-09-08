import React, { version } from 'react';
import { View, Text, StyleSheet } from 'react-native'

import NewsList from '../components/NewsList';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            news: [],
            error: false,
        };
    }

    componentDidMount() {
        this.setState({
            news: [{ notice: 'psum is simply dummy', img: 'https://www.ofitexto.com.br/wp-content/uploads/2019/11/images-3.jpg' },
            { notice: 'my text ever since th', img: 'https://cdn-cv.r4you.co/wp-content/uploads/2013/11/17670520_1463020223743313_957149899_o.jpg' },
            { notice: 'k a galley of type an', img: 'https://www.colegioweb.com.br/wp-content/uploads/2012/05/11.png' },
            { notice: 'tronic typesetting,', img: 'https://miro.medium.com/max/336/1*pGy-6nXDuV9nJGisB_l6tQ.jpeg' },
            { notice: 'containing Lorem Ipsu', img: 'https://www.colegioweb.com.br/wp-content/uploads/2012/05/11.png' },
            { notice: 'y with desktop publishing softw', img: 'https://conexaoplaneta.com.br/wp-content/uploads/2017/04/brasil-tem-maior-numero-diferentes-arvores-planeta-conexao-planeta.jpg' },
            { notice: 'rsions of Lorem Ipsum.', img: 'https://cdn-cv.r4you.co/wp-content/uploads/2013/11/17670520_1463020223743313_957149899_o.jpg' },
            { notice: 'ampden-Sydney College in Vi', img: 'https://catracalivre.com.br/wp-content/uploads/2019/07/arvore-910x607.jpg' },
            { notice: 'tin words, consectetur, ', img: 'https://pastoextraordinario.com.br/wp-content/uploads/2020/02/Pasto-extraordinario-arvores-frutiferas.6.png' },
            { notice: 'tions 1.10.32 and 1.10.33', img: 'https://rockntech.com.br/wp-content/uploads/2014/08/arvores-mais-belas_6-640x596.jpg' },
            { notice: 'n-Sydney College in Virginia, looked ', img: 'https://i.pinimg.com/originals/30/40/21/30402103d56ce4c58c7a7a68d104cd72.jpg' },
            { notice: ' and going through the cites o', img: 'https://s2.glbimg.com/G-_m1FyNpfoC_boF8xLU4szpclg=/512x320/smart/e.glbimg.com/og/ed/f/original/2014/08/01/gcom_16_arvores_mais_lindas_do_mundo_08.jpg' },
            { notice: 'fessor at Hampden-Sydney Colle', img: 'https://upload.wikimedia.org/wikipedia/commons/6/67/%C3%81rvore_de_Seriguela_no_Paran%C3%A1.JPG' },
            { notice: 'cted humour, or rand', img: 'https://mapio.net/images-p/20779862.jpg' },],
            error: false,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.error ?
                        <Text style={styles.error}>Não foi possivel carregar a lista de noticias...</Text>
                        :
                        <NewsList
                            news={this.state.news}
                            onPressItem={(parameters) => this.props.navigation.navigate('Detalhes', parameters)}
                        />
                }
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    error: {
        backgroundColor: '#855b5b',
    }
});
