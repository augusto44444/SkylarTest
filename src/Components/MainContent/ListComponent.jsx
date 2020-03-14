import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SetUser, ClearUser, ChangeList } from '../../Action'
import { bindActionCreators } from 'redux'

import MainContentHeader from './MainContentHeader'
import './style.css'

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }



    closeModal() {
        this.props.ClearUser()
        document.getElementById('divModal').classList.remove('is-active')
    }

    openModal(user, index) {
        this.setState({ index })
        this.props.SetUser(user)
        document.getElementById('divModal').classList.add('is-active')
    }

    EditUser() {
        const List = this.props.lista;
        const { usuario, ChangeList } = this.props
        List.splice(this.state.index, 1, usuario)
        ChangeList(List)
        this.closeModal()
    }

    deleteUser(index) {
        const List = this.props.lista;
        const { ChangeList } = this.props
        List.splice(index, 1)
        ChangeList(List)
        this.closeModal()
    }

    render() {
        return (
            <>
                <p className='celular'>Escorregue o dedo para o lado <i className='fa fa-arrow-right'></i> para editar ou excluir</p>
                <div className='ListRender'>
                    <div id='divModal' className="modal is-clipped">
                        <div className="modal-background"></div>
                        <div className="modal-card">
                            <header className="modal-card-head">
                                <p className="modal-card-title">Editar usuario {this.props.usuario && this.props.usuario.name || ''}</p>
                                <button onClick={() => this.closeModal()} className="delete" aria-label="close"></button>
                            </header>

                            <section className="modal-card-body">
                                <MainContentHeader isEditable={true} />
                            </section>

                            <footer className="modal-card-foot">
                                <button className="button is-success" onClick={() => this.EditUser()}>Salvar alterações</button>

                                <button onClick={() => this.closeModal()} className="button">Cancelar</button>

                            </footer>
                        </div>
                    </div>
                    <table className='table is-striped is-hoverable'>
                        <thead>
                            <tr>
                                <th >id</th>
                                <th className=''>Nome</th>
                                <th >E-mail</th>
                                <th >Telefone</th>
                                <th >Editar</th>
                                <th >Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.lista.map((usuario, index) => {
                                return (
                                    <tr key={index}>
                                        <th >{index}</th>
                                        <td>{usuario.name}</td>
                                        <td >{usuario.email}</td>
                                        <td >{usuario.phone}</td>
                                        <td >
                                            <button className='button is-warning' onClick={() => {
                                                this.openModal(usuario, index)
                                            }}>Editar <i className="fa fa-edit"></i></button>
                                        </td>
                                        <td >
                                            <button
                                                onClick={() => this.deleteUser(index)}
                                                className='button is-danger'>
                                                Excluir <i className="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    lista: state.lista.Lista,
    usuario: state.lista.usuario
})

const mapDispatchToprops = dispatch => bindActionCreators({ SetUser, ClearUser, ChangeList }, dispatch)

export default connect(mapStateToProps, mapDispatchToprops)(ListComponent)