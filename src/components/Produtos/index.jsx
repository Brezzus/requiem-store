import './Produtos.css'

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
                            <img src={Ada} alt="Figure Ada Wong"/>
                            <span className='badge-venda'>Mais vendido </span>
                        </div>
                        <div className='card-info'>
                            <h3>Ada Wong Figure</h3>
                            <p className='preco'>R$ 160</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>

                     <div className='card'>
                        <div className='card-image'>
                            <img src={Leon} alt="Figure Ada Wong"/>
                            <span className='badge-venda'>Promoção Requiem </span>
                        </div>
                        <div className='card-info'>
                            <h3>Ada Wong Figure</h3>
                            <p className='preco'>R$ 130</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    
}