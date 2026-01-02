import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div>
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </div>
    <h1>Advent of Code</h1>
    <div class="flex">
      <button id="new-day" class="primary">
        Play
      </button>
      <div id="timerDisplay">0</div>
    </div>
    <div id="list" class="flex">

    </div>
    <p id="output" class="read-the-docs">
      Output
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
