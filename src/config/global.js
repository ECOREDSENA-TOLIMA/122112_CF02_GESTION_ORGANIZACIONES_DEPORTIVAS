export default {
  global: {
    componenteFormativo:
      'Estructuración de proyectos y propuesta de mercadeo para el sector del deporte',
    descripcionCurso:
      'Los temas tratados en este componente de formación permiten reconocer aspectos clave inherentes a la estructuración de proyectos y propuestas aplicables al sector deporte.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Elementos conceptuales de la gestión de proyectos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto y tipos de proyectos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Concepto y procesos de la gestión de proyectos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Grupo de inicio del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición y componentes para el inicio de un proyecto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Acta de constitución del proyecto',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Identificación de las partes interesadas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Grupo de planificación del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Plan de gestión del alcance del proyecto',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Plan de gestión del cronograma del proyecto',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Plan de gestión de costos del proyecto',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Plan de gestión de calidad del proyecto',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Plan de gestión de recursos humanos',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Plan de gestión de comunicaciones',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Plan de gestión del riesgo del proyecto',
            hash: 't_3_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.8',
            titulo: 'Plan de gestión de adquisiciones del proyecto',
            hash: 't_3_8',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Formulación de propuestas de mercado acordes con las necesidades poblacionales del sector',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Identificación del mercado y población objeto',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Concepto y características de portafolio de servicios',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Construcción de portafolio de servicios',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Concepto y estrategias de mercadeo deportivo',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/122112_CF02_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Project Management Institute [PMI]. (2004). Guía de los Fundamentos para la Dirección de Proyectos.',
      tipo: 'Libro digital',
      referencia: '',
      descarga:
        'https://www.sadamweb.com.ar/news/2016_08Agosto/Guia_Fundamentos_para_la_Direccion_de_Proyectos-4ta_Edicion.pdf?PMBOX=http://www.sadamweb.com.ar/news/2016_08Agosto/Guia_Fundamentos_para_la_Direccion_de_Proyectos-4ta_Edicion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'Persona o empresa que toma la decisión de compra de un producto o servicio, y que, a su vez, mantiene una relación comercial con la empresa, organización o persona.',
    },
    {
      termino: 'Fase del proyecto',
      significado:
        'Conjunto relacionado de actividades del proyecto que culmina en la terminación de uno o más entregables.',
    },
    {
      termino: 'Gestión de proyecto',
      significado:
        'Aplicación de conocimientos, destrezas, herramientas y técnicas a las actividades de un proyecto para el logro de los requerimientos.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'La actividad, el conjunto de instituciones y los procesos para crear, comunicar, entregar e intercambiar ofertas que tienen valor para los clientes, los socios y la sociedad en general.',
    },
    {
      termino: 'Mercadeo deportivo',
      significado:
        'El arte para descubrir e identificar claramente las necesidades y expectativas del mercado y el arte para ofrecer y ejecutar la mejor opción de manera tal que maximice la satisfacción de necesidades y expectativas de practicantes, aficionados, patrocinadores y la sociedad en general, con el fin de lograr que practicantes y seguidores se unan a las causas para generar beneficio social.',
    },
    {
      termino: 'Partes interesadas',
      significado:
        'Personas o grupos que pueden afectar, verse afectados o sentirse afectados por las decisiones o actividades del proyecto.',
    },
    {
      termino: 'Proyecto',
      significado:
        'Esfuerzo temporal que se lleva a cabo para crear un producto, servicio o resultado único.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cajal, A. (2020). Portafolio de servicios: tipos, partes y ejemplos. Lifeder.',
      link: 'https://www.lifeder.com/portafolio-de-servicios/.',
    },
    {
      referencia:
        'ESAN. (2016). El <em>Marketing</em> y sus definiciones. Conexión ESAN.',
      link:
        'https://www.esan.edu.pe/apuntes-empresariales/2016/05/el-marketing-y-sus-definiciones/',
    },
    {
      referencia:
        'International Project Management Association [IPMA]. (2006). ICB Competence Baseline Version 3.0.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura y Pesca de España. Segmentación de mercados.',
      link:
        'https://www.mapa.gob.es/ministerio/pags/biblioteca/fondo/pdf/5269_39.pdf',
    },
    {
      referencia:
        'Padierna, J. y Cardona, L. (2020). Administración, dirección y gestión en el deporte. Editorial Kinesis. ',
      link: '',
    },
    {
      referencia:
        'Project Management Institute [PMI]. (2008). Organizational Project Management Maturity Model.',
      link: '',
    },
    {
      referencia:
        'Project Management Institute [PMI]. (2013). Guía de los fundamentos para la dirección de proyectos (Guía del PMBOK) (5ta ed.).',
      link:
        'https://sistemastic.files.wordpress.com/2017/07/guia_de_los_fundamentos_para_la_direccion_de_proyectos-pmbok_5ta_edicion_espanol.pdf',
    },
    {
      referencia:
        'International Organization for Standardization. (2018). ISO 31000:2018, Gestión del riesgo. Principios y directrices.',
      link:
        'https://www.ramajudicial.gov.co/documents/5454330/14491339/Norma.ISO.31000.2018.Espanol.pdf/cb482b2c-afd9-4699-b409-0732a5261486',
    },
    {
      referencia:
        'Plepso, C. A. (2015). Estudios de mercados y de opinión pública. Según Mullin (1985). Recuperado de',
      link: 'https://plepso.blogspot.com/2015/08/marketing-deportivo.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Líder Línea de Producción Virtual Tolima',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Tatiana Cristina Vargas ',
          cargo: 'Experto temático',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'Paola Andrea Quintero Aguilar',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesoría metodológica y pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Darío González ',
          cargo: 'Corrección de estilo',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuación instruccional-2023',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesoría metodológica y pedagógica',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluación instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Luis Fernando Sarmiento Betancourth',
          cargo: 'Diseño web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Adriana Marcela Suárez Eljure ',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodriguez Rodriguez',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Ricardo Vásquez Arroyave ',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Wilson Andrés Arenales Caceres ',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Zuleidy Maria Ruiz Torres',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Lizeth Karina Manchego Suárez',
          cargo: 'Desarrollo front-end',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Yenny Patricia Ulloa Villamizar',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseño web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
