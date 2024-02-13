// src/index.js
import { init } from '../node_modules/snabbdom/build/init'
import { h } from '../node_modules/snabbdom/build/h'
import { attributesModule } from "../node_modules/snabbdom/build/modules/attributes";
import { classModule } from "../node_modules/snabbdom/build/modules/class";
import { datasetModule } from "../node_modules/snabbdom/build/modules/dataset";
import { eventListenersModule } from "../node_modules/snabbdom/build/modules/eventlisteners";
import { styleModule } from "../node_modules/snabbdom/build/modules/style";
import { propsModule } from "../node_modules/snabbdom/build/modules/props";

import App from '../App'

const patch = init([
    classModule,
    attributesModule,
    styleModule,
    propsModule,
    datasetModule,
    eventListenersModule
])

const vnode = h('div#app-root', {}, [App() as any])

patch(document.getElementById('app-root') as any , vnode)
