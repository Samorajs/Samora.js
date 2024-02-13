import { View } from './src/components/View';
import "./index.css"
import { List, ListItem } from './src/components/ListItem';
import { Link } from './src/components/Link';
import { Text } from './src/components/Text';
import { Table, TBody, Col, THead, Row } from './src/components/Table';

const App = () => {
    return Table({
        border:"5px",
        children:[
            THead({
                children:[
                    Row({
                        children:[
                            Col({
                                type:"th",
                                children:"Nome"
                            }),
                            Col({
                                type:"th",
                                children:"Apelido"
                            })
                        ]
                    })
                ]
            }),
            TBody({
                children:[
                    Row({
                        children:[
                            Col({
                                type:"td",
                                children:"Braimo"
                            }),
                            Col({
                                type:"td",
                                children:"Selimane"
                            })
                        ]
                    })
                ]
            })
        ]
    })
}


export default App;