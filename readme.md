# Prerequisites:

    - Git
    - Javascript / better if also aware about es6
    - DOM api
    - HTML/CSS/JQuery(?)
    - Beneficial: setTimer/setInterval/Promise/requests
    - Command line / Shell


# Day 1:

    - branch 1: 2:00 hr
        - in browser, simple hello world - functional / ReactDOM.render / createElement
        - talk about component based architecture
        - we could plugin to any dom of existing website, ...
        - introduce jsx  & React.Component - same as above - modified
        - explain jsx, introduce render method, explain declarative nature
        - adding styles
        - jsx - xss prevention - safe to use user input (advanced !!)
    - branch 3: 2:00 hr
        - in browser, introduce state & props
        - props default to true, literals, etc...
        - introduce multiple components & how to plug them together
        - children
        - constructor, PropTypes
    - branch 4: 1:00 hr  (?? do we need this ??)
        - integrating 3rd party plugins - progressive transformation to React
        - dangerouslySetInnerHTML
    - branch 5: 2:30 hr
        - set-up node, npm
        - explain webpack, babel (?? defer to last day ??)
        - introduce create react app
        - Same examples from before, recreate as a SPA, running locally
    - branch 6: 1:00 hr
        - Adding action/event handlers to the mix
        - talk about synthetic events (??)
    - course work

# Day 2:

    - branch 7: 2:00 hr
        - add inputs/ checkboxes/ forms etc
        - controlled / uncontrolled components
        - refs
    - branch 8: 2:00 hr
        - lifecycle hooks
        - componentDidMount/ componentWillUnmount
        - state update in not synchronous
        - hooks for props change & state change
        - shouldCompoentUpdadte (? advanced)
    - branch 9: 4:00 hr
        - an example project which builds on forms/events/lifecycle etc
    - course work

# Day 3:

    - branch 10: 2:00 hrs
        - lifting state upwards - through handlers / ! contextTypes
        - introduce devTools
        - introduce OSM api
            - http://wiki.openstreetmap.org/wiki/API_v0.6
            - http://wiki.openstreetmap.org/wiki/OpenLayers_Simple_Example
            - http://wiki.openstreetmap.org/wiki/Openlayers_POI_layer_example
            - http://wiki.openstreetmap.org/wiki/OpenLayers_Marker_Example
        - Or leaflet - simpler / better documented
            - http://leafletjs.com/examples/quick-start/
            - https://github.com/PaulLeCam/react-leaflet
        - https://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/
        - http://map.reactd3.org
        - https://uber.github.io/react-map-gl/#/
    - final task: 6:00 hrs
        - maps related tasks / 4 varieties ?


# Advanced (if time permits)

    - jest
    - storybook
    - Higher Order Components, cross cutting concerns
    - flux/redux (?? should we move it to day 3 ??)
    - ContextTypes
    - reconciliation
    - react 16 - portals
    - react 16 - error boundaries (?? should be day 2/3 ??)
    - thunks / sagas
    - routing, multiple views (?? beneficial to include this ??)
    - recompose
    - https://reactjs.org/docs/thinking-in-react.html
    - http://lucasmreis.github.io/blog/simple-react-patterns/
