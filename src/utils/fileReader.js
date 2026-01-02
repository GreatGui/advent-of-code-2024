export async function readTxtFile(filePath) {
  try {
    const response = await fetch(filePath);
    
    if (!response.ok) {
      throw new Error(`Erro ao carregar o arquivo: ${response.statusText}`);
    }

    const text = await response.text();

    return text;
  } catch (error) {
    throw new Error(`Erro ao ler o arquivo: ${error.message}`);
  }
}
