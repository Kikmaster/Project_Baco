// Dados da aplicação
let appData = {
  projects: [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Plataforma de vendas online",
      color: "#3B82F6",
      stories: 8,
      completed: 5
    },
    {
      id: 2,
      name: "CRM System",
      description: "Sistema de gestão de clientes",
      color: "#10B981",
      stories: 6,
      completed: 3
    },
    {
      id: 3,
      name: "Mobile App",
      description: "Aplicativo móvel",
      color: "#F59E0B",
      stories: 4,
      completed: 2
    }
  ],
  userStories: [
    {
      id: 1,
      projectId: 1,
      title: "Login com redes sociais",
      persona: "Cliente",
      action: "fazer login usando minhas credenciais das redes sociais",
      benefit: "não precise lembrar de mais uma senha",
      acceptanceCriteria: [
        "Deve suportar login com Google e Facebook",
        "Dados do perfil devem ser importados automaticamente",
        "Deve haver opção de desconectar conta social"
      ],
      storyPoints: 5,
      status: "Done",
      tags: ["authentication", "social-login"],
      priority: "High",
      feature: "Autenticação",
      comments: [
        {
          author: "João Silva",
          text: "Precisamos considerar LGPD para dados importados",
          timestamp: "2025-01-15T10:00:00Z"
        }
      ]
    },
    {
      id: 2,
      projectId: 1,
      title: "Carrinho de compras persistente",
      persona: "Cliente",
      action: "manter meus itens no carrinho mesmo após sair da sessão",
      benefit: "possa continuar comprando depois sem perder os produtos selecionados",
      acceptanceCriteria: [
        "Carrinho deve persistir por 30 dias",
        "Deve sincronizar entre dispositivos para usuário logado",
        "Deve avisar sobre alterações de preço"
      ],
      storyPoints: 3,
      status: "In Progress",
      tags: ["cart", "persistence"],
      priority: "Medium",
      feature: "Carrinho de Compras"
    },
    {
      id: 3,
      projectId: 2,
      title: "Dashboard de vendas",
      persona: "Gerente de Vendas",
      action: "visualizar métricas de vendas em tempo real",
      benefit: "possa tomar decisões baseadas em dados atualizados",
      acceptanceCriteria: [
        "Exibir vendas do dia, semana e mês",
        "Gráficos interativos com drill-down",
        "Comparação com períodos anteriores"
      ],
      storyPoints: 8,
      status: "Backlog",
      tags: ["dashboard", "analytics"],
      priority: "High",
      feature: "Analytics"
    },
    {
      id: 4,
      projectId: 1,
      title: "Sistema de avaliações",
      persona: "Cliente",
      action: "avaliar produtos que comprei",
      benefit: "possa compartilhar minha experiência com outros compradores",
      acceptanceCriteria: [
        "Sistema de 1 a 5 estrelas",
        "Campo para comentário opcional",
        "Apenas clientes que compraram podem avaliar"
      ],
      storyPoints: 5,
      status: "Review",
      tags: ["reviews", "feedback"],
      priority: "Medium",
      feature: "Avaliações"
    },
    {
      id: 5,
      projectId: 3,
      title: "Notificações push",
      persona: "Usuário",
      action: "receber notificações importantes no meu celular",
      benefit: "não perca informações relevantes do app",
      acceptanceCriteria: [
        "Permitir configurar tipos de notificação",
        "Funcionar em background",
        "Respeitar configurações de 'não perturbar'"
      ],
      storyPoints: 3,
      status: "Backlog",
      tags: ["notifications", "mobile"],
      priority: "Low",
      feature: "Notificações"
    }
  ],
  personas: [
    {
      name: "Cliente",
      description: "Usuário final que compra produtos/serviços",
      goals: ["Encontrar produtos facilmente", "Comprar com segurança", "Acompanhar pedidos"]
    },
    {
      name: "Administrador",
      description: "Usuário que gerencia o sistema",
      goals: ["Controlar permissões", "Monitorar sistema", "Gerenciar conteúdo"]
    },
    {
      name: "Gerente de Vendas",
      description: "Responsável pela equipe de vendas",
      goals: ["Acompanhar performance", "Gerenciar equipe", "Analisar dados"]
    },
    {
      name: "Desenvolvedor",
      description: "Membro da equipe técnica",
      goals: ["Implementar funcionalidades", "Corrigir bugs", "Melhorar performance"]
    }
  ],
  templates: [
    {
      id: 1,
      name: "E-commerce",
      stories: [
        "Como cliente, quero visualizar produtos em lista para que possa comparar opções facilmente",
        "Como cliente, quero filtrar produtos por categoria para que encontre o que procuro mais rapidamente",
        "Como cliente, quero adicionar produtos ao carrinho para que possa comprá-los depois"
      ]
    },
    {
      id: 2,
      name: "CRM",
      stories: [
        "Como vendedor, quero registrar contatos com clientes para que possa acompanhar o relacionamento",
        "Como gerente, quero ver relatórios de vendas para que possa avaliar performance da equipe",
        "Como usuário, quero pesquisar clientes por nome para que encontre informações rapidamente"
      ]
    },
    {
      id: 3,
      name: "Mobile App",
      stories: [
        "Como usuário, quero fazer login com biometria para que acesse o app de forma segura e rápida",
        "Como usuário, quero sincronizar dados offline para que possa usar o app sem internet",
        "Como usuário, quero receber notificações push para que seja informado sobre eventos importantes"
      ]
    }
  ]
};

// Estado da aplicação
let appState = {
  currentView: 'dashboard',
  currentProject: null,
  theme: localStorage.getItem('theme') || 'light',
  editingStory: null,
  nextStoryId: 6
};

// Elementos DOM
const elements = {
  themeToggle: null,
  createStoryBtn: null,
  projectsList: null,
  views: {},
  modals: {},
  forms: {}
};

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  initializeTheme();
  initializeEventListeners();
  loadStoredData();
  renderInitialData();
  showView('dashboard');
});

// Inicializar referências dos elementos
function initializeElements() {
  elements.themeToggle = document.getElementById('themeToggle');
  elements.createStoryBtn = document.getElementById('createStoryBtn');
  elements.projectsList = document.getElementById('projectsList');

  // Views
  elements.views = {
    dashboard: document.getElementById('dashboardView'),
    analytics: document.getElementById('analyticsView'),
    storyMap: document.getElementById('storyMapView'),
    kanban: document.getElementById('kanbanView')
  };

  // Modals
  elements.modals = {
    story: document.getElementById('storyModal'),
    export: document.getElementById('exportModal')
  };

  // Forms
  elements.forms = {
    story: document.getElementById('storyForm')
  };
}

// Inicializar tema
function initializeTheme() {
  document.documentElement.setAttribute('data-theme', appState.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = elements.themeToggle.querySelector('i');
  icon.className = appState.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function toggleTheme() {
  appState.theme = appState.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', appState.theme);
  localStorage.setItem('theme', appState.theme);
  updateThemeIcon();
}

// Event Listeners
function initializeEventListeners() {
  // Theme toggle
  elements.themeToggle.addEventListener('click', toggleTheme);

  // Navigation
  document.querySelectorAll('[data-view]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = e.currentTarget.getAttribute('data-view');
      showView(view);

      // Update active nav
      document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));
      e.currentTarget.classList.add('active');
    });
  });

  // Create story button
  elements.createStoryBtn.addEventListener('click', () => openStoryModal());
  document.getElementById('quickCreateStory').addEventListener('click', () => openStoryModal());

  // Modal controls
  document.getElementById('closeModal').addEventListener('click', closeStoryModal);
  document.getElementById('cancelStory').addEventListener('click', closeStoryModal);

  // Story form
  elements.forms.story.addEventListener('submit', handleStorySubmit);

  // Add criteria button
  document.getElementById('addCriteria').addEventListener('click', addCriteriaField);

  // Export modal
  document.getElementById('exportStories').addEventListener('click', openExportModal);
  document.getElementById('closeExportModal').addEventListener('click', closeExportModal);
  document.getElementById('cancelExport').addEventListener('click', closeExportModal);
  document.getElementById('confirmExport').addEventListener('click', handleExport);

  // AI Assistant
  document.getElementById('aiSuggestions').addEventListener('click', toggleAiAssistant);
  document.getElementById('closeAi').addEventListener('click', () => {
    document.getElementById('aiAssistant').classList.remove('active');
  });

  // Form validation in real-time
  ['storyTitle', 'storyPersona', 'storyAction', 'storyBenefit'].forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) {
      field.addEventListener('input', validateStoryForm);
    }
  });
}

// Carregar dados salvos
function loadStoredData() {
  const storedData = localStorage.getItem('storyflowData');
  if (storedData) {
    try {
      const parsedData = JSON.parse(storedData);
      appData = { ...appData, ...parsedData };
    } catch (e) {
      console.warn('Erro ao carregar dados salvos:', e);
    }
  }
}

// Salvar dados
function saveData() {
  localStorage.setItem('storyflowData', JSON.stringify(appData));
}

// Renderização inicial
function renderInitialData() {
  renderProjects();
  updateDashboardStats();
  renderRecentStories();
  renderKanbanBoard();
  populateProjectSelect();
}

// Renderizar projetos na sidebar
function renderProjects() {
  if (!elements.projectsList) return;

  elements.projectsList.innerHTML = appData.projects.map(project => `
    <li>
      <a href="#" class="nav-link" data-project="${project.id}">
        <div style="width: 12px; height: 12px; background-color: ${project.color}; border-radius: 50%;"></div>
        <div>
          <div>${project.name}</div>
          <small style="color: var(--text-tertiary);">${project.stories} stories</small>
        </div>
      </a>
    </li>
  `).join('');

  // Add event listeners for projects
  elements.projectsList.querySelectorAll('[data-project]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = parseInt(e.currentTarget.getAttribute('data-project'));
      selectProject(projectId);
    });
  });
}

// Selecionar projeto
function selectProject(projectId) {
  appState.currentProject = projectId;
  document.querySelectorAll('[data-project]').forEach(link => link.classList.remove('active'));
  document.querySelector(`[data-project="${projectId}"]`).classList.add('active');

  // Update views with project filter
  renderRecentStories();
  renderKanbanBoard();
  updateDashboardStats();
}

// Atualizar estatísticas do dashboard
function updateDashboardStats() {
  const stories = appState.currentProject 
    ? appData.userStories.filter(s => s.projectId === appState.currentProject)
    : appData.userStories;

  const total = stories.length;
  const completed = stories.filter(s => s.status === 'Done').length;
  const inProgress = stories.filter(s => s.status === 'In Progress').length;
  const avgQuality = calculateAverageQuality(stories);

  document.getElementById('totalStories').textContent = total;
  document.getElementById('completedStories').textContent = completed;
  document.getElementById('inProgressStories').textContent = inProgress;
  document.getElementById('averageQuality').textContent = avgQuality + '%';
}

// Calcular qualidade média das stories
function calculateAverageQuality(stories) {
  if (stories.length === 0) return 0;

  const totalQuality = stories.reduce((sum, story) => {
    return sum + calculateStoryQuality(story);
  }, 0);

  return Math.round(totalQuality / stories.length);
}

// Calcular qualidade de uma story (critérios INVEST)
function calculateStoryQuality(story) {
  let score = 0;

  // Independent (título claro e específico)
  if (story.title && story.title.length > 10) score += 20;

  // Negotiable (persona bem definida)
  if (story.persona && story.persona !== '') score += 20;

  // Valuable (benefício claro)
  if (story.benefit && story.benefit.length > 10) score += 20;

  // Estimable (story points definidos)
  if (story.storyPoints && story.storyPoints > 0) score += 20;

  // Small & Testable (critérios de aceitação)
  if (story.acceptanceCriteria && story.acceptanceCriteria.length > 0) score += 20;

  return score;
}

// Renderizar stories recentes
function renderRecentStories() {
  const container = document.getElementById('recentStoriesList');
  if (!container) return;

  const stories = appState.currentProject 
    ? appData.userStories.filter(s => s.projectId === appState.currentProject)
    : appData.userStories;

  const recentStories = stories.slice(0, 5);

  container.innerHTML = recentStories.map(story => `
    <div class="story-card" data-story-id="${story.id}">
      <div class="story-card-header">
        <h4 class="story-title">${story.title}</h4>
      </div>
      <div class="story-meta">
        <span class="story-points">${story.storyPoints || 0}</span>
        <span class="story-status ${story.status.toLowerCase().replace(' ', '-')}">${story.status}</span>
        <span>${story.persona}</span>
      </div>
      <div class="story-description">
        Como ${story.persona}, eu quero ${story.action} para que ${story.benefit}
      </div>
      <div class="story-tags">
        ${story.tags ? story.tags.map(tag => `<span class="story-tag">${tag}</span>`).join('') : ''}
      </div>
    </div>
  `).join('');

  // Add click listeners
  container.querySelectorAll('.story-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const storyId = parseInt(e.currentTarget.getAttribute('data-story-id'));
      editStory(storyId);
    });
  });
}

// Renderizar Kanban board
function renderKanbanBoard() {
  const columns = ['Backlog', 'In Progress', 'Review', 'Done'];

  columns.forEach(status => {
    const columnId = status.toLowerCase().replace(' ', '') + 'Column';
    const container = document.getElementById(columnId);
    if (!container) return;

    const stories = appData.userStories.filter(s => {
      const matchesStatus = s.status === status;
      const matchesProject = !appState.currentProject || s.projectId === appState.currentProject;
      return matchesStatus && matchesProject;
    });

    container.innerHTML = stories.map(story => `
      <div class="story-card kanban-story" data-story-id="${story.id}" draggable="true">
        <h4 class="story-title">${story.title}</h4>
        <div class="story-meta">
          <span class="story-points">${story.storyPoints || 0}</span>
          <span>${story.persona}</span>
        </div>
        <div class="story-tags">
          ${story.tags ? story.tags.slice(0, 2).map(tag => `<span class="story-tag">${tag}</span>`).join('') : ''}
        </div>
      </div>
    `).join('');

    // Add drag and drop functionality
    container.querySelectorAll('.kanban-story').forEach(card => {
      card.addEventListener('dragstart', handleDragStart);
      card.addEventListener('click', (e) => {
        const storyId = parseInt(e.currentTarget.getAttribute('data-story-id'));
        editStory(storyId);
      });
    });
  });

  // Add drop zones
  document.querySelectorAll('.kanban-stories').forEach(zone => {
    zone.addEventListener('dragover', handleDragOver);
    zone.addEventListener('drop', handleDrop);
  });
}

// Drag and Drop handlers
let draggedStory = null;

function handleDragStart(e) {
  draggedStory = parseInt(e.currentTarget.getAttribute('data-story-id'));
  e.currentTarget.style.opacity = '0.5';
}

function handleDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('drag-over');
}

function handleDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');

  if (!draggedStory) return;

  const column = e.currentTarget.closest('.kanban-column');
  const newStatus = column.getAttribute('data-status');

  // Update story status
  const story = appData.userStories.find(s => s.id === draggedStory);
  if (story) {
    story.status = newStatus;
    saveData();
    renderKanbanBoard();
    updateDashboardStats();
  }

  draggedStory = null;
}

// Modal de criação/edição de stories
function openStoryModal(storyId = null) {
  const modal = elements.modals.story;
  const title = document.getElementById('modalTitle');

  appState.editingStory = storyId;

  if (storyId) {
    const story = appData.userStories.find(s => s.id === storyId);
    if (story) {
      title.textContent = 'Editar User Story';
      populateStoryForm(story);
    }
  } else {
    title.textContent = 'Nova User Story';
    resetStoryForm();
  }

  modal.classList.add('active');
  document.getElementById('storyTitle').focus();
}

function closeStoryModal() {
  elements.modals.story.classList.remove('active');
  appState.editingStory = null;
}

// Popular dropdown de projetos
function populateProjectSelect() {
  const select = document.getElementById('storyProject');
  if (!select) return;

  select.innerHTML = '<option value="">Selecione um projeto</option>' +
    appData.projects.map(project => 
      `<option value="${project.id}">${project.name}</option>`
    ).join('');

  // Pre-select current project if any
  if (appState.currentProject) {
    select.value = appState.currentProject;
  }
}

// Popular formulário com dados da story
function populateStoryForm(story) {
  document.getElementById('storyProject').value = story.projectId;
  document.getElementById('storyTitle').value = story.title;
  document.getElementById('storyPersona').value = story.persona;
  document.getElementById('storyAction').value = story.action;
  document.getElementById('storyBenefit').value = story.benefit;
  document.getElementById('storyPoints').value = story.storyPoints || 3;
  document.getElementById('storyPriority').value = story.priority || 'Medium';
  document.getElementById('storyStatus').value = story.status || 'Backlog';
  document.getElementById('storyTags').value = story.tags ? story.tags.join(', ') : '';

  // Populate acceptance criteria
  const container = document.querySelector('.criteria-container');
  container.innerHTML = '';

  if (story.acceptanceCriteria && story.acceptanceCriteria.length > 0) {
    story.acceptanceCriteria.forEach(criteria => {
      addCriteriaField(criteria);
    });
  } else {
    addCriteriaField();
  }

  validateStoryForm();
}

// Resetar formulário
function resetStoryForm() {
  elements.forms.story.reset();

  // Reset acceptance criteria
  const container = document.querySelector('.criteria-container');
  container.innerHTML = '';
  addCriteriaField();

  // Set defaults
  document.getElementById('storyPoints').value = 3;
  document.getElementById('storyPriority').value = 'Medium';
  document.getElementById('storyStatus').value = 'Backlog';

  validateStoryForm();
}

// Adicionar campo de critério de aceitação
function addCriteriaField(value = '') {
  const container = document.querySelector('.criteria-container');
  const div = document.createElement('div');
  div.className = 'criteria-item';
  div.innerHTML = `
    <input type="text" class="criteria-input" placeholder="Critério de aceitação" value="${value}">
    <button type="button" class="btn btn--ghost btn--small remove-criteria">
      <i class="fas fa-minus"></i>
    </button>
  `;

  container.appendChild(div);

  // Add remove listener
  div.querySelector('.remove-criteria').addEventListener('click', () => {
    if (container.children.length > 1) {
      div.remove();
      validateStoryForm();
    }
  });

  // Add validation listener
  div.querySelector('.criteria-input').addEventListener('input', validateStoryForm);
}

// Validar formulário de story
function validateStoryForm() {
  const validationContainer = document.querySelector('.validation-items');
  if (!validationContainer) return;

  const title = document.getElementById('storyTitle').value;
  const persona = document.getElementById('storyPersona').value;
  const action = document.getElementById('storyAction').value;
  const benefit = document.getElementById('storyBenefit').value;
  const criteria = Array.from(document.querySelectorAll('.criteria-input'))
    .map(input => input.value)
    .filter(value => value.trim());

  const validations = [
    {
      label: 'Independent: Título específico e claro',
      valid: title.length > 10,
      icon: 'fas fa-check-circle'
    },
    {
      label: 'Negotiable: Persona bem definida',
      valid: persona !== '',
      icon: 'fas fa-user'
    },
    {
      label: 'Valuable: Benefício claro',
      valid: benefit.length > 10,
      icon: 'fas fa-star'
    },
    {
      label: 'Estimable: Story points definidos',
      valid: document.getElementById('storyPoints').value > 0,
      icon: 'fas fa-calculator'
    },
    {
      label: 'Small & Testable: Critérios de aceitação',
      valid: criteria.length > 0,
      icon: 'fas fa-tasks'
    }
  ];

  validationContainer.innerHTML = validations.map(validation => `
    <div class="validation-item ${validation.valid ? 'valid' : 'invalid'}">
      <i class="${validation.icon}"></i>
      <span>${validation.label}</span>
      <i class="fas ${validation.valid ? 'fa-check' : 'fa-times'}"></i>
    </div>
  `).join('');
}

// Submeter formulário de story
function handleStorySubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const criteria = Array.from(document.querySelectorAll('.criteria-input'))
    .map(input => input.value)
    .filter(value => value.trim());

  const tags = document.getElementById('storyTags').value
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag);

  const storyData = {
    projectId: parseInt(document.getElementById('storyProject').value),
    title: document.getElementById('storyTitle').value,
    persona: document.getElementById('storyPersona').value,
    action: document.getElementById('storyAction').value,
    benefit: document.getElementById('storyBenefit').value,
    acceptanceCriteria: criteria,
    storyPoints: parseInt(document.getElementById('storyPoints').value),
    status: document.getElementById('storyStatus').value,
    priority: document.getElementById('storyPriority').value,
    tags: tags,
    feature: document.getElementById('storyTitle').value, // Simplificado
    comments: []
  };

  if (appState.editingStory) {
    // Update existing story
    const storyIndex = appData.userStories.findIndex(s => s.id === appState.editingStory);
    if (storyIndex !== -1) {
      appData.userStories[storyIndex] = { ...appData.userStories[storyIndex], ...storyData };
    }
  } else {
    // Create new story
    storyData.id = appState.nextStoryId++;
    appData.userStories.push(storyData);
  }

  saveData();
  closeStoryModal();
  renderInitialData();

  // Show success message
  showNotification('User Story salva com sucesso!', 'success');
}

// Editar story
function editStory(storyId) {
  openStoryModal(storyId);
}

// Mostrar/esconder views
function showView(viewName) {
  // Hide all views
  Object.values(elements.views).forEach(view => {
    if (view) view.classList.remove('active');
  });

  // Show selected view
  if (elements.views[viewName]) {
    elements.views[viewName].classList.add('active');
    appState.currentView = viewName;
  }

  // Update view-specific content
  if (viewName === 'kanban') {
    renderKanbanBoard();
  } else if (viewName === 'dashboard') {
    updateDashboardStats();
    renderRecentStories();
  }
}

// Export modal
function openExportModal() {
  elements.modals.export.classList.add('active');
}

function closeExportModal() {
  elements.modals.export.classList.remove('active');
}

// Handle export
function handleExport() {
  const format = document.querySelector('input[name="exportFormat"]:checked').value;
  const stories = appState.currentProject 
    ? appData.userStories.filter(s => s.projectId === appState.currentProject)
    : appData.userStories;

  let exportData;
  let filename;
  let mimeType;

  switch (format) {
    case 'json':
      exportData = JSON.stringify({ stories, projects: appData.projects }, null, 2);
      filename = 'user-stories.json';
      mimeType = 'application/json';
      break;

    case 'csv':
      exportData = convertToCSV(stories);
      filename = 'user-stories.csv';
      mimeType = 'text/csv';
      break;

    case 'jira':
      exportData = convertToJiraCSV(stories);
      filename = 'jira-import.csv';
      mimeType = 'text/csv';
      break;

    case 'markdown':
      exportData = convertToMarkdown(stories);
      filename = 'user-stories.md';
      mimeType = 'text/markdown';
      break;
  }

  downloadFile(exportData, filename, mimeType);
  closeExportModal();
  showNotification('Export realizado com sucesso!', 'success');
}

// Convert to CSV
function convertToCSV(stories) {
  const headers = ['ID', 'Projeto', 'Título', 'Persona', 'Ação', 'Benefício', 'Story Points', 'Status', 'Prioridade', 'Tags', 'Critérios de Aceitação'];

  const rows = stories.map(story => {
    const project = appData.projects.find(p => p.id === story.projectId);
    return [
      story.id,
      project ? project.name : '',
      story.title,
      story.persona,
      story.action,
      story.benefit,
      story.storyPoints,
      story.status,
      story.priority,
      story.tags ? story.tags.join('; ') : '',
      story.acceptanceCriteria ? story.acceptanceCriteria.join('; ') : ''
    ];
  });

  return [headers, ...rows].map(row => 
    row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')
  ).join('\n');
}

// Convert to Jira CSV
function convertToJiraCSV(stories) {
  const headers = ['Summary', 'Issue Type', 'Priority', 'Description', 'Story Points', 'Labels'];

  const rows = stories.map(story => [
    story.title,
    'Story',
    story.priority,
    `Como ${story.persona}, eu quero ${story.action} para que ${story.benefit}\n\nCritérios de Aceitação:\n${story.acceptanceCriteria ? story.acceptanceCriteria.map(c => `- ${c}`).join('\n') : ''}`,
    story.storyPoints,
    story.tags ? story.tags.join(' ') : ''
  ]);

  return [headers, ...rows].map(row => 
    row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')
  ).join('\n');
}

// Convert to Markdown
function convertToMarkdown(stories) {
  let markdown = '# User Stories\n\n';

  const projectGroups = {};
  stories.forEach(story => {
    const project = appData.projects.find(p => p.id === story.projectId);
    const projectName = project ? project.name : 'Sem Projeto';

    if (!projectGroups[projectName]) {
      projectGroups[projectName] = [];
    }
    projectGroups[projectName].push(story);
  });

  Object.entries(projectGroups).forEach(([projectName, projectStories]) => {
    markdown += `## ${projectName}\n\n`;

    projectStories.forEach(story => {
      markdown += `### ${story.title}\n\n`;
      markdown += `**Como** ${story.persona}, **eu quero** ${story.action} **para que** ${story.benefit}\n\n`;
      markdown += `- **Story Points:** ${story.storyPoints}\n`;
      markdown += `- **Status:** ${story.status}\n`;
      markdown += `- **Prioridade:** ${story.priority}\n`;
      if (story.tags && story.tags.length > 0) {
        markdown += `- **Tags:** ${story.tags.join(', ')}\n`;
      }
      markdown += '\n**Critérios de Aceitação:**\n\n';
      if (story.acceptanceCriteria && story.acceptanceCriteria.length > 0) {
        story.acceptanceCriteria.forEach(criteria => {
          markdown += `- ${criteria}\n`;
        });
      }
      markdown += '\n---\n\n';
    });
  });

  return markdown;
}

// Download file
function downloadFile(data, filename, mimeType) {
  const blob = new Blob([data], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// AI Assistant
function toggleAiAssistant() {
  const assistant = document.getElementById('aiAssistant');
  assistant.classList.toggle('active');

  if (assistant.classList.contains('active')) {
    generateAiSuggestions();
  }
}

function generateAiSuggestions() {
  const suggestions = [
    {
      title: 'Melhore a Especificidade',
      description: 'Suas user stories podem ser mais específicas. Considere adicionar detalhes sobre o contexto de uso.',
      action: 'Ver Sugestões'
    },
    {
      title: 'Critérios de Aceitação',
      description: 'Algumas stories não possuem critérios de aceitação suficientes para serem testáveis.',
      action: 'Revisar Stories'
    },
    {
      title: 'Balanceamento de Story Points',
      description: 'Você tem muitas stories com 8+ pontos. Considere quebrar em stories menores.',
      action: 'Analisar Stories'
    }
  ];

  const container = document.getElementById('aiSuggestionsList');
  container.innerHTML = suggestions.map(suggestion => `
    <div class="ai-suggestion">
      <h4>${suggestion.title}</h4>
      <p>${suggestion.description}</p>
      <button class="btn btn--small btn--primary">${suggestion.action}</button>
    </div>
  `).join('');
}

// Notifications
function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
    <span>${message}</span>
  `;

  // Add styles if not exists
  if (!document.getElementById('notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        z-index: 3000;
        animation: slideInNotification 0.3s ease;
      }
      .notification--success { background-color: var(--color-success); }
      .notification--info { background-color: var(--color-primary); }
      .notification--error { background-color: var(--color-danger); }
      @keyframes slideInNotification {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Helper functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Auto-save functionality
const autoSave = debounce(() => {
  saveData();
}, 1000);

// Add to window for debugging
window.StoryFlowApp = {
  data: appData,
  state: appState,
  showView,
  openStoryModal,
  toggleTheme
};