import { View } from './src/components/View';
import "./index.css"
import { List, ListItem } from './src/components/ListItem';
import { Link } from './src/components/Link';
import { Text } from './src/components/Text';
import { Table, TBody, Col, THead, Row } from './src/components/Table';
import { Checkbox, FilePicker, Form, Field, Label, Slider } from './src/components/Form';
import { Divider } from './src/components/Divider';

const App = () => {
    return Form({
        children:[
            Field({
                hint:"Insira o seu nome",
                value: "Braimo"
            }),
            Divider({}),
            Field({
                type:"password",
                hint:"Insira o seu nome",
                value: "Braimo"
            }),
            Divider({}),
            FilePicker({}),
            Divider({}),
            Label({
                anchorTo:"checkbox",
                children:"Click me"
            }),
            Checkbox({ id: "checkbox"}),
            Field({
                type:"submit",
                value:"Entrar"
            }),
            Slider({})
        ]
    })
}


export default App;