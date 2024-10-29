let currentLanguage = "es";

// Define your translations
const translations = {
  en: {
    schoolRaffle: "School Raffle",
    aboutUs: "About Us",
    contactUs: "Contact us",
    faq: "Asked questions",
    nextRaffle: "Next raffle",
    participate: "Take part!",
    days: "days",
    hours: "hours",
    minutes: "minutes",
    seconds: "seconds",
    active: "Active",
    next: "Next",
    ended: "Ended",
    firstRaffle: "First Raffle",
    secondRaffle: "Second Raffle",
    thirdRaffle: "Third Raffle",
    nextRaffleDate: "December 17, 2024",
    raffleTicketsAvailability: "Available during November and December",
    firstRaffleTicketsAvailability: "Available in November and December",
    secondRaffleTicketsAvailability: "Available in January to March",
    thirdRaffleTicketsAvailability: "Available in April to June",
    raffleTicketsAvailability: "Available in November and December",
    raffleDetail: "Consult all details",
    raffleObjective:
      "The students of 4th ESO Course 2024/25 of IES Torre Almenara are organizing a School Raffle with the aim of raising funds for our exciting end-of-year trip to Tenerife, which will be held from 23 to 27 April 2025.",
    raffleInvitation:
      "We would like to invite you to be part of this initiative and support us by purchasing one or more tickets for our Raffle - the more tickets you buy, the more chances you have to win and contribute to our project!",
    anyQuestions:
      "If you have any questions or queries, please do not hesitate to contact us.",
    writeUsAt: "You can write to us at our email",
    visitUs:
      "You can also visit us at our Institute at the following address: Urb. El Limonar 63, 29649 La Cala de Mijas, Málaga, Spain.",
    helpUs: "We are here to help you",
    grettings: "Thank you for being part of this initiative!",
    aboutTrip: "About our end-of-year trip",
    aboutTripInformation:
      "The trip will take place from 23 to 27 April 2025 and its cost is €742 per student. This price includes travel assistance insurance, transfers, accommodation, activities, and meals. This trip has been organized by Querkus, a company specializing in school trips, which will supervise all activities and provide continuous assistance, with staff available 24 hours a day.",
    tripDetail:
      "It will be an educational, cultural, and recreational experience to get to know and enjoy the island of Tenerife, one of the most important in the Canary archipelago. For five days, we will combine visits to emblematic sites and adventure activities.",
    itinerary: "Itinerary",
    itineraryDay1:
      "Day 1 (April 23): Arrival in Tenerife and visit to the Natural Pools of Garachico and the Drago Milenario.",
    itineraryDay2:
      "Day 2 (April 24): Visit to the famous Loro Park and excursion to the Teide National Park, the highest peak in Spain.",
    itineraryDay3:
      "Day 3 (April 25): Full day at Siam Park, considered the best water park in the world.",
    itineraryDay4:
      "Day 4 (April 26): Boat trip along the cliffs of Los Gigantes with dolphin watching and free time on the beaches of the south of the island.",
    itineraryDay5:
      "Day 5 (April 27): Multi-adventure or water activities in Forestal Park, according to the group's preferences.",
    teamInfo:
      "List of the students of 4th ESO Course 2024/25 of IES Torre Almenara who participated as organizers of the School Raffle.",
    teamMembers: "Team members",
    aboutPrize:"* The students of 4th ESO Course 2024/25 of IES Torre Almenara, chose the prizes of the School Raffle.",
    grettings2:"Great opportunity! to win and help us make our end-of-year trip a reality. Your contribution will make a big difference to us",
    prizes: " Prizes",
    gifts: "The prizes you can win",
    noCollaboration: "** All the prizes of the Raffle were acquired by student investment and are NOT courtesy of sponsors or collaborators.",
    firstRaffleTittle: "First Raffle",
    secondRaffleTittle: "Second Raffle",
    thirdRaffleTittle: "Third Raffle",
    itemsPerPage: "Items per page",
    all: "All",
    name: "Name",
    grade: "Grade",
    filterByName: "Filter by name",
    filterByGrade: "Filter by grade",
    previous: "Previous",
    next: "Next",
    terms: "Terms and conditions",
    acceptability: "1. Acceptance of the Terms of Use",
    acceptabilityDesc:"By accessing this website, you agree to comply with the terms and conditions of use set forth herein. If you do not agree to these terms, we ask that you do not use this site.",
    objective: "2. Purpose of the Website",
    objectiveDesc:  "This site aims to provide detailed information about the school raffle, including:",
    objective1: "Information about the purpose of the raffle.",
    objective2: "Rules for participation and ticket purchase.",
    objective3: "Details about the prizes and the draw process.",
    objective4: "Winner announcements and procedures for claiming prizes.",
    use:"3. Use of Website Information",
    useDesc:"All information provided on this page is for informational and personal use only. It is not allowed to reproduce, distribute or use the site information for commercial purposes without the prior written consent of IES Torre Almenara.",
    contents:"4. Content Updates",
    contentsDesc:"IES Torre Almenara reserves the right to modify, update or delete any content on this website without prior notice. Any changes to the terms and conditions will be notified through this site.",
    ownership:"5. Intellectual Property",
    ownershipDesc:"All content on this website, including texts, images, graphics, logos and design, is the property of IES Torre Almenara or has been authorized for use. Copying, modifying or distributing this content without authorization is prohibited.",
    protection:"6. Personal Data Protection",
    protectionDesc:"The personal information collected through this site, such as names, emails and phone numbers, will be used exclusively for the management of the raffle and communication with the winners. All data will be processed in accordance with current data protection regulations and will be deleted once the event is concluded and the prizes are awarded.",
    links: "7. Links to External Sites",
    linksDesc:"This website may contain links to other websites that are not managed by IES Torre Almenara. We are not responsible for the content or privacy practices of these external sites.",
    disclaimer: "8. Limitation of Liability",
    disclaimerDesc:"IES Torre Almenara is not responsible for errors or omissions in the content of the website, nor for any direct or indirect damage that may result from the use of this site. Visitors are responsible for verifying the accuracy and timeliness of the information provided.",
    conditions: "9. Conditions to Participate in the Raffle",
    conditionsDesc:"To participate in the raffle, users must accept the specific terms and conditions of the raffle, which are available in the corresponding section of this page. IES Torre Almenara reserves the right to disqualify any participant who violates these rules.",
    cookies: "10. Cookies Policy",
    cookiesDesc:"This website does NOT use cookies to improve the browsing experience.",
    contact: "11. Contact",
    contactDesc:"For any questions related to these terms and conditions or the school raffle, you can contact us through the contact details indicated on the page.",
    seeTerms: "Check the Terms and Conditions of Use of the IES Torre Almenara School Raffle Website",
    here: "here",
    ticketPrice: "The ticket price is €10",
    home: "Go to home",
    soldOut: "Tickets Sold",
    soldTickets: "Sold Tickets",
    aboutRaffle: "Raffle details",
    lastUpdate: "Last update",
    motivation: "Motivation",
    congratulationsWinner: "Congratulations to the Winner of the Raffle",
    winningTicket:"The winning ticket has been announced!",
    luckyOne: "Check now to see if you are the lucky one.",
    goodLuck:"Thank you for your support and good luck!",
    see: "see",
    laterOn: "later on",
    weHaveAWinner:"We are pleased to announce that we have a winner of the raffle, thanks to your support, this initiative has been a success, bringing us closer to our goal of funding the end-of-year trip.",
    ticket: "Ticket",
    raffleWinner: "Raffle Winner",
    congratulations: "Congratulations! You have won one of our great prizes. We will try to contact you within the next 72 hours, or you can contact us by email. Remember to present your winning ticket or be registered in the seller's booklet as a backup.",
    toAllParticipants: "To all participants",
    thankYouForYourSupport: "Thank you for your support and for participating in the raffle. Without you, it would not have been possible. We hope you enjoyed the experience and that you will be encouraged to participate in future raffles.",
    thankYouForBelieving:"Thank you for believing in this initiative and congratulations to the winner!",
    home: "Home",
    winner: "Winners",
  },
  es: {
    schoolRaffle: "Rifa escolar",
    aboutUs: "Sobre nosotros",
    contactUs: "Contáctanos",
    faq: "Preguntas frecuentes",
    nextRaffle: "Próximo sorteo",
    participate: "¡Participa!",
    days: "días",
    hours: "horas",
    minutes: "minutos",
    seconds: "segundos",
    active: "Activo",
    next: "Próximo",
    ended: "Finalizado",
    firstRaffle: "Primer sorteo",
    secondRaffle: "Segundo sorteo",
    thirdRaffle: "Tercer sorteo",
    firstRaffleDate: "17 de Diciembre de 2024",
    secondRaffleDate: "17 de Marzo de 2024",
    thirdRaffleDate: "17 de Junio de 2024",
    nextRaffleDate: "17 de Diciembre de 2024",
    raffleTicketsAvailability: "Adquiérelos durante Noviembre y Diciembre",
    firstRaffleTicketsAvailability:
      "Disponible durante Noviembre y Diciembre",
    secondRaffleTicketsAvailability:
      "Disponible de Enero a Marzo",
    thirdRaffleTicketsAvailability:
      "Disponible de Abril a Junio",
    raffleDetail: "Consulta todos los detalles aquí.",
    raffleObjective:
      "Los alumnos de 4º de ESO Curso 2024/25 del IES Torre Almenara estamos organizando una Rifa Escolar con el objetivo de recaudar fondos para nuestro emocionante viaje de fin de curso a Tenerife, que se celebrará del 23 al 27 de abril del 2025.",
    raffleInvitation:
      "Queremos invitarte a formar parte de esta iniciativa y apoyarnos adquiriendo uno o más boletos de nuestra Rifa. ¡Cuanto más boletos compres, más posibilidades tienes de ganar y de contribuir a nuestro proyecto!",
    anyQuestions: "Si tienes alguna duda o consulta, no dudes en contactarnos.",
    writeUsAt: "Puedes escribirnos a nuestro correo electrónico",
    visitUs:
      "También puedes visitarnos en nuestro Instituto en la siguiente dirección: Urb. El Limonar 63, 29649 La Cala de Mijas, Málaga, España.",
    helpUs: "Estamos aquí para ayudarte",
    grettings: "¡Gracias por ser parte de esta iniciativa!",
    aboutTrip: "Acerca de nuestro viaje de fin de curso",
    aboutTripInformation:
      "El viaje se desarrollará del 23 al 27 de abril de 2025 y su costo es de 742 € por alumno. Este precio incluye el seguro de asistencia en viaje, traslados, alojamiento, actividades y comidas. Este viaje ha sido organizado por Querkus, una empresa especializada en viajes escolares, que se encargará de supervisar todas las actividades y brindará asistencia continua, con personal disponible las 24 horas del día.",
    tripDetail:
      "Será una experiencia educativa, cultural y recreativa para conocer y disfrutar de la isla de Tenerife, una de las más importantes del archipiélago canario. Durante cinco días, combinaremos visitas a sitios emblemáticos y actividades de aventura.",
    itinerary: "Itinerario",
    itineraryDay1:
      "Día 1 (23 de abril): Llegada a Tenerife y visita a las Piscinas Naturales de Garachico y al Drago Milenario.",
    itineraryDay2:
      "Día 2 (24 de abril): Visita al famoso Loro Park y excursión al Parque Nacional del Teide, el pico más alto de España.",
    itineraryDay3:
      "Día 3 (25 de abril): Día completo en Siam Park, considerado el mejor parque acuático del mundo.",
    itineraryDay4:
      "Día 4 (26 de abril): Excursión en barco por los acantilados de Los Gigantes con avistamiento de delfines y tiempo libre en las playas del sur de la isla.",
    itineraryDay5:
      "Día 5 (27 de abril): Multiaventuras o actividades náuticas en Forestal Park, según las preferencias del grupo.",
    teamInfo:
      "Listado de los alumnos de 4º de ESO Curso 2024/25 del IES Torre Almenara que participan como organizadores del sorteo de la Rifa Escolar.",
    teamMembers: "Miembros del equipo",
    aboutPrize:
      "* Los alumnos de 4º de ESO Curso 2024/25 del IES Torre Almenara, escogieron los premios de la Rifa Escolar.",
    grettings2:
      "¡Gran oportunidad! de ganar y de ayudarnos a hacer realidad nuestro viaje de fin de curso. Tu contribución marcará una gran diferencia para nosotros",
    prizes: " Premios",
    gifts: "Los premios que puedes ganar",
    noCollaboration:
      "** Todos los premios de la Rifa fueron adquiridos por inversión de los estudiantes y NO son cortesía de patrocinadores o colaboradores.",
    firstRaffleTittle: "Primer sorteo",
    secondRaffleTittle: "Segundo sorteo",
    thirdRaffleTittle: "Tercer sorteo",
    itemsPerPage: "Elementos por página",
    all: "Todos",
    name: "Nombre",
    grade: "Grado",
    filterByName: "Filtrar por nombre",
    filterByGrade: "Filtrar por grado",
    previous: "Anterior",
    next: "Siguiente",
    terms: "Términos y condiciones",
    acceptability: "1. Aceptación de los Términos de Uso",
    acceptabilityDesc:"Al acceder a esta página web, aceptas cumplir con los términos y condiciones de uso aquí expuestos. Si no estás de acuerdo con estos términos, te pedimos que no utilices este sitio.",
    objective: "2. Objetivo del Sitio Web",
    objectiveDesc:  "Este sitio tiene como objetivo proporcionar información detallada sobre la rifa escolar, incluyendo:",
    objective1: "Información sobre el propósito de la rifa.",
    objective2: "Reglas de participación y compra de boletos.",
    objective3: "Detalles sobre los premios y el proceso de sorteo.",
    objective4: "Anuncios del ganador y procedimientos para reclamar los premios.",
    use:"3. Uso de la Información del Sitio Web",
    useDesc:"Toda la información proporcionada en esta página es de uso informativo y personal únicamente. No está permitido reproducir, distribuir ni utilizar la información del sitio para fines comerciales sin el consentimiento previo y por escrito del IES Torre Almenara.",
    contents:"4. Actualización de Contenidos",
    contentsDesc:"El IES Torre Almenara se reserva el derecho de modificar, actualizar o eliminar cualquier contenido en esta página web sin previo aviso. Cualquier cambio en los términos y condiciones será notificado a través de este sitio.",
    ownership:"5. Propiedad Intelectual",
    ownershipDesc:"Todo el contenido de esta página web, incluyendo textos, imágenes, gráficos, logotipos y diseño, es propiedad del IES Torre Almenara o ha sido autorizado para su uso. Está prohibida la copia, modificación o distribución de estos contenidos sin autorización.",
    protection:"6. Protección de Datos Personales",
    protectionDesc:"La información personal recopilada a través de este sitio, como nombres, correos electrónicos y números de teléfono, se utilizará exclusivamente para la gestión de la rifa y la comunicación con los ganadores. Todos los datos serán tratados de acuerdo con la normativa de protección de datos vigente y serán eliminados una vez concluido el evento y entregados los premios.",
    links: "7. Enlaces a Sitios Externos",
    linksDesc:"Esta página web puede contener enlaces a otros sitios web que no son gestionados por el IES Torre Almenara. No somos responsables de los contenidos ni de las prácticas de privacidad de estos sitios externos.",
    disclaimer: "8. Limitación de Responsabilidad",
    disclaimerDesc:"El IES Torre Almenara no se hace responsable por errores u omisiones en el contenido del sitio web, ni por cualquier daño directo o indirecto que pueda derivarse del uso de este sitio. Los visitantes son responsables de verificar la precisión y actualidad de la información proporcionada.",
    conditions: "9. Condiciones para Participar en la Rifa",
    conditionsDesc:"Para participar en la rifa, los usuarios deben aceptar los términos y condiciones específicos de la rifa, los cuales están disponibles en la sección correspondiente de esta página. El IES Torre Almenara se reserva el derecho de descalificar a cualquier participante que incumpla estas normas.",
    cookies: "10. Política de Cookies",
    cookiesDesc:"Este sitio web NO utiliza cookies para mejorar la experiencia de navegación.",
    contact: "11. Contacto",
    contactDesc:"Para cualquier consulta relacionada con estos términos y condiciones o con la rifa escolar, puedes comunicarte con nosotros a través de los medios de contacto indicados en la página.",
    seeTerms: "Consulta los Términos y Condiciones de Uso de la Página Web de la Rifa Escolar del IES Torre Almenara",
    here: "aquí",
    ticketPrice: "El precio del boleto es de 10€",
    home: "Ir al inicio",
    soldOut: "Boletos vendidos",
    soldTickets: "Consultar boletos vendidos",
    aboutRaffle: "Detalles del sorteo",
    lastUpdate: "Feha de última actualización",
    motivation: "Motivación",
    congratulationsWinner: "Felicidades al Ganador del Sorteo",
    winningTicket:"¡El boleto ganador ha sido anunciado!",
    luckyOne: "Consulta ahora para ver si eres el afortunado.",
    goodLuck:"¡Gracias por tu apoyo y mucha suerte!",
    see: "ver",
    laterOn: "más tarde",
    weHaveAWinner: "Nos complace anunciar que tenemos un ganador del sorteo, gracias a tu apoyo, esta iniciativa ha sido un éxito, acercándonos a nuestra meta de financiar el viaje de fin de curso.",
    ticket: "Boleto",
    raffleWinner: "Ganador del sorteo",
    congratulations: "¡Enhorabuena! Te has llevado uno de nuestros grandes premios.Intentaremos contactarte durante las próximas 72 horas, o puedes comunicarte con nosotros a través del correo electrónico. Recuerda presentar tu boleto ganador o estar registrado en el talonario del vendedor como respaldo.",
    toAllParticipants: "A todos los participantes",
    thankYouForYourSupport: "Gracias por tu apoyo y por participar en la rifa. Sin ti, no habría sido posible. Esperamos que hayas disfrutado de la experiencia y que te animes a participar en futuras rifas.",
    thankYouForBelieving:"¡Gracias por creer en esta iniciativa y enhorabuena al ganador!",
    home: "Inicio",
    winner: "Ganadores",
  },
};

// Function to change the language
function changeLanguage() {  
  currentLanguage = currentLanguage === "en" ? "es" : "en";
  setCurrentLanguage(currentLanguage); 
}

function setCurrentLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = currentLanguage;
  localStorage.setItem('currentLanguage', currentLanguage);

  const elements = document.querySelectorAll("[data-i18n]");

  // Update their text content based on the selected language
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
    if (
      translations[currentLanguage] &&
      translations[currentLanguage][key] &&
      element.tagName === "INPUT"
    ) {
      element.setAttribute("placeholder", translations[currentLanguage][key]);
    }
  });

  // Update button text
  const languageToggle = document.getElementById("languageToggle");
  languageToggle.textContent = `🌐 ${currentLanguage.toUpperCase()}`;
  languageToggle.setAttribute(
    "aria-label",
    `Toggle Language to ${currentLanguage === "en" ? "Spanish" : "English"}`
  ); 
}

// Add event listener to the language toggle button
document.addEventListener("DOMContentLoaded", () => {
  const languageToggle = document.getElementById("languageToggle");
  languageToggle.addEventListener("click", changeLanguage);
});

window.addEventListener('DOMContentLoaded', () => {
  currentLanguage = localStorage.getItem('currentLanguage');
  if (currentLanguage) {
      setCurrentLanguage(currentLanguage);
  } else {      
      setCurrentLanguage('es');
  }
});
