import React from 'react'
import whatsappIcon from '../../assets/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHyrPNpE8yXDw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=OwRGGOEJa1LjzpRTmO-zknZ4EUtQQpOQ6jxjJJF9-xQ" alt="Paulo"/>
                        <div>
                            <strong>Paulo Egidio</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br/><br/>
                        Apaixonado por explodir coisas em laboratório.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Entrar em contator"/>
                            Entrar em contato
                        </button>
                    </footer>
        </article>
    )
}

export default TeacherItem