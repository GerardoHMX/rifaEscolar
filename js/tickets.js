const tickets = {
  '000': { numero:'000', estado: 'vendido', fecha: '01/11/2024', vendedor: 'Gerardo Huizar', comprador: 'Jonh Walker', telefono: '+52 875 42 45' , correo: 'jonh.walher@gmail.com' },
};

const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.getElementsByClassName("close")[0];
const estados = ["disponible", "vendido"];
const totalTickets = 1000;
const mostrarAlComprador = true;

function updateGraph() {
  const soldTickets = Object.keys(tickets).length;
  document.getElementById('ticket-count').innerText = soldTickets;
  document.getElementById('progress-fill').style.width = (soldTickets / totalTickets) * 100 + '%';
}

function generarEspacio(numero) {
  const numeroFormateado = numero.toString().padStart(3, "0");
  if (tickets[numeroFormateado]) {
    return {
      numero: numeroFormateado,
      ...tickets[numeroFormateado],
    };
  }
  return {
    numero: numeroFormateado,
    estado: estados[0],
    vendedor: ``,
    comprador: ``,
    telefono: ``,
    fecha: ``,
    correo: ``,
  };
}

function crearGrid() {
  for (let i = 0; i < 1000; i++) {
    const espacio = generarEspacio(i);
    const div = document.createElement("div");
    div.className = `espacio ${espacio.estado}`;
    div.textContent = espacio.numero;
    div.addEventListener("click", () => mostrarDetalle(espacio));
    grid.appendChild(div);
  }
}

function mostrarDetalle(espacio) {
  modalContent.innerHTML = `
        <table>
          <tr>
            <td><strong>Número:</strong> ${espacio.numero}</td>
            <td><strong>Estado:</strong> ${espacio.estado}</td>
          </tr>
          <tr>
            <td><strong>Vendedor:</strong> ${espacio.vendedor || 'No asignado'}</td>
            <td><strong>Fecha compra:</strong> ${espacio.fecha || 'No disponible'}</td>
          </tr>          
          ${mostrarAlComprador ? `<tr> <td colspan="2"><strong>Comprador:</strong> ${espacio.comprador || ''}</td> </tr>` : ''}
          ${mostrarAlComprador ? `<tr> <td colspan="2"><strong>Correo:</strong> ${espacio.correo || ''}</td> </tr>` : ''}
          ${mostrarAlComprador ? `<tr> <td colspan="2"><strong>Teléfono:</strong> ${espacio.telefono || ''}</td> </tr>` : ''}          
        </table>
    `;
  modal.style.display = "block";
}

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

updateGraph();
crearGrid();
