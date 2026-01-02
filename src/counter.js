const modules = import.meta.glob('./challenges/**/*.js');

let timerInterval;
let play = false;
let seconds = localStorage.getItem('seconds') ? parseInt(localStorage.getItem('seconds')) : 0;

function startTimer() {
  if (play) {
    play = false
    // clearInterval(timerInterval);
    stopTimer()
    document.getElementById('new-day').innerText = 'Play'
  } else {
    play = true
    document.getElementById('new-day').innerText = 'Stop'
  }

  // Salva o tempo atual no localStorage
  timerInterval = setInterval(() => {
    seconds++;
    localStorage.setItem('seconds', seconds);  // Atualiza o valor do tempo no localStorage
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  localStorage.setItem('seconds', seconds); // Reseta o tempo no localStorage
  updateTimerDisplay();
}

function updateTimerDisplay() {
  if (document.getElementById('timerDisplay')) {
    document.getElementById('timerDisplay').textContent = seconds;
  }
}

function createHierarchy(modules) {
  const hierarchy = {};

  Object.keys(modules).forEach((path) => {
    const [_, folder, file] = path.match(/\.\/challenges\/([^/]+)\/([^/]+)/) || [];

    if (folder && file) {
      if (!hierarchy[folder]) {
        hierarchy[folder] = [];
      }
      hierarchy[folder].push({ file, loader: modules[path] });
    }
  });

  return hierarchy;
}

async function createButtons(hierarchy) {
  const container = document.getElementById('list')
  const output = document.getElementById('output')
  
  Object.entries(hierarchy).forEach(([folder, files]) => {
    const folderContainer = document.createElement('div');
    folderContainer.style.margin = '10px 0';

    const folderTitle = document.createElement('h3');
    folderTitle.textContent = folder.replace('-', ' ');
    folderContainer.appendChild(folderTitle);

    files.forEach(({ file, loader }) => {
      const button = document.createElement('button');
      button.textContent = file.replace('.js', '').replace('-', ' ');
      button.style.margin = '5px';

      button.addEventListener('click', async () => {
        const module = await loader();
        if (module.default) {
          const result = await module.default(); 

          output.innerText = result
        } else {
          console.warn(`Nenhuma função default exportada em ${file}`);
        }
      });

      folderContainer.appendChild(button);
    });

    container.appendChild(folderContainer);
  });
}

export function setupCounter() {
  const hierarchy = createHierarchy(modules);
  createButtons(hierarchy);

  updateTimerDisplay();

  document.getElementById('new-day').addEventListener('click', startTimer)
}
