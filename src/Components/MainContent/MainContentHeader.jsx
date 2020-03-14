import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ChangeList, ChangeUser, ClearUser } from '../../Action'

class HeaderMainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            warning: false
        }
    }

    render() {
        const keyPress = (e) => {
            if (e.key == 'Enter' && !this.props.isEditable) {
                const { name, email, phone } = this.props.usuario
                if (!name) {
                    this.setState({ warning: true })
                    return
                }
                const List = this.props.lista;
                const obj = { name, email, phone }
                List.push(obj)
                this.props.ChangeList(List)
                this.props.ClearUser()
            }
        }
        return (
            <div className='MainContentHeader'>
                <div className="field">
                    <label className="label">Nome</label>
                    <div className="control has-icons-left has-icons-right">
                        <input onKeyPress={keyPress} className="input" type="text" placeholder="Exemplo..." onChange={e => {
                            this.setState({ warning: false })
                            this.props.ChangeUser('name', e.target.value)
                        }} value={this.props.usuario.name} />
                        <span className="icon is-small is-left">
                            <i className="fa fa-user"></i>
                        </span>
                        {this.state.warning ? <p className='tag is-danger'>Nome é obrigatório <a onClick={() => this.setState({ warning: false })}><i className='fa fa-close'></i></a></p> : null}
                    </div>
                </div>
                <div className="field">
                    <label className="label">E-mail</label>
                    <div className="control has-icons-left has-icons-right">
                        <input onKeyPress={keyPress} className="input" type="email" placeholder="E-mail" value={this.props.usuario.email} onChange={e => {
                            this.props.ChangeUser('email', e.target.value)
                        }} />
                        <span className="icon is-small is-left">
                            <i className="fa fa-envelope"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Telefone</label>
                    <div className="control has-icons-left has-icons-right">
                        <input onKeyPress={keyPress} className="input" type="text" placeholder="Numero de telefone" maxLength={13} value={this.props.usuario.phone} onChange={e => {
                            this.props.ChangeUser('phone', e.target.value)
                        }} />
                        <span className="icon is-small is-left">
                            <i className="fa fa-phone"></i>
                        </span>
                    </div>
                </div>

                {this.props.isEditable
                    ?
                    null
                    :
                    <div className="control">
                        <button className="button is-primary is-large" onClick={() => {
                            const { name, email, phone } = this.props.usuario
                            if (!name) {
                                this.setState({ warning: true })
                                return
                            }
                            const List = this.props.lista;
                            const obj = { name, email, phone }
                            List.push(obj)
                            this.props.ChangeList(List)
                            this.props.ClearUser()
                        }}>Adicionar</button>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    lista: state.lista.Lista,
    usuario: state.lista.usuario,
})

const mapDispatchToProps = dispatch => bindActionCreators({ ChangeList, ChangeUser, ClearUser }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMainContent)