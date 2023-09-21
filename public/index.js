const box = document.querySelector('.box-2');

const comandos = [
    { categoria: 'info', nome: '/botinfo', status: 'Online', descricao: 'Obtenha informações sobre o bot.', },
    { categoria: 'info', nome: '/convites', status: 'Online', descricao: 'Veja os convites de um usuário.', },
    { categoria: 'info', nome: '/lol', status: 'Online', descricao: 'Veja informações deuma conta de lol.', },
    { categoria: 'info', nome: '/mcstatus', status: 'Online', descricao: 'Verifique o status de um servidor de Minecraft.', },
    { categoria: 'info', nome: '/moedas', status: 'Online', descricao: 'Verifique o valor de algumas moedas.', },
    { categoria: 'info', nome: '/serverinfo', status: 'Online', descricao: 'Obtenha informações sobre o servidor', },
    { categoria: 'info', nome: '/userinfo', status: 'Online', descricao: 'Obtenha informações sobre um usuário', },
    { categoria: 'utils', nome: '/avatar', status: 'Online', descricao: 'Veja o avatar de um usuário', },
    { categoria: 'utils', nome: '/calculadora-juros-compostos', status: 'Online', descricao: 'Calcule juros compostos', }, { categoria: 'utils', nome: '/ocr', status: 'Offline', descricao: 'Use reconhecimento óptico de caracteres', },
    { categoria: 'utils', nome: '/ranking', status: 'Offline', descricao: 'Veja o ranking de servidores', },
    { categoria: 'moderacao', nome: '/ban', status: 'Online', descricao: 'Bane um usuário', },
    { categoria: 'moderacao', nome: '/clear', status: 'Online', descricao: 'Limpa mensagens do chat', },
    { categoria: 'moderacao', nome: '/kick', status: 'Online', descricao: 'Expulsa um usuário do servidor', },
    { categoria: 'moderacao', nome: '/unban', status: 'Online', descricao: 'Remove o banimento de um usuário', },
];

function atualizarCategoria(categoria) {
    const categoriaComandos = comandos.filter((comando) => comando.categoria === categoria);

    const html = `
    <div class="command-section">
      <h4>Comando</h4>
      <ul>
        ${categoriaComandos.map((comando) => `<li>${comando.nome}</li>`).join('')}
      </ul>
    </div>
    <div class="status-section">
      <h4>Status</h4>
      <ul>
        ${categoriaComandos.map((comando) => `<li style="color: ${comando.status === 'Offline' ? 'red' : 'rgb(34, 221, 153);'}">${comando.status}</li>`).join('')}
      </ul>
    </div>
    <div class="description-section">
      <h4>Descrição</h4>
      <ul>
        ${categoriaComandos.map((comando) => `<li>${comando.descricao}</li>`).join('')}
      </ul>
    </div>
  `;

    box.innerHTML = html;
}

document.getElementById('infoBtn').addEventListener('click', () => {
    atualizarCategoria('info');
});

document.getElementById('utilsBtn').addEventListener('click', () => {
    atualizarCategoria('utils');
});

document.getElementById('moderacaoBtn').addEventListener('click', () => {
    atualizarCategoria('moderacao');
});
