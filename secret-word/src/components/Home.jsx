import "./Home.css";

const Home = ({ startGame }) => {
  return (
    <div className="home">
      <h1>Secret Word</h1>
      <p>Clique para iniciar o jogo!</p>
      <button onClick={startGame}>Jogar</button>
      <div id="how-to-play">
        <div id="how-to-play-wrapper">
          <h3>Como Jogar?</h3>
          <p>
            Você tem que adivinhar uma <span>palavra aleatória</span> com uma
            dica. A cada rodada, você joga uma letra, e se a letra estiver
            presente na palavra, ela é revelada na posição correta. Porém, se a
            letra não estiver na palavra, você perde <span>1 tentativa</span>.
            Ao acertar uma palavra, você ganha <span>100 pontos</span> e{" "}
            <span>1 tentativa</span> como recompensa. Se suas tentativas
            acabarem, você perde o jogo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
