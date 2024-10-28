
const faqDataES = [
  {
    question: "¿Cuál es el propósito de la rifa escolar?",
    answer:
      "El objetivo de la rifa es recaudar fondos exclusivamente para financiar el viaje de fin de curso de los alumnos de 4º de ESO.",
  },
  {
    question: "¿Cuenta la rifa con autorización oficial?",
    answer:
      "Sí, la rifa cuenta con la autorización formal de la Dirección del IES Torre Almenara, que garantizará, respaldará y legitimará el sorteo.",
  },
  {
    question: "¿Cumple la rifa con las normativas legales?",
    answer:
      "La rifa cumple con todas las regulaciones legales. Es un sorteo con un número limitado de boletos y participantes. Los premios son modestos y en especie (objetos o bienes, no dinero). El ganador se selecciona al azar, utilizando los resultados de la lotería tradicional de la ONCE. Las rifas requieren permisos específicos, pero no una licencia general. El evento está diseñado para recaudar fondos sin fomentar el juego adictivo ni el enriquecimiento personal. ",
  },
  {
    question: "¿Quién puede participar en la rifa?",
    answer:
      "Cualquier persona puede participar comprando uno o más boletos, sin límite en la cantidad de boletos por persona. La rifa no está limitada sólo a la comunidad escolar.",
  },
  {
    question: "¿Cómo se realizará la compra de boletos?",
    answer:
      "El precio de los boletos se anunciará en euros. Cada persona debe adquirir al menos un boleto para participar, sin límite de compra por persona. Los boletos serán únicos, no fraccionables y tendrán un número individual registrado en una base de datos que almacenará la información del comprador, vendedor y el número del boleto. La venta estará disponible durante un período establecido con fecha de inicio y finalización.",
  },
  {
    question: "¿Cómo puedo comprar boletos?",
    answer:
      "Los boletos estarán disponibles para su compra a través de los alumnos que participen como organizadores de la rifa.",
  },
  {
    question: "¿Cómo se formaliza la venta de los boletos?",
    answer:
      "Registrando los datos del comprador (teléfono o correo electrónico) en el talonario. Si el espacio es insuficiente se puede utiliza el reverso del lomo del boleto. Además, es preferible que el mismo comprador escriba sus datos personales para evitar errores.",
  },
  {
    question: "¿Cómo se protegen los datos personales de los participantes?",
    answer:
      "Cualquier dato personal recogido (como nombres, números de contacto o correos electrónicos) será utilizado únicamente para los fines específicos de la rifa escolar. Estos datos se almacenarán hasta que se haya entregado el o los premios de la rifa. Una vez concluido el evento, todos los datos personales recogidos serán eliminados de forma segura.",
  },
  {
    question: "¿Qué pasa si pierdo o daño el boleto(s)?",
    answer:
      "Los boletos no pueden ser reemplazados, anulados o descartados del sorteo. Podrás reclamar el premio si estas debidamente registrado.",
  },
  {
    question:
      "¿Puedo comprar un boleto anónimamente, es decir, sin proporcionar mis datos personales?",
    answer:
      "Sí, en caso de resultar ganador, deberás presentar físicamente el boleto y tú serás responsable de atender el llamado para reclamar el premio.",
  },
  {
    question: "¿Puedo realizar la venta cobrando a través de Bizum o PayPal?",
    answer:
      "Sí, a la cuenta personal del alumno o de sus padres, solo en estas plataformas. Será necesario verificar el pago antes de entregar el boleto.",
  },
  {
    question:
      "¿El vendedor puede ofrecerme un descuento sobre el costo del boleto?",
    answer:
      "Sí, el descuento ofrecido afecta exclusivamnente al alumno vendedor, consideramos que es mejor vender los boletos a un precio reducido que no venderlos.",
  },
  {
    question: "¿Tienen los boletos alguna garantía de seguridad?",
    answer:
      "Los boletos son impresos en imprenta sobre papel de Seguridad Anticopia y a color en una cara y lleva doble numeración en matriz y cuerpo. El boleto incluirá un QR donde el comprador puede obtener más información del evento.",
  },
  {
    question:
      "¿Cómo se garantiza la transparencia en la gestión del dinero recaudado?",
    answer:
      "Se lleva un registro detallado de todas las ventas de boletos. Al finalizar la rifa, se presentará un informe financiero que detalle los ingresos, gastos y el monto neto recaudado para el viaje.",
  },
  {
    question:
      "¿Qué sucede si se cancela el viaje o no se alcanza la meta económica?",
    answer:
      "En caso de que no se alcance la meta económica o el viaje sea cancelado por razones ajenas a la rifa, los fondos recaudados se destinarán a actividades o eventos escolares que beneficien a los alumnos de 4º de ESO.",
  },
  {
    question: "¿Cómo se realizará el sorteo?",
    answer:
      "El sorteo se basará en los números de la lotería de la ONCE. El número ganador de la rifa coincidirá con los 3 últimos dígitos del sorteo 'Cupón diario' de la ONCE. Si no hay coincidencias exactas, se aplicarán métodos de descarte, eliminando un dígito hasta encontrar un ganador. Siempre habrá un ganador para cada sorteo.",
  },
  {
    question: "¿En qué consiste el Método de descarte?",
    answer:
      "En caso de que no se haya vendido el boleto ganador o no se reclame el premio, se quitará el último dígito del número ganador de la ONCE. Por ejemplo, si el número ganador de la ONCE es “1234567” y los boletos de la rifa son de tres dígitos, el primer intento buscará el boleto que coincida con “567”. Si no hay coincidencia, el segundo intento usará “456”, el tercer intento “345”, el cuarto intento “234”, y el quinto intento “123”.",
  },
  {
    question: "¿Qué se necesita para reclamar el premio?",
    answer:
      "Para reclamar el premio, el ganador deberá presentar el boleto ganador y/o estar correctamente registrado en el talonario del vendedor del boleto.",
  },
  {
    question:
      "¿Qué sucede si el número ganador no se ha vendido o el ganador no reclama su premio?",
    answer:
      "Cada sorteo debe tener un ganador. Si el número ganador no corresponde a un boleto vendido o si el ganador no reclama su premio, se utilizará el método de descarte. Este método consiste en lo siguiente: Se buscará el boleto que coincida con los últimos dígitos del número premiado por la Lotería de la ONCE. Si no hay coincidencia, se eliminará el último dígito del número de la ONCE y se buscará de nuevo el boleto ganador con los dígitos restantes. Este proceso continuará hasta que se encuentre un ganador que reclame el premio. Si después de aplicar este proceso no se encuentra un ganador, el premio se sorteará considerando a todos los boletos vendidos en presencia de la Directora del Instituto .",
  },
  {
    question: "¿Cómo se anunciará al ganador?",
    answer:
      "El ganador será anunciado un día después de efectuarse el sorteo de la ONCE, se notificará directamente al ganador (por teléfono, correo electrónico, etc.) además del tablón de anuncios y las redes sociales del Instituto.",
  },
  {
    question: "¿Cuál es el tiempo límite para reclamar el premio?",
    answer:
      "Los ganadores de la rifa tienen un plazo de 5 días hábiles (de lunes a viernes) para reclamar su premio. Si el premio no se reclama dentro de este periodo, se aplicará el método de descarte o se destinará el premio a otro uso relacionado con la recaudación de fondos.",
  },
  {
    question: "¿Cuándo se entregarán los premios?",
    answer:
      "Los premios se entregarán en el Instituto dentro del horario escolar, en presencia de la Directora del Instituto, garantizando transparencia y cumplimiento de las reglas.",
  },
  {
    question: "¿Existen prohibiciones o conflictos de interés?",
    answer:
      "Un vendedor puede participar, pero para evitar conflictos de interés, debe adquirir su boleto a través de otro vendedor. El vendedor no podrá participar con los números de boletos asignados a su propio talonario. Cualquier intento de manipulación o fraude resultará en la descalificación inmediata del número del boleto.  Para reclamar el premio, el ganador deberá presentar el boleto ganador y/o estar correctamente registrado en el talonario del vendedor del boleto.",
  },
  {
    question: "¿Puede cancelarse o modificarse la rifa?",
    answer:
      "Los organizadores pueden cancelar o modificar la rifa solo antes del inicio de la venta de boletos. Cualquier modificación se comunicará con antelación a los participantes a través de redes sociales, correos, tablones de anuncios, etc. Una vez impresos los boletos se considera iniciada la fecha de venta y ya no será posible cancelar el sorteo.",
  },
  {
    question:
      "¿Cuál es la meta económica del proyecto y cuántos alumnos participan?",
    answer: "Meta por alumno: Cada alumno tiene una meta de 750€.",
  },
  {
    question: "¿Cuál es el precio de los boletos y cuántos se venderán?",
    answer:
      "Cada boleto tiene un precio de 10€. Se planea vender 999 boletos en cada sorteo. Cada alumno necesita vender un promedio de 30 boletos por sorteo para alcanzar su objetivo.",
  },
  {
    question: "¿Cuántos sorteos se realizan y cuál es el costo de los premios?",
    answer:
      "Número de sorteos: Se realizarán 3 sorteos: uno en noviembre-diciembre, otro en enero-marzo, y un tercero en abril-junio. Costo de los premios: Cada sorteo tendrá un costo de premios de 800€.",
  },
  {
    question:
      "¿Cuál será la recaudación por alumno y su aportación a los gastos?",
    answer:
      "Recaudación por alumno: Se estima que cada alumno recaude un promedio de 632.80€ a través de la venta de boletos. Aportación individual para cubrir gastos: Cada alumno deberá aportar 90€ en total para los tres sorteos, lo que equivale a 30€ por sorteo.",
  },
  {
    question: "¿Cuál es el beneficio final esperado para el viaje?",
    answer:
      "Después de cubrir los costos de los premios y de la organización del sorteo, se espera un beneficio neto de 19,607.4€ para financiar parte de los gastos del viaje de fin de curso.",
  },
];

const faqDataEN = [
  {
    question: "What is the purpose of the raffle?",
    answer:
      "The purpose of the raffle is to raise funds exclusively to finance the end-of-year trip of the 4th ESO pupils.",
  },
  {
    question: "Does the raffle have official authorisation?",
    answer:
      "Yes, the raffle has the formal authorisation of the Management of IES Torre Almenara, which will guarantee, support and legitimise the raffle.",
  },
  {
    question: "Does the raffle comply with the legal regulations?",
    answer:
      "The raffle complies with all legal regulations. It is a raffle with a limited number of tickets and participants. The prizes are modest and in kind (objects or goods, not money). The winner is selected at random, using the results of the traditional ONCE lottery. Raffles require specific permits, but not a general licence. The event is designed to raise funds without encouraging addictive gambling or personal enrichment. ",
  },
  {
    question: "Who can participate in the raffle?",
    answer:
      "Anyone can participate by purchasing one or more tickets, with no limit on the number of tickets per person. The raffle is not limited to the school community only.",
  },
  {
    question: "How will the purchase of tickets take place?",
    answer:
      "The price of the tickets will be announced in Euro. Each person must purchase at least one ticket to participate, with no limit per person. The tickets will be unique, non-fractionable and will have an individual number registered in a database that will store the information of the buyer, seller and the ticket number. The sale will be available for a set period of time with a start and end date.",
  },
  {
    question: "How can I buy tickets?",
    answer:
      "Tickets will be available for purchase through students participating as raffle organisers.",
  },
  {
    question: "How is the sale of tickets formalised?",
    answer:
      "By registering the buyer's details (telephone or e-mail) on the ticket booklet. If there is not enough space, the back of the ticket can be used. In addition, it is preferable that the purchaser himself writes his personal details to avoid mistakes.",
  },
  {
    question: "How is the personal data of the participants protected?",
    answer:
      "Any personal data collected (such as names, contact numbers or e-mail addresses) will only be used for the specific purposes of the school raffle. These data will be stored until the raffle prize(s) have been awarded. After the conclusion of the event, all personal data collected will be securely deleted.",
  },
  {
    question: "What happens if I lose or damage the ticket(s)?",
    answer:
      "Tickets cannot be replaced, voided or discarded from the draw. You will be able to claim the prize if you are properly registered.",
  },
  {
    question:
      "Can I buy a ticket anonymously, i.e. without giving my personal details?",
    answer:
      "Yes, if you are a winner, you must physically present the ticket and you will be responsible for answering the call to claim the prize.",
  },
  {
    question: "Can I make the sale using Bizum or PayPal?",
    answer:
      "Yes, to the student's or parent's personal account, only on these platforms. It will be necessary to verify the payment before delivering the ticket.",
  },
  {
    question: "Can the seller give me a discount on the cost of the ticket?",
    answer:
      "Yes, the discount offered is for the student seller only, we consider it better to sell the tickets at a reduced price than not to sell them at all.",
  },
  {
    question: "Do the tickets have a security guarantee?",
    answer:
      "The tickets are printed on Anti-Copy Security paper and are colour printed on one side and have double numbering on the matrix and body. The ticket will include a QR where the buyer can get more information about the event.",
  },
  {
    question:
      "How is transparency in the management of the money raised ensured?",
    answer:
      "A detailed record of all ticket sales is kept. At the end of the raffle, a financial report detailing income, expenses and the net amount raised for the trip will be submitted.",
  },
  {
    question:
      "What happens if the trip is cancelled or if the financial goal is not reached?",
    answer:
      "In the event that the financial goal is not reached or the trip is cancelled for reasons unrelated to the raffle, the funds raised will be used for school activities or events that benefit 4th ESO students.",
  },
  {
    question: "How will the draw be carried out?",
    answer:
      "The draw will be based on the ONCE lottery numbers. The winning raffle number will match the last 3 digits of the ONCE Daily coupon draw. If there is no exact match, discard methods will be applied, eliminating one digit until a winner is found. There will always be one winner for each draw.",
  },
  {
    question: "What does the Discard Method consist of?",
    answer:
      "In case the winning ticket has not been sold or the prize is not claimed, the last digit of the winning ONCE number will be removed. For example, if the winning ONCE number is “1234567” and the raffle tickets are three digits long, the first attempt will look for the ticket that matches “567”. If there is no match, the second attempt will use “456”, the third attempt “345”, the fourth attempt “234”, and the fifth attempt “123”.",
  },
  {
    question: "What is needed to claim the prize?",
    answer:
      "In order to claim the prize, the winner must present the winning ticket and/or be correctly registered in the ticket seller's ticket book.",
  },
  {
    question:
      "What happens if the winning number is not sold or the winner does not claim his prize?",
    answer:
      "Each draw must have a winner. If the winning number does not correspond to a sold ticket or if the winner does not claim his prize, the discard method will be used. This method consists of the following: The ticket matching the last digits of the ONCE Lottery winning number will be searched for. If there is no match, the last digit of the ONCE number will be eliminated and the winning ticket will be searched again with the remaining digits. This process will continue until a winner is found to claim the prize. If after applying this process a winner is not found, the prize will be drawn considering all the tickets sold in the presence of the Director of the Institute.",
  },
  {
    question: "How will the winner be announced?",
    answer:
      "The winner will be announced one day after the ONCE draw has taken place, the winner will be notified directly (by telephone, email, etc.) in addition to the Institute's notice board and social networks.",
  },
  {
    question: "What is the time limit for claiming the prize?",
    answer:
      "Raffle winners have 5 working days (Monday to Friday) to claim their prize. If the prize is not claimed within this period, the discard method will be applied or the prize will be put to another fundraising related use.",
  },
  {
    question: "When will the prizes be awarded?",
    answer:
      "The prizes will be awarded at the Institute during school hours, in the presence of the Headmistress of the Institute, ensuring transparency and compliance with the rules.",
  },
  {
    question: "Are there any prohibitions or conflicts of interest?",
    answer:
      "A seller may participate, but to avoid conflicts of interest, he must purchase his ticket through another seller. The vendor will not be able to participate with the ticket numbers assigned to his own ticket book. Any attempt at tampering or fraud will result in immediate disqualification of the ticket number.  In order to claim the prize, the winner must present the winning ticket and/or be properly registered in the ticket seller's ticket book.",
  },
  {
    question: "Can the raffle be cancelled or modified?",
    answer:
      "The raffle can be cancelled or modified by the organisers only before the start of ticket sales. Any changes will be communicated in advance to the participants via social media, mailings, notice boards, etc. Once the tickets have been printed, the sale date is considered to have started and it will no longer be possible to cancel the raffle.",
  },
  {
    question:
      "What is the financial goal of the project and how many students are participating?",
    answer: "Goal per pupil: Each pupil has a goal of €750.",
  },
  {
    question:
      "What is the price of the tickets and how many tickets will be sold?",
    answer:
      "Each ticket is priced at €10. It is planned to sell 999 tickets in each draw. Each student needs to sell an average of 30 tickets per draw to reach their target.",
  },
  {
    question: "How many draws are held and what is the cost of the prizes?",
    answer:
      "Number of draws: There will be 3 draws: one in November-December, one in January-March, and one in April-June. Cost of the prizes: Each draw will have a prize cost of €800.",
  },
  {
    question:
      "What will be the revenue per pupil and their contribution to the expenses?",
    answer:
      "Revenue per pupil: It is estimated that each pupil will raise an average of €632.80 through ticket sales. Individual contribution to cover expenses: Each pupil will have to contribute €90 in total for the three draws, equivalent to €30 per draw.",
  },
  {
    question: "What is the expected final profit from the trip?",
    answer:
      "After covering the costs of the prizes and the organisation of the raffle, a net profit of 19,607.4€ is expected to finance part of the costs of the end-of-year trip.",
  },
];

let faqData = faqDataES;

function onChangeLanguage() {
  document.documentElement.lang = currentLanguage;
  faqData = document.documentElement.lang === "es" ? faqDataES : faqDataEN;
  renderFaqList(faqData)
}

const faqList = document.getElementById("faq-list");
const searchInput = document.getElementById("search-input");

function createFaqItem(question, answer) {
  const faqItem = document.createElement("div");
  faqItem.classList.add("faq-item");

  const questionElement = document.createElement("div");
  questionElement.classList.add("faq-question");
  questionElement.textContent = question;

  const answerElement = document.createElement("div");
  answerElement.classList.add("faq-answer");
  answerElement.textContent = answer;

  faqItem.appendChild(questionElement);
  faqItem.appendChild(answerElement);

  questionElement.addEventListener("click", () => {
    questionElement.classList.toggle("active");
    answerElement.classList.toggle("show");
  });

  return faqItem;
}

function renderFaqList(faqItems) {    
  faqList.innerHTML = "";
  if (faqItems.length === 0) {
    const noResults = document.createElement("p");
    noResults.classList.add("no-results");
    noResults.textContent = "No se han encontrado resultados coincidentes";
    faqList.appendChild(noResults);
  } else {
    faqItems.forEach((item) => {
      const faqItem = createFaqItem(item.question, item.answer);
      faqList.appendChild(faqItem);
    });
  }
}

function searchFaq(query) {
  const normalizedQuery = query.toLowerCase();
  return faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(normalizedQuery) ||
      item.answer.toLowerCase().includes(normalizedQuery)
  );
}

searchInput.addEventListener("input", (e) => {
  const searchQuery = e.target.value.trim();
  const filteredFaq = searchFaq(searchQuery);
  renderFaqList(filteredFaq);
});

// Initial render
renderFaqList(faqData);

// Add event listener to the language toggle button
document.addEventListener("DOMContentLoaded", () => {
  const languageToggle = document.getElementById("languageToggle");
  languageToggle.addEventListener("click", onChangeLanguage);
});
