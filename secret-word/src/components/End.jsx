import "./End.css"

const End = ({retry, score}) => {
  return (
    <div>
      <section>
      <h2 id="game-over-title">Fim de Jogo!</h2>
      <p>Sua pontuação: <span id="game-over-score">{score}</span>pts.</p>
      <button onClick={retry}>Reiniciar Jogo</button>
      </section>
    </div>
  )
}

export default End;
