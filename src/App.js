import React from 'react';
import {connect} from 'react-redux';
import Card from "./Card";

function App() {

    return (
        <div>
           <Card/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    bye: state.cards,
    hello: state.columns
})

export default connect(mapStateToProps)(App);
