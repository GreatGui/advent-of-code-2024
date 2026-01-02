import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';

// Usando import.meta.url para obter o diretório atual
const __dirname = dirname(new URL(import.meta.url).pathname);

function createFolderWithFile(numberOfDay) {
  const srcDir = join(__dirname, 'src/challenges'); 
  const folderName = `day-${numberOfDay}`;
  const folderPath = join(srcDir, folderName);

  if (!existsSync(folderPath)) {
    mkdirSync(folderPath, { recursive: true });
    console.log(`Pasta ${folderName} criada com sucesso dentro de src!`);

    const files = [
      {
        name: "part-1.js",
        content: `import { readTxtFile } from "../../utils/fileReader";

export default async () => {
  let total = 0
  const inputText = await readTxtFile('/inputs/input-${numberOfDay}.txt')

  const input = inputText.split('\\n')

  

  return total
}\n`,
      },
      {
        name: "part-2.js",
        content: `\n`,
      },
    ];

    for (const file of files) {
      const pathOfFile = join(folderPath, file.name);

      writeFileSync(pathOfFile, file.content);
      console.log(`Arquivo ${file.name} criado com sucesso dentro de ${folderName}!`);
    }
  } else {
    console.error(`A pasta ${folderName} já existe na pasta src. Por favor, remova-a ou escolha um novo nome.`);
  }
}

const numberOfDay = process.argv[2];

if (!numberOfDay || isNaN(numberOfDay)) {
  console.error('Por favor, forneça um número como argumento.');
} else {
  createFolderWithFile(Number(numberOfDay));
}
