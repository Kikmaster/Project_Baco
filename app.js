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
  epics: [
    {
      id: 1,
      projectId: 1,
      title: "Sistema de Autenticação Completo",
      description: "Implementar um sistema de autenticação robusto e seguro que permita múltiplas formas de login e gestão de perfis de usuário",
      objectives: [
        "Reduzir fricção no processo de login",
        "Aumentar segurança das contas",
        "Melhorar experiência do usuário"
      ],
      businessValue: "Aumentar conversão de usuários em 25% e reduzir abandonos por problemas de login",
      acceptanceCriteria: [
        "Suporte a login social (Google, Facebook, Apple)",
        "Autenticação de dois fatores",
        "Recuperação de senha inteligente",
        "Gestão completa de perfil"
      ],
      priority: "High",
      status: "In Progress",
      estimatedStoryPoints: 21,
      color: "#3B82F6",
      createdAt: "2025-01-10T10:00:00Z",
      dueDate: "2025-03-15T23:59:59Z"
    },
    {
      id: 2,
      projectId: 1,
      title: "Experiência de Compra Otimizada",
      description: "Criar uma jornada de compra fluida e intuitiva que maximize conversões e minimize abandonos de carrinho",
      objectives: [
        "Reduzir taxa de abandono de carrinho",
        "Simplicar processo de checkout",
        "Implementar recursos de cross-selling"
      ],
      businessValue: "Aumentar taxa de conversão em 30% e ticket médio em 15%",
      acceptanceCriteria: [
        "Carrinho persistente entre sessões",
        "Checkout em uma página",
        "Múltiplas opções de pagamento",
        "Sistema de cupons e descontos"
      ],
      priority: "High",
      status: "Backlog",
      estimatedStoryPoints: 34,
      color: "#10B981",
      createdAt: "2025-01-12T14:30:00Z",
      dueDate: "2025-04-30T23:59:59Z"
    },
    {
      id: 3,
      projectId: 2,
      title: "Dashboard de Analytics Avançado",
      description: "Desenvolver um sistema completo de analytics e relatórios que forneça insights acionáveis para tomada de decisões",
      objectives: [
        "Centralizar métricas de negócio",
        "Automatizar relatórios",
        "Fornecer insights preditivos"
      ],
      businessValue: "Melhorar tomada de decisões e identificar oportunidades de crescimento",
      acceptanceCriteria: [
        "Dashboard em tempo real",
        "Relatórios customizáveis",
        "Alertas automáticos",
        "Export de dados"
      ],
      priority: "Medium",
      status: "Planning",
      estimatedStoryPoints: 55,
      color: "#F59E0B",
      createdAt: "2025-01-15T09:00:00Z",
      dueDate: "2025-06-30T23:59:59Z"
    }
  ],
  userStories: [
    {
      id: 1,
      projectId: 1,
      epicId: 1,
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
      epicId: 2,
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
      epicId: 3,
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
      epicId: 2,
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
      epicId: null,
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
  currentEpic: null,
  theme: localStorage.getItem('theme') || 'light',
  editingStory: null,
  editingEpic: null,
  nextStoryId: 6,
  nextEpicId: 4,
  aiEnabled: true
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
  
  // Create epic button
  document.getElementById('createEpicBtn').addEventListener('click', () => openEpicModal());
  document.getElementById('quickCreateEpic').addEventListener('click', () => openEpicModal());

  // Modal controls - Stories
  document.getElementById('closeModal').addEventListener('click', closeStoryModal);
  document.getElementById('cancelStory').addEventListener('click', closeStoryModal);
  
  // Modal controls - Epics
  document.getElementById('closeEpicModal').addEventListener('click', closeEpicModal);
  document.getElementById('cancelEpic').addEventListener('click', closeEpicModal);
  document.getElementById('saveEpic').addEventListener('click', saveEpic);
  
  // Epic objectives
  document.getElementById('addObjective').addEventListener('click', () => addObjectiveField(''));
  
  // AI Story Generation
  document.getElementById('generateStoriesBtn').addEventListener('click', showAIGeneratedStories);

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
  loadEpicsInDashboard();
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
  loadEpicsInDashboard();
}

// Refresh dashboard
function refreshDashboard() {
  updateDashboardStats();
  renderRecentStories();
  renderKanbanBoard();
  loadEpicsInDashboard();
}

// Atualizar estatísticas do dashboard
function updateDashboardStats() {
  const stories = appState.currentProject 
    ? appData.userStories.filter(s => s.projectId === appState.currentProject)
    : appData.userStories;
    
  const epics = appState.currentProject 
    ? appData.epics.filter(e => e.projectId === appState.currentProject)
    : appData.epics;

  const totalStories = stories.length;
  const completedStories = stories.filter(s => s.status === 'Done').length;
  const inProgressStories = stories.filter(s => s.status === 'In Progress').length;
  const totalEpics = epics.length;

  document.getElementById('totalStories').textContent = totalStories;
  document.getElementById('completedStories').textContent = completedStories;
  document.getElementById('inProgressStories').textContent = inProgressStories;
  document.getElementById('totalEpics').textContent = totalEpics;
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
    loadEpicsInDashboard();
  } else if (viewName === 'story-map') {
    renderStoryMap();
  }
}

// Render hierarchical story map
function renderStoryMap() {
  const container = document.getElementById('storyMapGrid');
  if (!container) return;
  
  const epics = appState.currentProject 
    ? appData.epics.filter(e => e.projectId === appState.currentProject)
    : appData.epics;
    
  const stories = appState.currentProject 
    ? appData.userStories.filter(s => s.projectId === appState.currentProject)
    : appData.userStories;
  
  if (epics.length === 0 && stories.length === 0) {
    container.innerHTML = `
      <div class="story-map-empty">
        <i class="fas fa-sitemap"></i>
        <h3>Nenhum épico ou story encontrado</h3>
        <p>Crie seu primeiro épico para começar a construir o story map</p>
        <button class="btn btn--primary" onclick="openEpicModal()">
          <i class="fas fa-plus"></i>
          Criar Primeiro Épico
        </button>
      </div>
    `;
    return;
  }
  
  let mapHTML = '<div class="story-map-hierarchy">';
  
  // Render epics with their stories
  epics.forEach(epic => {
    const epicStories = stories.filter(s => s.epicId === epic.id);
    const completedStories = epicStories.filter(s => s.status === 'Done').length;
    const progress = epicStories.length > 0 ? Math.round((completedStories / epicStories.length) * 100) : 0;
    
    mapHTML += `
      <div class="epic-lane" style="border-left: 4px solid ${epic.color}">
        <div class="epic-header-map">
          <div class="epic-info">
            <h3 class="epic-title-map">${epic.title}</h3>
            <p class="epic-description-map">${epic.description}</p>
            <div class="epic-meta">
              <span class="epic-status-badge status--${epic.status.toLowerCase().replace(' ', '-')}">
                ${epic.status}
              </span>
              <span class="epic-priority-badge priority--${epic.priority.toLowerCase()}">
                ${epic.priority} Priority
              </span>
            </div>
          </div>
          <div class="epic-progress-map">
            <div class="progress-circle">
              <span class="progress-percentage">${progress}%</span>
            </div>
            <small>${completedStories}/${epicStories.length} stories</small>
          </div>
          <div class="epic-actions-map">
            <button class="btn btn--ghost btn--small" onclick="openEpicModal(${epic.id})" title="Editar Épico">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn--ghost btn--small" onclick="generateStoriesForEpic(${epic.id})" title="Gerar Stories com IA">
              <i class="fas fa-magic"></i>
            </button>
          </div>
        </div>
        
        <div class="stories-swim-lane">
          ${epicStories.length === 0 
            ? `<div class="no-stories">
                <p>Nenhuma story neste épico</p>
                <button class="btn btn--ghost btn--small" onclick="generateStoriesForEpic(${epic.id})">
                  <i class="fas fa-plus"></i>
                  Adicionar Stories
                </button>
               </div>`
            : epicStories.map(story => `
                <div class="story-card-map ${story.status.toLowerCase().replace(' ', '-')}" onclick="editStory(${story.id})">
                  <div class="story-header-map">
                    <h4 class="story-title-map">${story.title}</h4>
                    <span class="story-points-badge">${story.storyPoints}</span>
                  </div>
                  <div class="story-meta-map">
                    <span class="story-persona">${story.persona}</span>
                    <span class="story-status-badge ${story.status.toLowerCase().replace(' ', '-')}">
                      ${story.status}
                    </span>
                  </div>
                  <div class="story-tags-map">
                    ${story.tags ? story.tags.slice(0, 2).map(tag => `<span class="tag-sm">${tag}</span>`).join('') : ''}
                  </div>
                </div>
              `).join('')
          }
        </div>
      </div>
    `;
  });
  
  // Render standalone stories (without epic)
  const standaloneStories = stories.filter(s => !s.epicId);
  if (standaloneStories.length > 0) {
    mapHTML += `
      <div class="epic-lane standalone">
        <div class="epic-header-map">
          <div class="epic-info">
            <h3 class="epic-title-map">Stories Independentes</h3>
            <p class="epic-description-map">User stories que não pertencem a nenhum épico</p>
          </div>
        </div>
        
        <div class="stories-swim-lane">
          ${standaloneStories.map(story => `
            <div class="story-card-map ${story.status.toLowerCase().replace(' ', '-')}" onclick="editStory(${story.id})">
              <div class="story-header-map">
                <h4 class="story-title-map">${story.title}</h4>
                <span class="story-points-badge">${story.storyPoints}</span>
              </div>
              <div class="story-meta-map">
                <span class="story-persona">${story.persona}</span>
                <span class="story-status-badge ${story.status.toLowerCase().replace(' ', '-')}">
                  ${story.status}
                </span>
              </div>
              <div class="story-tags-map">
                ${story.tags ? story.tags.slice(0, 2).map(tag => `<span class="tag-sm">${tag}</span>`).join('') : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  mapHTML += '</div>';
  container.innerHTML = mapHTML;
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
    
  const epics = appState.currentProject 
    ? appData.epics.filter(e => e.projectId === appState.currentProject)
    : appData.epics;

  let exportData;
  let filename;
  let mimeType;

  switch (format) {
    case 'json':
      exportData = JSON.stringify({ 
        stories, 
        epics, 
        projects: appData.projects,
        exportDate: new Date().toISOString(),
        version: '2.0'
      }, null, 2);
      filename = 'storyflow-export.json';
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
  const epics = appState.currentProject 
    ? appData.epics.filter(e => e.projectId === appState.currentProject)
    : appData.epics;
    
  let markdown = '# StoryFlow Export\n\n';
  markdown += `**Data de Export:** ${new Date().toLocaleString('pt-BR')}\n\n`;
  
  // Group by projects
  const projectGroups = {};
  stories.forEach(story => {
    const project = appData.projects.find(p => p.id === story.projectId);
    const projectName = project ? project.name : 'Sem Projeto';

    if (!projectGroups[projectName]) {
      projectGroups[projectName] = { stories: [], epics: [] };
    }
    projectGroups[projectName].stories.push(story);
  });
  
  // Add epics to project groups
  epics.forEach(epic => {
    const project = appData.projects.find(p => p.id === epic.projectId);
    const projectName = project ? project.name : 'Sem Projeto';
    
    if (!projectGroups[projectName]) {
      projectGroups[projectName] = { stories: [], epics: [] };
    }
    projectGroups[projectName].epics.push(epic);
  });

  Object.entries(projectGroups).forEach(([projectName, data]) => {
    markdown += `## ${projectName}\n\n`;
    
    // Export epics first
    if (data.epics.length > 0) {
      markdown += `### Épicos\n\n`;
      
      data.epics.forEach(epic => {
        markdown += `#### ${epic.title}\n\n`;
        markdown += `**Descrição:** ${epic.description}\n\n`;
        markdown += `**Valor de Negócio:** ${epic.businessValue}\n\n`;
        markdown += `- **Status:** ${epic.status}\n`;
        markdown += `- **Prioridade:** ${epic.priority}\n`;
        markdown += `- **Story Points Estimados:** ${epic.estimatedStoryPoints}\n`;
        
        if (epic.dueDate) {
          markdown += `- **Data de Entrega:** ${new Date(epic.dueDate).toLocaleDateString('pt-BR')}\n`;
        }
        
        markdown += '\n**Objetivos:**\n\n';
        epic.objectives.forEach(objective => {
          markdown += `- ${objective}\n`;
        });
        
        // Add related stories
        const epicStories = stories.filter(s => s.epicId === epic.id);
        if (epicStories.length > 0) {
          markdown += '\n**User Stories:**\n\n';
          
          epicStories.forEach(story => {
            markdown += `##### ${story.title}\n\n`;
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
            markdown += '\n';
          });
        }
        
        markdown += '\n---\n\n';
      });
    }
    
    // Export standalone stories (without epic)
    const standaloneStories = data.stories.filter(s => !s.epicId);
    if (standaloneStories.length > 0) {
      markdown += `### User Stories Independentes\n\n`;
      
      standaloneStories.forEach(story => {
        markdown += `#### ${story.title}\n\n`;
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
    }
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

// === SISTEMA DE ÉPICOS ===

// Open epic modal
function openEpicModal(epicId = null) {
  appState.editingEpic = epicId;
  const modal = document.getElementById('epicModal');
  const form = document.getElementById('epicForm');
  const title = document.getElementById('epicModalTitle');
  
  // Reset form
  form.reset();
  
  if (epicId) {
    title.textContent = 'Editar Épico';
    const epic = appData.epics.find(e => e.id === epicId);
    if (epic) {
      document.getElementById('epicProject').value = epic.projectId;
      document.getElementById('epicTitle').value = epic.title;
      document.getElementById('epicDescription').value = epic.description;
      document.getElementById('epicBusinessValue').value = epic.businessValue;
      document.getElementById('epicPriority').value = epic.priority;
      document.getElementById('epicStatus').value = epic.status;
      document.getElementById('epicColor').value = epic.color;
      if (epic.dueDate) {
        document.getElementById('epicDueDate').value = epic.dueDate.split('T')[0];
      }
      
      // Load objectives
      const container = document.querySelector('.objectives-container');
      container.innerHTML = '';
      epic.objectives.forEach((objective, index) => {
        addObjectiveField(objective);
      });
    }
  } else {
    title.textContent = 'Novo Épico';
    addObjectiveField('');
  }
  
  // Populate projects
  const projectSelect = document.getElementById('epicProject');
  projectSelect.innerHTML = '<option value="">Selecione um projeto</option>' + 
    appData.projects.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
  
  modal.classList.add('active');
}

// Add objective field
function addObjectiveField(value = '') {
  const container = document.querySelector('.objectives-container');
  const div = document.createElement('div');
  div.className = 'objective-item';
  div.innerHTML = `
    <input type="text" class="objective-input" placeholder="Objetivo" value="${value}">
    <button type="button" class="btn btn--ghost btn--small remove-objective">
      <i class="fas fa-minus"></i>
    </button>
  `;
  
  div.querySelector('.remove-objective').addEventListener('click', () => {
    if (container.children.length > 1) {
      div.remove();
    }
  });
  
  container.appendChild(div);
}

// Close epic modal
function closeEpicModal() {
  document.getElementById('epicModal').classList.remove('active');
  appState.editingEpic = null;
}

// Save epic
function saveEpic() {
  const form = document.getElementById('epicForm');
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  
  const objectives = Array.from(document.querySelectorAll('.objective-input'))
    .map(input => input.value.trim())
    .filter(value => value);
  
  const epicData = {
    projectId: parseInt(document.getElementById('epicProject').value),
    title: document.getElementById('epicTitle').value.trim(),
    description: document.getElementById('epicDescription').value.trim(),
    objectives,
    businessValue: document.getElementById('epicBusinessValue').value.trim(),
    priority: document.getElementById('epicPriority').value,
    status: document.getElementById('epicStatus').value,
    color: document.getElementById('epicColor').value,
    dueDate: document.getElementById('epicDueDate').value ? 
      new Date(document.getElementById('epicDueDate').value + 'T23:59:59Z').toISOString() : null
  };
  
  if (appState.editingEpic) {
    // Update existing epic
    const epic = appData.epics.find(e => e.id === appState.editingEpic);
    Object.assign(epic, epicData);
    showNotification('Epic atualizado com sucesso!', 'success');
  } else {
    // Create new epic
    const newEpic = {
      id: appState.nextEpicId++,
      ...epicData,
      acceptanceCriteria: [],
      estimatedStoryPoints: 0,
      createdAt: new Date().toISOString()
    };
    appData.epics.push(newEpic);
    showNotification('Epic criado com sucesso!', 'success');
  }
  
  closeEpicModal();
  refreshDashboard();
  autoSave();
}

// === SISTEMA DE IA PARA GERAÇÃO DE USER STORIES ===

// AI Story Generation Templates
const aiStoryTemplates = {
  authentication: {
    keywords: ['login', 'autenticação', 'senha', 'usuário', 'conta', 'acesso', 'segurança'],
    stories: [
      {
        title: 'Login com email e senha',
        persona: 'Cliente',
        action: 'fazer login usando meu email e senha',
        benefit: 'possa acessar minha conta de forma segura',
        acceptanceCriteria: [
          'Deve validar formato de email',
          'Deve criptografar senha',
          'Deve bloquear após 3 tentativas incorretas',
          'Deve permitir recuperação de senha'
        ],
        storyPoints: 3,
        tags: ['authentication', 'login']
      },
      {
        title: 'Login com redes sociais',
        persona: 'Cliente',
        action: 'fazer login usando minhas credenciais das redes sociais',
        benefit: 'não precise lembrar de mais uma senha',
        acceptanceCriteria: [
          'Deve suportar Google, Facebook e Apple',
          'Deve importar dados básicos do perfil',
          'Deve permitir desconectar contas sociais',
          'Deve respeitar LGPD'
        ],
        storyPoints: 5,
        tags: ['authentication', 'social-login']
      },
      {
        title: 'Autenticação de dois fatores',
        persona: 'Cliente',
        action: 'ativar autenticação de dois fatores na minha conta',
        benefit: 'tenha uma camada adicional de segurança',
        acceptanceCriteria: [
          'Deve suportar SMS e app authenticator',
          'Deve permitir códigos de backup',
          'Deve ser opcional para o usuário',
          'Deve funcionar no login e operações sensíveis'
        ],
        storyPoints: 8,
        tags: ['authentication', '2fa', 'security']
      }
    ]
  },
  ecommerce: {
    keywords: ['compra', 'produto', 'carrinho', 'pagamento', 'pedido', 'loja', 'venda'],
    stories: [
      {
        title: 'Busca e filtros de produtos',
        persona: 'Cliente',
        action: 'buscar e filtrar produtos por categoria, preço e avaliações',
        benefit: 'encontre rapidamente o que procuro',
        acceptanceCriteria: [
          'Deve ter busca por texto livre',
          'Deve permitir filtros combinados',
          'Deve mostrar número de resultados',
          'Deve salvar filtros aplicados'
        ],
        storyPoints: 5,
        tags: ['search', 'filters', 'products']
      },
      {
        title: 'Carrinho de compras persistente',
        persona: 'Cliente',
        action: 'manter produtos no carrinho entre sessões',
        benefit: 'não perca minha seleção ao sair do site',
        acceptanceCriteria: [
          'Deve persistir por 30 dias',
          'Deve sincronizar entre dispositivos',
          'Deve notificar sobre mudanças de preço',
          'Deve permitir salvar para depois'
        ],
        storyPoints: 3,
        tags: ['cart', 'persistence']
      },
      {
        title: 'Checkout simplificado',
        persona: 'Cliente',
        action: 'finalizar compra em poucos passos',
        benefit: 'complete minha compra rapidamente',
        acceptanceCriteria: [
          'Deve permitir checkout como convidado',
          'Deve suportar múltiplos meios de pagamento',
          'Deve calcular frete automaticamente',
          'Deve enviar confirmação por email'
        ],
        storyPoints: 8,
        tags: ['checkout', 'payment']
      }
    ]
  },
  analytics: {
    keywords: ['relatório', 'dashboard', 'métrica', 'analytics', 'dados', 'gráfico'],
    stories: [
      {
        title: 'Dashboard executivo',
        persona: 'Gerente',
        action: 'visualizar KPIs principais em um dashboard',
        benefit: 'tenha visão geral do negócio rapidamente',
        acceptanceCriteria: [
          'Deve mostrar métricas em tempo real',
          'Deve permitir seleção de período',
          'Deve ser responsivo',
          'Deve permitir export de dados'
        ],
        storyPoints: 8,
        tags: ['dashboard', 'analytics', 'kpi']
      },
      {
        title: 'Relatórios customizáveis',
        persona: 'Analista',
        action: 'criar relatórios personalizados com diferentes métricas',
        benefit: 'analise dados específicos do meu interesse',
        acceptanceCriteria: [
          'Deve permitir arrastar e soltar campos',
          'Deve salvar relatórios criados',
          'Deve agendar envio automático',
          'Deve exportar em múltiplos formatos'
        ],
        storyPoints: 13,
        tags: ['reports', 'analytics', 'customization']
      }
    ]
  }
};

// Generate stories with AI
function generateStoriesWithAI() {
  const description = document.getElementById('epicDescription').value.toLowerCase();
  const objectives = Array.from(document.querySelectorAll('.objective-input'))
    .map(input => input.value.toLowerCase())
    .filter(value => value);
  
  const allText = (description + ' ' + objectives.join(' ')).toLowerCase();
  
  // Find matching templates
  const matchedStories = [];
  
  Object.entries(aiStoryTemplates).forEach(([category, template]) => {
    const hasMatch = template.keywords.some(keyword => 
      allText.includes(keyword)
    );
    
    if (hasMatch) {
      matchedStories.push(...template.stories);
    }
  });
  
  // If no matches, provide generic stories
  if (matchedStories.length === 0) {
    matchedStories.push(
      {
        title: 'Funcionalidade principal',
        persona: 'Usuário',
        action: 'utilizar a funcionalidade principal do sistema',
        benefit: 'atinja meus objetivos de forma eficiente',
        acceptanceCriteria: [
          'Deve ser intuitivo e fácil de usar',
          'Deve ter feedback visual adequado',
          'Deve funcionar em diferentes dispositivos'
        ],
        storyPoints: 5,
        tags: ['core-functionality']
      },
      {
        title: 'Interface de usuário',
        persona: 'Usuário',
        action: 'navegar pela interface de forma intuitiva',
        benefit: 'encontre rapidamente o que preciso',
        acceptanceCriteria: [
          'Deve seguir padrões de UX',
          'Deve ser responsivo',
          'Deve ter navegação clara'
        ],
        storyPoints: 3,
        tags: ['ui', 'ux']
      }
    );
  }
  
  return matchedStories.slice(0, 6); // Limit to 6 stories
}

// Show AI generated stories modal
function showAIGeneratedStories() {
  const generatedStories = generateStoriesWithAI();
  
  // Create and show AI stories modal
  const modal = document.createElement('div');
  modal.className = 'modal active';
  modal.id = 'aiStoriesModal';
  modal.innerHTML = `
    <div class="modal-content modal-content--large">
      <div class="modal-header">
        <h2><i class="fas fa-robot"></i> Stories Geradas pela IA</h2>
        <button class="btn btn--ghost" onclick="closeAIStoriesModal()">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="modal-body">
        <div class="ai-generated-stories">
          <p class="ai-intro">Nossa IA analisou a descrição do seu épico e gerou as seguintes user stories:</p>
          <div class="generated-stories-list">
            ${generatedStories.map((story, index) => `
              <div class="generated-story-card" data-index="${index}">
                <div class="story-header">
                  <input type="checkbox" class="story-checkbox" id="story-${index}" checked>
                  <label for="story-${index}" class="story-title">${story.title}</label>
                  <span class="story-points">${story.storyPoints} pts</span>
                </div>
                <div class="story-content">
                  <p class="story-description">
                    <strong>Como</strong> ${story.persona}, 
                    <strong>eu quero</strong> ${story.action} 
                    <strong>para que</strong> ${story.benefit}
                  </p>
                  <div class="story-criteria">
                    <h5>Critérios de Aceitação:</h5>
                    <ul>
                      ${story.acceptanceCriteria.map(criteria => `<li>${criteria}</li>`).join('')}
                    </ul>
                  </div>
                  <div class="story-tags">
                    ${story.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn--secondary" onclick="closeAIStoriesModal()">Cancelar</button>
        <button type="button" class="btn btn--primary" onclick="acceptGeneratedStories()">
          <i class="fas fa-check"></i>
          Adicionar Stories Selecionadas
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
}

// Close AI stories modal
function closeAIStoriesModal() {
  const modal = document.getElementById('aiStoriesModal');
  if (modal) {
    modal.remove();
  }
}

// Accept generated stories
function acceptGeneratedStories() {
  const generatedStories = generateStoriesWithAI();
  const checkboxes = document.querySelectorAll('.story-checkbox:checked');
  const epicId = appState.editingEpic || appState.nextEpicId;
  const projectId = parseInt(document.getElementById('epicProject').value);
  
  let addedCount = 0;
  checkboxes.forEach(checkbox => {
    const index = parseInt(checkbox.id.split('-')[1]);
    const storyData = generatedStories[index];
    
    const newStory = {
      id: appState.nextStoryId++,
      projectId: projectId,
      epicId: epicId,
      title: storyData.title,
      persona: storyData.persona,
      action: storyData.action,
      benefit: storyData.benefit,
      acceptanceCriteria: storyData.acceptanceCriteria,
      storyPoints: storyData.storyPoints,
      status: 'Backlog',
      tags: storyData.tags,
      priority: 'Medium',
      feature: document.getElementById('epicTitle').value || 'Feature',
      createdAt: new Date().toISOString()
    };
    
    appData.userStories.push(newStory);
    addedCount++;
  });
  
  closeAIStoriesModal();
  showNotification(`${addedCount} user stories adicionadas com sucesso!`, 'success');
  autoSave();
}

// Load epics in dashboard
function loadEpicsInDashboard() {
  const container = document.getElementById('epicsGrid');
  if (!container) return;
  
  const epics = appData.epics.filter(epic => 
    !appState.currentProject || epic.projectId === appState.currentProject
  );
  
  if (epics.length === 0) {
    container.innerHTML = '<p class="empty-state">Nenhum épico encontrado. <a href="#" onclick="openEpicModal()">Criar primeiro épico</a></p>';
    return;
  }
  
  container.innerHTML = epics.map(epic => {
    const stories = appData.userStories.filter(s => s.epicId === epic.id);
    const completedStories = stories.filter(s => s.status === 'Done');
    const progress = stories.length > 0 ? Math.round((completedStories.length / stories.length) * 100) : 0;
    
    return `
      <div class="epic-card" style="border-left: 4px solid ${epic.color}">
        <div class="epic-header">
          <h4 class="epic-title">${epic.title}</h4>
          <span class="epic-status status--${epic.status.toLowerCase().replace(' ', '-')}">
            ${epic.status}
          </span>
        </div>
        <p class="epic-description">${epic.description}</p>
        <div class="epic-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
          </div>
          <span class="progress-text">${completedStories.length}/${stories.length} stories</span>
        </div>
        <div class="epic-footer">
          <span class="epic-priority priority--${epic.priority.toLowerCase()}">
            ${epic.priority} Priority
          </span>
          <div class="epic-actions">
            <button class="btn btn--ghost btn--small" onclick="openEpicModal(${epic.id})">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn--ghost btn--small" onclick="generateStoriesForEpic(${epic.id})">
              <i class="fas fa-magic"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Generate stories for existing epic
function generateStoriesForEpic(epicId) {
  const epic = appData.epics.find(e => e.id === epicId);
  if (!epic) return;
  
  // Set up temporary editing state
  document.getElementById('epicTitle').value = epic.title;
  document.getElementById('epicDescription').value = epic.description;
  
  // Clear objectives container and add epic objectives
  const container = document.querySelector('.objectives-container');
  container.innerHTML = '';
  epic.objectives.forEach(objective => {
    addObjectiveField(objective);
  });
  
  appState.editingEpic = epicId;
  showAIGeneratedStories();
}

// Add to window for debugging
window.StoryFlowApp = {
  data: appData,
  state: appState,
  showView,
  openStoryModal,
  openEpicModal,
  toggleTheme,
  generateStoriesWithAI,
  showAIGeneratedStories
};
