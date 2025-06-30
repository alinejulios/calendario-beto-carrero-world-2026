// Dados originais exatamente como no arquivo base
const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const locations = ['Santa Catarina', 'Argentina', 'Uruguai', 'Paraguai'];

const locationColors = {
  'Santa Catarina': 'bg-blue-500',
  'Argentina': 'bg-green-500',
  'Uruguai': 'bg-purple-500',
  'Paraguai': 'bg-orange-500'
};

const holidays = {
  '1-1': [{ name: 'Confraternização Universal', location: 'Santa Catarina', type: 'Feriado Nacional' }],
  '1-6': [{ name: 'Dia das Crianças', location: 'Uruguai', type: 'Comemoração' }],
  '2-16': [
    { name: 'Carnaval', location: 'Santa Catarina', type: 'Ponto Facultativo' },
    { name: 'Carnaval', location: 'Argentina', type: 'Carnaval' },
    { name: 'Carnaval', location: 'Uruguai', type: 'Carnaval' }
  ],
  '2-17': [
    { name: 'Carnaval', location: 'Santa Catarina', type: 'Ponto Facultativo' },
    { name: 'Carnaval', location: 'Argentina', type: 'Carnaval' },
    { name: 'Carnaval', location: 'Uruguai', type: 'Carnaval' }
  ],
  '2-18': [{ name: 'Quarta-feira de Cinzas', location: 'Santa Catarina', type: 'Ponto Facultativo' }],
  '3-1': [{ name: 'Dia dos Heróis', location: 'Paraguai', type: 'Comemoração' }],
  '3-24': [{ name: 'Dia Nacional em Memória da Verdade e da Justiça', location: 'Argentina', type: 'Comemoração' }],
  '4-2': [
    { name: 'Veteranos da Guerra das Malvinas', location: 'Argentina', type: 'Comemoração' },
    { name: 'Semana do Turismo', location: 'Uruguai', type: 'Comemoração' }
  ],
  '4-3': [
    { name: 'Sexta-feira Santa', location: 'Santa Catarina', type: 'Feriado Nacional' },
    { name: 'Semana do Turismo', location: 'Uruguai', type: 'Comemoração' }
  ],
  '4-19': [{ name: 'Desembarque dos 33 orientais', location: 'Uruguai', type: 'Comemoração' }],
  '4-21': [{ name: 'Tiradentes', location: 'Santa Catarina', type: 'Feriado Nacional' }],
  '5-1': [{ name: 'Dia do Trabalhador', location: 'Santa Catarina', type: 'Feriado Nacional' }],
  '5-14': [{ name: 'Feriado nacional', location: 'Paraguai', type: 'Feriado Nacional' }],
  '5-15': [{ name: 'Dia da Independência', location: 'Paraguai', type: 'Comemoração' }],
  '5-18': [{ name: 'Batalha das Pedras', location: 'Uruguai', type: 'Comemoração' }],
  '5-25': [{ name: 'Dia da Revolução de Maio', location: 'Argentina', type: 'Comemoração' }],
  '6-4': [{ name: 'Corpus Christi', location: 'Santa Catarina', type: 'Ponto Facultativo' }],
  '6-12': [{ name: 'Armistício do Chaco', location: 'Paraguai', type: 'Comemoração' }],
  '6-17': [{ name: 'General Martín Güemes', location: 'Argentina', type: 'Comemoração' }],
  '6-19': [{ name: 'Aniversário de José Artigas', location: 'Uruguai', type: 'Comemoração' }],
  '6-20': [{ name: 'General Manuel Belgrano', location: 'Argentina', type: 'Comemoração' }],
  '7-9': [{ name: 'Dia da Independência', location: 'Argentina', type: 'Comemoração' }],
  '7-18': [{ name: 'Juramento da Constituição', location: 'Uruguai', type: 'Comemoração' }],
  '8-15': [{ name: 'Fundação de Assunção', location: 'Paraguai', type: 'Comemoração' }],
  '8-17': [{ name: 'General José de San Martín', location: 'Argentina', type: 'Comemoração' }],
  '8-25': [{ name: 'Dia da Independência Nacional', location: 'Uruguai', type: 'Comemoração' }],
  '9-7': [{ name: 'Independência do Brasil', location: 'Santa Catarina', type: 'Feriado Nacional' }],
  '9-29': [{ name: 'Vitória na Batalha de Boqueron', location: 'Paraguai', type: 'Comemoração' }],
  '10-12': [
    { name: 'Nossa Senhora Aparecida', location: 'Santa Catarina', type: 'Feriado Nacional' },
    { name: 'Respeito à Diversidade Cultural', location: 'Argentina', type: 'Comemoração' },
    { name: 'Dia de Colombo', location: 'Uruguai', type: 'Comemoração' }
  ],
  '10-28': [{ name: 'Dia do Servidor Público', location: 'Santa Catarina', type: 'Ponto Facultativo' }],
  '11-2': [{ name: 'Finados', location: 'Santa Catarina', type: 'Feriado Nacional' }],
  '11-15': [{ name: 'Proclamação da República', location: 'Santa Catarina', type: 'Feriado Nacional' }],
  '11-20': [
    { name: 'Consciência Negra', location: 'Santa Catarina', type: 'Feriado Nacional' },
    { name: 'Dia da Soberania Nacional', location: 'Argentina', type: 'Comemoração' }
  ],
  '12-8': [
    { name: 'Dia da Virgem de Caacupé', location: 'Paraguai', type: 'Comemoração' },
    { name: 'Imaculada Conceição de Maria', location: 'Argentina', type: 'Comemoração' }
  ],
  '12-24': [{ name: 'Véspera de Natal', location: 'Santa Catarina', type: 'Ponto Facultativo' }],
  '12-25': [{ name: 'Natal', location: 'Santa Catarina', type: 'Feriado Nacional' }],
  '12-31': [{ name: 'Véspera de Ano-Novo', location: 'Santa Catarina', type: 'Ponto Facultativo' }]
};

// Estado da aplicação
let currentMonth = 0;
let selectedLocations = [...locations];

// Elementos DOM
const appElement = document.getElementById('app');

// Funções auxiliares
function getPriceAndStatus(month, day) {
  // Janeiro - Alta temporada (férias de verão)
  if (month === 0) return { price: 'R$ 209,90', status: 'Lotado', color: 'bg-red-100 border-red-300 text-red-800' };
  
  // Fevereiro - Transição
  if (month === 1) return { price: 'R$ 139,90', status: 'Médio', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' };
  
  // Março - Baixa temporada
  if (month === 2) return { price: 'R$ 129,90', status: 'Médio', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' };
  
  // Abril - Muito baixa (período sem dados originais)
  if (month === 3) return { price: 'Não disponível', status: 'Vazio', color: 'bg-gray-100 border-gray-300 text-gray-600' };
  
  // Maio - Retomada gradual
  if (month === 4) {
    if (day < 18) return { price: 'Não disponível', status: 'Vazio', color: 'bg-gray-100 border-gray-300 text-gray-600' };
    if (day === 25) return { price: 'R$ 109,90', status: 'Vazio', color: 'bg-green-100 border-green-300 text-green-800' };
    return { price: 'R$ 129,90', status: 'Médio', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' };
  }
  
  // Junho - Início de alta temporada
  if (month === 5) {
    if (day === 20 || day === 21) return { price: 'R$ 149,90', status: 'Lotado', color: 'bg-red-100 border-red-300 text-red-800' };
    if (day === 22 || day === 29) return { price: 'R$ 119,90', status: 'Vazio', color: 'bg-green-100 border-green-300 text-green-800' };
    if (day === 19) return { price: 'R$ 139,90', status: 'Médio', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' };
    return { price: 'R$ 129,90', status: 'Médio', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' };
  }
  
  // Julho - Alta temporada (férias de inverno)
  if (month === 6) {
    if (day === 27) return { price: 'R$ 119,90', status: 'Vazio', color: 'bg-green-100 border-green-300 text-green-800' };
    if (day >= 15) return { price: 'R$ 159,90', status: 'Lotado', color: 'bg-red-100 border-red-300 text-red-800' };
    return { price: 'R$ 149,90', status: 'Lotado', color: 'bg-red-100 border-red-300 text-red-800' };
  }
  
  // Agosto - Transição pós-férias
  if (month === 7) {
    if (day === 31) return { price: 'R$ 119,90', status: 'Vazio', color: 'bg-green-100 border-green-300 text-green-800' };
    return { price: 'R$ 134,90', status: 'Médio', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' };
  }
  
  // Setembro - Estabilização
  if (month === 8) {
    if (day === 28) return { price: 'R$ 119,90', status: 'Vazio', color: 'bg-green-100 border-green-300 text-green-800' };
    return { price: 'R$ 134,90', status: 'Médio', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' };
  }
  
  // Outubro - Baixa temporada
  if (month === 9) {
    if (day === 26) return { price: 'R$ 119,90', status: 'Vazio', color: 'bg-green-100 border-green-300 text-green-800' };
    return { price: 'R$ 134,90', status: 'Médio', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' };
  }
  
  // Novembro - Preparação para alta temporada
  if (month === 10) {
    if (day === 2 || day === 15 || day === 20) return { price: 'R$ 149,90', status: 'Lotado', color: 'bg-red-100 border-red-300 text-red-800' };
    if (day === 30) return { price: 'R$ 119,90', status: 'Vazio', color: 'bg-green-100 border-green-300 text-green-800' };
    return { price: 'R$ 139,90', status: 'Médio', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' };
  }
  
  // Dezembro - Alta temporada (festas de fim de ano)
  if (month === 11) {
    if (day === 28) return { price: 'R$ 119,90', status: 'Vazio', color: 'bg-green-100 border-green-300 text-green-800' };
    if (day >= 16) return { price: 'R$ 159,90', status: 'Lotado', color: 'bg-red-100 border-red-300 text-red-800' };
    return { price: 'R$ 139,90', status: 'Médio', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' };
  }
  
  return { price: 'R$ 129,90', status: 'Médio', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' };
}

function getHolidaysForDay(month, day) {
  const key = `${month + 1}-${day}`;
  return holidays[key]?.filter(h => selectedLocations.includes(h.location)) || [];
}

function getDaysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(month, year) {
  return new Date(year, month, 1).getDay();
}

function toggleLocation(location) {
  if (selectedLocations.includes(location)) {
    selectedLocations = selectedLocations.filter(l => l !== location);
  } else {
    selectedLocations = [...selectedLocations, location];
  }
  renderFilters();
  renderCalendar();
}

function prevMonth() {
  currentMonth = (currentMonth - 1 + 12) % 12;
  renderCalendar(); // Isso deve atualizar toda a visualização, incluindo o título
}

function nextMonth() {
  currentMonth = (currentMonth + 1) % 12;
  renderCalendar(); // Isso deve atualizar toda a visualização, incluindo o título
}

function renderMonthEvents() {
  const monthHolidays = [];
  const daysInMonth = getDaysInMonth(currentMonth, 2026);
  
  for (let day = 1; day <= daysInMonth; day++) {
    const dayHolidays = getHolidaysForDay(currentMonth, day);
    dayHolidays.forEach(holiday => {
      monthHolidays.push({ ...holiday, day });
    });
  }

  const monthEventsElement = document.getElementById('month-events');
  if (monthHolidays.length > 0) {
    monthEventsElement.innerHTML = monthHolidays.map(holiday => `
      <div class="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
        <div class="flex-shrink-0">
          <div class="w-3 h-3 rounded-full ${locationColors[holiday.location]} mt-1"></div>
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-medium text-gray-900">${holiday.day}/${currentMonth + 1}</div>
          <div class="text-sm text-gray-700 truncate">${holiday.name}</div>
          <div class="text-xs text-gray-500">${holiday.location}</div>
          <div class="text-xs text-blue-600 font-medium">${holiday.type}</div>
        </div>
      </div>
    `).join('');
  } else {
    monthEventsElement.innerHTML = '<p class="text-gray-500 text-sm">Nenhum evento nos locais selecionados</p>';
  }
}

function renderMonthSummary() {
  const monthSummaryElement = document.getElementById('month-summary');
  monthSummaryElement.innerHTML = `
    <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
      <div class="flex items-center space-x-2 mb-2">
        <i data-lucide="dollar-sign" class="text-blue-600"></i>
        <h3 class="font-semibold text-blue-800">Faixa de Preços</h3>
      </div>
      <p class="text-sm text-blue-700">
        ${currentMonth === 0 ? 'R$ 209,90 (Alta temporada)' :
         currentMonth === 6 || currentMonth === 11 ? 'R$ 149,90 - R$ 159,90' :
         currentMonth === 3 ? 'Período não disponível' :
         'R$ 109,90 - R$ 149,90'}
      </p>
    </div>
    
    <div class="bg-green-50 p-4 rounded-lg border border-green-200">
      <div class="flex items-center space-x-2 mb-2">
        <i data-lucide="users" class="text-green-600"></i>
        <h3 class="font-semibold text-green-800">Melhor Período</h3>
      </div>
      <p class="text-sm text-green-700">
        ${currentMonth === 0 || currentMonth === 6 || currentMonth === 11 ? 
         'Alta procura - Reserve com antecedência' :
         currentMonth === 3 ? 'Período de manutenção' :
         'Boa disponibilidade'}
      </p>
    </div>
    
    <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
      <div class="flex items-center space-x-2 mb-2">
        <i data-lucide="calendar" class="text-purple-600"></i>
        <h3 class="font-semibold text-purple-800">Dica do Mês</h3>
      </div>
      <p class="text-sm text-purple-700">
        ${currentMonth === 0 ? 'Férias de verão - Reserve cedo' :
         currentMonth === 6 ? 'Férias de inverno - Muito procurado' :
         currentMonth === 11 ? 'Fim de ano - Antecipe sua reserva' :
         currentMonth === 3 ? 'Período de baixa temporada' :
         'Período ideal para promoções'}
      </p>
    </div>
  `;
  lucide.createIcons();
}

// Funções de renderização
function renderApp() {
  appElement.innerHTML = `
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-2 flex items-center">
        <i data-lucide="calendar" class="mr-3 text-blue-600"></i>
        Calendário Beto Carrero 2026
      </h1>
      <p class="text-gray-600">Preços*, disponibilidade* e eventos que podem afetar seu planejamento.</p>
      <p style="font-size: 10px"class="text-gray-600"><br>*Informações sujeitas a atualização sem aviso prévio. Consulte o <a href="https://www.betocarrero.com.br/passaportes"><b>site oficial do Beto Carrero World</b></a>.</p>
    </div>
    
    <div id="filters-container"></div>
    <div id="calendar-container"></div>
  `;
  
  renderFilters();
  renderCalendar();
}

function renderFilters() {
  const container = document.getElementById('filters-container');
  container.innerHTML = `
    <div class="mb-6 bg-gray-50 p-4 rounded-lg">
      <div class="flex items-center space-x-2 mb-3">
        <i data-lucide="filter" class="text-gray-600"></i>
        <h3 class="font-semibold text-gray-800">Filtrar por eventos locais</h3>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3" id="location-filter"></div>
    </div>
    
    <div class="mb-6 grid grid-cols-2 md:grid-cols-5 gap-4">
      <div class="flex items-center space-x-2">
        <div class="w-4 h-4 bg-red-100 border border-red-300 rounded"></div>
        <span class="text-sm">Lotado</span>
      </div>
      <div class="flex items-center space-x-2">
        <div class="w-4 h-4 bg-yellow-100 border border-yellow-300 rounded"></div>
        <span class="text-sm">Disponibilidade Média</span>
      </div>
      <div class="flex items-center space-x-2">
        <div class="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
        <span class="text-sm">Baixa Procura</span>
      </div>
      <div class="flex items-center space-x-2">
        <div class="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
        <span class="text-sm">Não Disponível</span>
      </div>
      <div class="flex items-center space-x-2">
        <i data-lucide="star" class="w-4 h-4 text-yellow-600 fill-current"></i>
        <span class="text-sm">Feriado/Evento</span>
      </div>
    </div>
    
    <div class="flex items-center justify-between mb-6 bg-gray-50 p-4 rounded-lg">
      <button id="prev-month" class="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        <i data-lucide="chevron-left"></i>
        <span>Anterior</span>
      </button>
      <h2 id="current-month" class="text-2xl font-bold text-gray-800">${months[currentMonth]} 2026</h2>
      <button id="next-month" class="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        <span>Próximo</span>
        <i data-lucide="chevron-right"></i>
      </button>
    </div>
  `;

  // Renderizar filtros de localização
  const locationFilter = document.getElementById('location-filter');
  locationFilter.innerHTML = locations.map(location => `
    <button onclick="window.toggleLocation('${location}')" class="flex items-center space-x-2 p-3 rounded-lg border-2 ${
      selectedLocations.includes(location)
        ? 'border-blue-500 bg-blue-50 text-blue-800'
        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
    }">
      <div class="w-3 h-3 rounded-full ${locationColors[location]}"></div>
      <span class="text-sm font-medium">${location}</span>
    </button>
  `).join('');

  // Event listeners
  document.getElementById('prev-month').addEventListener('click', prevMonth);
  document.getElementById('next-month').addEventListener('click', nextMonth);

  lucide.createIcons();
}

function renderCalendar() {
  // Atualiza o título do mês primeiro
  document.getElementById('current-month').textContent = `${months[currentMonth]} 2026`;
  const container = document.getElementById('calendar-container');
  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div class="lg:col-span-3">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="grid grid-cols-7 bg-gray-100" id="weekdays-header"></div>
          <div class="grid grid-cols-7 gap-1 p-1 bg-gray-100" id="calendar-days"></div>
        </div>
      </div>
      <div class="space-y-6">
        <div class="bg-white rounded-lg shadow-lg p-4">
          <h3 class="font-semibold text-gray-800 mb-4 flex items-center">
            <i data-lucide="map-pin" class="mr-2 text-blue-600"></i>
            Eventos do Mês
          </h3>
          <div class="space-y-3 max-h-96 overflow-y-auto" id="month-events"></div>
        </div>
        <div class="space-y-4" id="month-summary"></div>
      </div>
    </div>
  `;

  // Renderizar dias da semana
  const weekdaysHeader = document.getElementById('weekdays-header');
  weekdaysHeader.innerHTML = weekDays.map(day => `
    <div class="p-4 text-center font-semibold text-gray-700 border-r border-gray-200 last:border-r-0">${day}</div>
  `).join('');

  // Renderizar dias do mês
  const daysInMonth = getDaysInMonth(currentMonth, 2026);
  const firstDay = getFirstDayOfMonth(currentMonth, 2026);
  const calendarDays = document.getElementById('calendar-days');

  // Dias vazios no início
  for (let i = 0; i < firstDay; i++) {
    calendarDays.innerHTML += '<div class="h-32"></div>';
  }

  // Dias do mês
  for (let day = 1; day <= daysInMonth; day++) {
    const dayData = getPriceAndStatus(currentMonth, day);
    const dayHolidays = getHolidaysForDay(currentMonth, day);
    
    let dayHTML = `
      <div class="h-32 border rounded-lg p-2 ${dayData.color} hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden">
        <div class="font-semibold text-sm mb-1 flex items-center justify-between">
          <span>${day}</span>
          ${dayHolidays.length > 0 ? '<i data-lucide="star" class="w-3 h-3 text-yellow-600 fill-current"></i>' : ''}
        </div>
        <div class="text-xs mb-2">
          <div class="truncate">${dayData.price}</div>
          <div class="font-medium">${dayData.status}</div>
        </div>
    `;

    if (dayHolidays.length > 0) {
      dayHTML += '<div class="text-xs space-y-1">';
      dayHolidays.slice(0, 2).forEach(holiday => {
        dayHTML += `
          <div class="flex items-center space-x-1">
            <div class="w-2 h-2 rounded-full ${locationColors[holiday.location]} flex-shrink-0"></div>
            <span class="truncate text-xs font-medium">${holiday.name}</span>
          </div>
        `;
      });
      if (dayHolidays.length > 2) {
        dayHTML += `<div class="text-xs text-gray-600">+${dayHolidays.length - 2} mais</div>`;
      }
      dayHTML += '</div>';
    }

    dayHTML += '</div>';
    calendarDays.innerHTML += dayHTML;
  }

  renderMonthEvents();
  renderMonthSummary();
  lucide.createIcons();
}

// Expor funções para o escopo global
window.toggleLocation = toggleLocation;
window.prevMonth = prevMonth;
window.nextMonth = nextMonth;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  renderApp();
});