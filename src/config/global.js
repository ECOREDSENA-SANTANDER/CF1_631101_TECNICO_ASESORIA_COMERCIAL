export default {
  global: {
    Name: 'Identificación de nichos de mercado',
    Description: 'En este componente formativo se abordarán los fundamentos del mercadeo y las principales decisiones relacionadas con productos y servicios, precio, distribución y comunicación. Asimismo, se estudiarán la segmentación del mercado y la identificación de grupos de clientes potenciales, junto con técnicas e instrumentos para recolectar, organizar y gestionar información comercial mediante bases de datos.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
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
        numero: '1',
        titulo: 'Tema 1',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Comprensión del mercado y las necesidades del cliente',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estrategias para atender el mercado: mezcla de mercadeo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Productos, servicios y marcas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Atributos y beneficios de productos y servicios',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'El precio en la decisión comercial',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Canales de distribución',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Funciones de los intermediarios en los canales de distribución',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos y estrategias de los canales de distribución',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Comercializacion mayorista y minorista',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Segmentación del mercado',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Base de datos',
      significado: 'Conjunto organizado de datos relacionados que facilita su almacenamiento, consulta, actualización y análisis.',
    },
    {
      termino: 'Canal de distribución',
      significado: 'Ruta mediante la cual productos o servicios llegan desde la organización hasta los clientes.',
    },
    {
      termino: 'Cliente potencial',
      significado: 'Persona con características, necesidades, interés y capacidad de compra para convertirse en cliente.',
    },
    {
      termino: 'Comunicación comercial',
      significado: 'Proceso de transmisión de mensajes orientado a informar, persuadir y relacionarse con el mercado.',
    },
    {
      termino: 'Consumidor',
      significado: 'Persona que utiliza o se beneficia de un producto o servicio.',
    },
    {
      termino: 'Instrumento de recolección',
      significado: 'Herramienta utilizada para recopilar y registrar información de manera organizada.',
    },
    {
      termino: 'Intermediario',
      significado: 'Persona o empresa que participa en la distribución entre productores y clientes.',
    },
    {
      termino: 'Mercadeo',
      significado: 'Procesos y actividades orientados a comprender necesidades y desarrollar ofertas de valor.',
    },
    {
      termino: 'Mercado meta',
      significado: 'Segmento o conjunto de segmentos que una organización decide atender.',
    },
    {
      termino: 'Mezcla de mercadeo',
      significado: 'Combinación estratégica de producto, precio, plaza y promoción para atender un mercado.',
    },
    {
      termino: 'Nicho de mercado',
      significado: 'Grupo específico de consumidores con características o necesidades particulares dentro de un mercado.',
    },
    {
      termino: 'Segmentación de mercado',
      significado: 'División del mercado en grupos de consumidores con características, necesidades o comportamientos similares.',
    },
    {
      termino: 'Técnica de recolección',
      significado: 'Procedimiento utilizado para obtener información necesaria de acuerdo con un propósito definido.',
    },
    {
      termino: 'Valor para el cliente',
      significado: 'Percepción de los beneficios recibidos frente a los costos y esfuerzos asociados.',
    },
    {
      termino: 'Variable de segmentación',
      significado: 'Característica utilizada para identificar y diferenciar grupos de consumidores dentro de un mercado.',
    },
  ],
  referencias: [
    {
      referencia: 'Arellano Cueva, R. (2010). Marketing: Enfoque América Latina. El marketing científico aplicado a Latinoamérica. Pearson Educación.',
      link: '',
    },
    {
      referencia: 'Lifeder. (21 de enero de 2021). 7 técnicas e Instrumentos para la Recolección de Datos.',
      link: '',
    },
    {
      referencia: 'Creswell, J. W., & Creswell, J. D. (2023). Research design: Qualitative, quantitative, and mixed methods approaches (6th ed.). SAGE Publications.',
      link: '',
    },
    {
      referencia: 'Díaz-Bravo, L., Torruco-García, U., Martínez-Hernández, M., & Varela-Ruiz, M. (2013). La entrevista, recurso flexible y dinámico. Investigación en Educación Médica, 2(7), 162-167.',
      link: '',
    },
    {
      referencia: 'Fano, F. (2015). ¿Qué es estrategia? El pensamiento de Michael E. Porter. Mejora Competitiva.',
      link: '',
    },
    {
      referencia: 'Goñi Ávila, N. (2008). El precio: Variable clave en el marketing. Pearson Educación.',
      link: '',
    },
    {
      referencia: 'Hernández Sampieri, R., & Mendoza Torres, C. P. (2023). Metodología de la investigación: Las rutas cuantitativa, cualitativa y mixta (2.ª ed.). McGraw Hill Interamericana.',
      link: '',
    },
    {
      referencia: 'Kendall, K. E., & Kendall, J. E. (2011). Análisis y diseño de sistemas. Pearson Educación.',
      link: '',
    },
    {
      referencia: 'Kerin, R. A., Hartley, S. W., & Rudelius, W. (2014). Marketing (11.ª ed.). McGraw Hill.',
      link: '',
    },
    {
      referencia: 'Kerin, R. A., & Hartley, S. W. (2023). Marketing (16.ª ed.). McGraw Hill.',
      link: '',
    },
    {
      referencia: 'Kotler, P., y Armstrong, G. (2012). Marketing (14.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia: 'Kotler, P., y Armstrong, G. (2013). Fundamentos de marketing (11.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia: 'Kotler, P., Armstrong, G., & Balasubramanian, S. (2023). Principles of marketing (19th ed.). Pearson.',
      link: '',
    },
    {
      referencia: 'Pereda, G. (14 de septiembre de 2017). Métodos y técnicas de investigación [Presentación de diapositivas]. SlideShare.',
      link: '',
    },
    {
      referencia: 'Santesmases Mestre, M., Valderrey Villar, F. J., & Sánchez Guzmán, A. D. C. (2014). Fundamentos de mercadotecnia. Grupo Editorial Patria.',
      link: '',
    },
    {
      referencia: 'Stanton, W. J., Etzel, M. J., & Walker, B. J. (2007). Fundamentos de marketing (14.ª ed.). McGraw Hill Interamericana.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '---',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: ' ',
          cargo: ' ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: ' ',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa ',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
}
