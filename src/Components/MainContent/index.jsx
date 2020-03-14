import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'


import RenderList from './ListComponent'
import HeaderMainContainer from './MainContentHeader'

class MainContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='MainContent'>
                <HeaderMainContainer />
                <RenderList />
            </div >
        )
    }
}

const mapStateToProps = state => ({
    lista: state.lista.Lista
})

export default connect(mapStateToProps)(MainContent)