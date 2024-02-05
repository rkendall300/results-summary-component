import './App.css';
import memoryIcon from './assets/images/icon-memory.svg';
import reactionIcon from './assets/images/icon-reaction.svg';
import verbalIcon from './assets/images/icon-verbal.svg';
import visualIcon from './assets/images/icon-visual.svg';

function App() {
  return (
    <main>
      <div id="backdrop">
        <div id="card">
          <div id="results">
            <h1 id="title">Your Result</h1>
            <div id="results-display">
              <div id="circle">
                <h2 id="results-score">76</h2>
                <p id="results-scale">of 100</p>
              </div>
            </div>
            <h2 id="great">Great</h2>
            <p id="description">You scored higher than 65% of the people who have taken these tests.</p>
          </div>
          <div id="summary">
            <h2 id="summary-title">Summary</h2>
            <div id="score-holder">
              <div className="score-row" id="reaction">
                <img src={reactionIcon} alt="reaction-icon" id="reaction-icon"></img>
                <p className="score-name">Reaction</p>
                <p className="score-number"><span className="bold">80</span> / 100</p>
              </div>
              <div className="score-row" id="memory">
                <img src={memoryIcon} alt="memory-icon" id="memory-icon"></img>
                <p className="score-name">Memory</p>
                <p className="score-number"><span className="bold">92</span> / 100</p>
              </div>
              <div className="score-row" id="verbal">
                <img src={verbalIcon} alt="verbal-icon" id="verbal-icon"></img>
                <p className="score-name">Verbal</p>
                <p className="score-number"><span className="bold">61</span> / 100</p>
              </div>
              <div className="score-row" id="visual">
                <img src={visualIcon} alt="visual-icon" id="visual-icon"></img>
                <p className="score-name">Visual</p>
                <p className="score-number"><span className="bold">72</span> / 100</p>
              </div>
            </div>
            <button id="continue">Continue</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
