import styles from './Carrinho.module.css';

function Carrinho({ lista }) {
    const valorTotal = lista.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

    return (
        <div className={styles.containerCarrinho}>
            <div className={styles.listaProdutos}>
                <h2>🛒 Resumo da Compra</h2>
                {lista.map((item) => (
                    <div key={item.id} className={styles.cardItem}>
                        <img src={item.imagem} alt={item.nome} className={styles.fotoProduto} />

                        <div className={styles.infoProduto}>
                            <h3>{item.nome}</h3>
                            <p>Quantidade: {item.quantidade}</p>
                        </div>

                        <div className={styles.precoBox}>
                            R$ {(item.preco * item.quantidade).toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>

            <hr className={styles.linhaDivisoria} />

            <div className={styles.totalBox}>
                <span className={styles.labelTotal}>Total a Pagar:</span>
                <span className={styles.valorDestaque}>R$ {valorTotal.toFixed(2)}</span>
            </div>

            <button className={styles.botaoFinalizar}>Finalizar Compra</button>
        </div>
    );
}

export default Carrinho;
