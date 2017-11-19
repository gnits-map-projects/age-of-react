# Prerequisites:

- Git
- JavaScript / better if also aware about ES6
- HTML/CSS/JQuery(?)
- DOM api
- Beneficial: Advanced JS: setTimer/Promise/AJAX
- Command line / Shell


# Branches:

``` bash
git checkout branch_name
```

- `the_beginning`
    - introduce React core APIs in the familiar browser environment
    - String escaping by React
    - Component based architecture
    - functional components
    - class
    - JSX (with babel polyfill) - convert previous work
    - Adding styles // ?

- `the_camp`
    - install node
    - install npm
    - install create-react-app
    - basic commands
        - npm - install package / run dev server / run tests

- `the_preparation`
    - convert the previous examples into single page multi component version
        - modular way / multi file
    - props, state and the like
    - prop-types
    - forms - controlled/uncontrolled - refs
    - events - react to user actions - synthetic events // ?

- `the_attack`
    - new template / chat interface
    - convert into react (static)
    - data flow (through a parent component - revisit)
    - complete with interaction
    - life cycle methods (another template - form -> presentation -> log viewer)

- `the_conquest`
    - map related example(s)
        - data fetching (AJAX)
        - Introduce a map library
            - Leaflet
    - devTools (a run through) - most likely would have done by this point, but if not.


    - Leaflet
        - https://github.com/PaulLeCam/react-leaflet
        - http://leafletjs.com/examples/quick-start/
        - https://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/
    - OSM - Open Street Map
        - http://wiki.openstreetmap.org/wiki/API_v0.6
        - http://wiki.openstreetmap.org/wiki/OpenLayers_Simple_Example
        - http://wiki.openstreetmap.org/wiki/Openlayers_POI_layer_example
        - http://wiki.openstreetmap.org/wiki/OpenLayers_Marker_Example
    - D3
        - http://map.reactd3.org
    - Uber's
        - https://uber.github.io/react-map-gl/#/


# Advanced (if time permits)

- Testing
    - jest
    - storybook

- Data flow
    - flux/redux
    - ContextTypes

- SPA essentials
    - routing, multiple views.
    - thunks / sagas (add-on on flux/redux)

- React Extra
    - reconciliation
    - react 16 - portals
    - react 16 - error boundaries (?? should be day 2/3 ??)

- Good Practices
    - Higher Order Components, cross cutting concerns
    - recompose


# Reference

- https://reactjs.org/docs/thinking-in-react.html
- http://lucasmreis.github.io/blog/simple-react-patterns/
