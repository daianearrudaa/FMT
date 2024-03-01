const arquivoJson = document.getElementById('json');


async function fetchData() {
      // Fazer uma solicitação para obter o arquivo JSON usando Fetch API
      const response = await fetch('ex-3.json'); // em parenteses o caminho do json
  
      // Verificar se a solicitação foi bem-sucedida
      if (!response.ok) {
        throw new Error('Não foi possível obter o arquivo JSON');
      }

        // Converter a resposta em formato JSON
    const jsonResposta = await response.json();

    // Exibir o conteúdo JSON na página HTML
    arquivoJson.textContent = JSON.stringify(jsonResposta, null, 2);// formata em srting a resposta do json, null é para zerar filtros, e 2 o numero de espaços para identação
  }

  fetchData()
  .then(() => console.log('Conteúdo JSON exibido com sucesso!'))
  .catch(error => console.error('Ocorreu um erro:', error));