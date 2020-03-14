import React, { Component } from 'react'
import './style.css'

export default class Footer extends Component {
    render() {
        return (
            <div className='rodape'>
                <ul>
                    <li>
                        <a>
                            <i className="fa fa-linkedin"></i>
                            https://www.linkedin.com/in/augusto-henrique-do-amaral-49a084139/
                        </a>
                    </li>

                    <li>
                        <a>
                            <i className="fa fa-github"></i>
                            https://github.com/augusto44444
                        </a>
                    </li>
                    <li>
                        <a>
                            <i href='' className="fa fa-google-plus"></i>
                            augusto.h.amaral@gmail.com
                        </a>
                    </li>
                </ul>
                <span>Clique para subir</span>
                <strong>Copyright&copy;</strong>
                <small> <abbr title='Escrito depois(post scriptum [Latim])' >PS</abbr>: não tem copyright</small>
            </div>
        )
    }
}
