import './Produtos.css'

import Wesker from '../../assets/wesker.jpg'
import Claire from '../../assets/claire.jpg'
import Grace from '../../assets/grace.jpg'
import Chris from '../../assets/redfield.jpg'
import Ada from '../../assets/ada-figure.jpg'
import Leon from '../../assets/leon-figure.jpg'

export default function Produtos() {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <h2>Produtos</h2>
                <p>Conheça os nosso produtos e escolha oque você mais gostou</p>
                <div className='produtos_grid'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={Chris} alt="Figure Chris" />
                            <span className='badge-venda'>Promoção Requiem </span>
                        </div>
                        <div className='card-info'>
                            <h3>Chris Redfield</h3>
                            <p className='preco'>R$ 130</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>


                    </div>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={Ada} alt="Figure Ada Wong" />
                            <span className='badge-venda'>Mais vendidos </span>
                        </div>
                        <div className='card-info'>
                            <h3>Ada Wong</h3>
                            <p className='preco'>R$ 160</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={Claire} alt="Claire Figure" />
                            <span className='badge-venda'>Nova Requiem</span>
                        </div>
                        <div className='card-info'>
                            <h3>Claire Redfield</h3>
                            <p className='preco'>R$ 140</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={Grace} alt="Figure Grace" />
                            <span className='badge-venda'>Mais vendidos </span>
                        </div>
                        <div className='card-info'>
                            <h3>Grace Ashcroft</h3>
                            <p className='preco'>R$ 160</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={Wesker} alt="Figure Wesker" />
                            <span className='badge-venda'>Mais vendido </span>
                        </div>
                        <div className='card-info'>
                            <h3>Albert Wesker</h3>
                            <p className='preco'>R$ 155</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={Leon} alt="Figure Leon" />
                            <span className='badge-venda'>Promoção Requiem </span>
                        </div>
                        <div className='card-info'>
                            <h3>Leon S. Kennedy</h3>
                            <p className='preco'>R$ 130</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}