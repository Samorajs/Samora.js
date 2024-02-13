import { View } from './src/components/Views';
import "./index.css"
import { Footer } from './src/components/Footer';
import { Text } from './src/components/Text';

const App = () => {
    return View({
        type:"div",
        style: {
            backgroundColor: "red", 
            width: "500px", 
            height: "500px",
            transform:"rotate(15deg)",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
        className: "red",
        imo:"sjjsj",
        onclick: () => alert("Hello"),
        children:[
            View({
                type:"aside",
                style: {
                    backgroundColor: "green", 
                    width: "100px", 
                    height: "100px",
                    transform:"rotate(15deg)"
                },
                onmouseup: () => alert("Mouse is up"),
                children:[
                    Text({
                        type:"p",
                        children:"Hello world!",
                        style:{background:"blue"}
                    })
                ]

            })
        ]
    })
}


export default App;