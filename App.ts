import { View } from './src/components/View';
import "./index.css"
import { List, ListItem } from './src/components/ListItem';
import { Link } from './src/components/Link';
import { Text } from './src/components/Text';
import { Table, TableBody, TableColumn, TableHead, TableRow } from './src/components/Table';

const App = () => {
    return Table({
        border:"5px",
        children:[
            TableHead({
                children:[
                    TableRow({
                        children:[
                            TableColumn({
                                type:"th",
                                children:"Nome"
                            }),
                            TableColumn({
                                type:"th",
                                children:"Apelido"
                            })
                        ]
                    })
                ]
            }),
            TableBody({
                children:[
                    TableRow({
                        children:[
                            TableColumn({
                                type:"td",
                                children:"Braimo"
                            }),
                            TableColumn({
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