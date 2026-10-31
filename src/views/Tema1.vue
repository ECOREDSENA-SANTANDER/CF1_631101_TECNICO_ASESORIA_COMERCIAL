<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos de mercadeo
      
      p El mercadeo o #[em marketing] comprende el conjunto de procesos y actividades orientados a comprender las necesidades, deseos y comportamientos de los consumidores, con el propósito de desarrollar ofertas de valor que respondan de manera pertinente a las características del mercado. Para ello, las organizaciones toman decisiones relacionadas con el diseño y características de los productos o servicios, la fijación de precios, los canales de distribución y las estrategias de comunicación y promoción.

      .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Desde esta perspectiva, el mercadeo parte del conocimiento del cliente y del entorno para identificar oportunidades, atraer y conservar clientes y establecer relaciones de valor. Esto implica articular las diferentes decisiones comerciales para que la oferta de la organización responda a las expectativas del mercado y al mismo tiempo, contribuya al cumplimiento de sus objetivos.
      
      p Por tanto, el mercadeo no se limita a promocionar o vender un producto o servicio; constituye un proceso estratégico que permite comprender el mercado, identificar grupos de consumidores con características y necesidades comunes y orientar acciones comerciales diferenciadas. Estos fundamentos constituyen la base para abordar posteriormente la segmentación del mercado y la identificación de nichos con potencial comercial.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
           AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Tipos de mercados")
              .col-md-12.mb-4.mb-md-0
                p Los mercados pueden clasificarse de acuerdo con diferentes criterios, como el tipo de comprador, el producto o servicio comercializado, el ámbito geográfico y las características de la demanda. Estas clasificaciones permiten comprender las condiciones en las que opera una empresa y orientar sus decisiones de mercadeo.
                p Desde la perspectiva de la demanda, una empresa puede identificar diferentes niveles de mercado según las personas u organizaciones que podrían adquirir o que efectivamente adquieren su oferta:
                .row.justify-content-center.mb-5
                  .col-lg-10    
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | #[b Mercado total:] comprende el conjunto de consumidores que presentan necesidades que podrían ser satisfechas por determinada oferta.
                      li 
                        i.lista-ul__vineta
                        | #[b Mercado potencial:] incluye a quienes, además de presentar una necesidad o interés, cuentan con las condiciones para adquirir el producto o servicio.
                      li 
                        i.lista-ul__vineta
                        | #[b Mercado meta:] corresponde al grupo o segmentos seleccionados por la empresa hacia los cuales dirige sus estrategias de mercadeo.
                      li 
                        i.lista-ul__vineta
                        | #[b Mercado real:] está conformado por los consumidores que efectivamente adquieren el producto o servicio.
            .row(titulo="Características del mercado")
              .col-md-12.mb-4.mb-md-0
                p El mercado está determinado por factores como el número de oferentes y compradores, las características de los productos, las condiciones de acceso, los precios y el nivel de competencia. Estas condiciones influyen en las decisiones comerciales y en las estrategias que desarrollan las empresas para diferenciarse y atender a sus clientes.
            .row(titulo="Segmentación del mercado")
              .col-md-12.mb-4.mb-md-0
                p Los consumidores no presentan las mismas necesidades, preferencias ni comportamientos de compra. Por esta razón, la segmentación consiste en dividir un mercado amplio en grupos de consumidores que comparten características similares, con el propósito de diseñar acciones comerciales más acordes con sus necesidades.
                p Entre las principales bases utilizadas para segmentar los mercados de consumo se encuentran:   
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | #[b Geográfica:] ubicación, región, clima, tamaño de la ciudad u otras características territoriales.
                  li 
                    i.lista-ul__vineta
                    | #[b Demográfica:] edad, género, ingresos, ocupación, educación, tamaño del hogar, entre otras.
                  li 
                    i.lista-ul__vineta
                    | #[b Psicográfica:]  estilo de vida, personalidad, intereses y valores.
                  li 
                    i.lista-ul__vineta
                    | #[b Conductual:] hábitos de compra, frecuencia de uso, beneficios buscados, ocasión de compra y nivel de fidelidad.
            .row(titulo="Mercado meta")
              .col-md-12.mb-4.mb-md-0
                p Después de identificar los segmentos, la empresa evalúa cuáles resultan más adecuados de acuerdo con sus capacidades, recursos y objetivos comerciales. El mercado meta corresponde al segmento o conjunto de segmentos que la organización decide atender.
                p Esta elección orienta decisiones relacionadas con el producto, el precio, los canales de distribución y la comunicación, permitiendo concentrar los esfuerzos de mercadeo en los consumidores con mayor afinidad con la oferta.
            .row(titulo="Participación de mercado")
              .col-md-12.mb-4.mb-md-0
                p La participación de mercado permite establecer qué proporción de las ventas de un producto o categoría corresponde a una empresa o marca durante un periodo determinado. Generalmente se expresa como porcentaje y permite comparar el desempeño de la organización frente al total del mercado.
                p Por ejemplo, si en un mercado se venden #[b 10.000 unidades] de un producto y una empresa comercializa #[b 2.000 unidades,] su participación de mercado corresponde al #[b 20 %.]
        .col-lg-4
          img(src='@/assets/curso/temas/t1/2.png', alt='')

      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1.	Comprensión del mercado y las necesidades del cliente
      
      p Comprender el mercado implica reconocer las necesidades de los clientes, la manera en que estas se transforman en deseos y demandas, y los factores que intervienen en sus decisiones de compra. Asimismo, requiere identificar cómo las organizaciones desarrollan ofertas de valor orientadas a satisfacer dichas necesidades. Para abordar esta relación, es importante considerar los siguientes conceptos:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          img(src='@/assets/curso/temas/t1/3.png', alt='')
        .col-lg-6
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Necesidades, deseos y demandas")
              .col-md-12.mb-4.mb-md-0
                p.text-small las necesidades corresponden a carencias o requerimientos que buscan ser satisfechos; los deseos representan formas específicas de satisfacerlas, influenciadas por factores personales, sociales y culturales; y las demandas surgen cuando estos deseos están respaldados por la capacidad y disposición de compra.
            .row(numero="2" titulo="Consumidor y cliente")
              .col-md-12.mb-4.mb-md-0
                p.text-small El consumidor es quien utiliza o se beneficia de un producto o servicio, mientras que el cliente es quien realiza la compra o establece la relación comercial con la organización. Ambos roles pueden coincidir o corresponder a personas diferentes.
            .row(numero="3" titulo="Cliente actual y cliente potencial:")
              .col-md-12.mb-4.mb-md-0
                p.text-small El cliente actual es quien ya adquiere productos o servicios de la organización; el cliente potencial reúne características, necesidades, interés y capacidad de compra que podrían llevarlo a convertirse en cliente.
            .row(numero="4" titulo="Comportamiento del consumidor")
              .col-md-12.mb-4.mb-md-0
                p.text-small Comprende los factores y procesos que influyen en las decisiones relacionadas con la búsqueda, evaluación, selección, compra, uso y valoración de productos o servicios.
            .row(numero="5" titulo="Mercado")
              .col-md-12.mb-4.mb-md-0
                p.text-small Conjunto de compradores actuales y potenciales que comparten necesidades o deseos y que tienen la disposición y capacidad para participar en procesos de intercambio.
            .row(numero="6" titulo="Oferta de mercado")
              .col-md-12.mb-4.mb-md-0
                p.text-small Comprende los productos, servicios, experiencias y beneficios que una organización pone a disposición de los clientes para responder a sus necesidades y generar valor.
            .row(numero="7" titulo="Valor y satisfacción del cliente")
              .col-md-12.mb-4.mb-md-0
                p.text-small El valor corresponde a la percepción que tiene el cliente sobre los beneficios recibidos en relación con los costos y esfuerzos asociados con la adquisición. La satisfacción se genera a partir de la comparación entre las expectativas del cliente y la experiencia obtenida con el producto o servicio.
      p La comprensión de estos elementos permite reconocer que los clientes no presentan características, necesidades ni comportamientos homogéneos. Por esta razón, las organizaciones requieren identificar grupos con características comunes, seleccionar aquellos que pueden atender de manera efectiva y reconocer oportunidades específicas dentro del mercado.   

      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2.	Estrategias para atender el mercado: mezcla de mercadeo
      
      p Una vez comprendidas las necesidades y características de los clientes, la organización debe determinar cómo responderá a ellas mediante una oferta que genere valor. Para ello, define el mercado al cual orientará sus esfuerzos y establece las decisiones comerciales necesarias para posicionar su oferta y facilitar su acceso a los clientes.
      p Estas decisiones se concretan mediante la #[b mezcla de mercadeo,] entendida como el conjunto de variables que una organización integra y gestiona de manera estratégica para responder a las necesidades del mercado seleccionado y alcanzar sus objetivos comerciales. Tradicionalmente, la mezcla de mercadeo se estructura a partir de cuatro variables conocidas como las #[b 4P: producto, precio, plaza y promoción.]
      
      .row.mb-4
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/4.svg', alt='')
            h3.text-center Producto
            p.mb-0 Comprende los bienes, servicios o soluciones que la organización ofrece para satisfacer las necesidades del cliente. Incluye aspectos como características, calidad, diseño, marca, presentación y beneficios ofrecidos.
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/5.svg', alt='')
            h3.text-center Precio
            p.mb-0 Corresponde al valor monetario establecido para adquirir el producto o servicio. Su definición considera factores como costos, percepción de valor, competencia, demanda y objetivos comerciales de la organización.
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/6.svg', alt='')
            h3.text-center Plaza o distribución
            .mb-0 Comprende las decisiones y actividades necesarias para que el producto o servicio esté disponible para el cliente en el lugar, momento y condiciones adecuadas. Incluye canales de distribución, cobertura, ubicación, almacenamiento y logística.
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/7.svg', alt='')
            h3.text-center Promoción o comunicación
            p.mb-0 Reúne las acciones utilizadas para informar, persuadir y mantener contacto con el mercado acerca de la oferta de la organización. Puede incluir publicidad, promoción de ventas, venta personal, relaciones públicas y acciones de mercadeo digital.
      
      p Las cuatro variables deben gestionarse de manera articulada, debido a que las decisiones tomadas sobre una de ellas pueden influir en las demás. Por ejemplo, las características y el posicionamiento de un producto pueden incidir en su precio, en los canales seleccionados para su distribución y en la forma como se comunica al mercado.
      p De esta manera, la mezcla de mercadeo permite transformar el conocimiento de las necesidades del cliente en decisiones comerciales concretas orientadas a generar valor y responder a las condiciones del mercado.
      
      .row.justify-content-center.align-items-center.mb-5.bg-color-3
        .col-lg-11
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 1. 
            span Decisiones básicas para atender el mercado  
          figure
            img(src='@/assets/curso/temas/t1/8.svg', alt='')
      
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3.	Productos, servicios y marcas
      
      img.mb-4(src='@/assets/curso/temas/t1/9.png', alt='')

      p Las empresas ofrecen al mercado #[b productos y servicios] con el propósito de responder a necesidades, deseos o expectativas de los clientes. Para el asesor comercial, conocer las características de la oferta es fundamental, ya que le permite identificar sus beneficios, explicar su utilidad, responder inquietudes y orientar al cliente durante el proceso de compra.

      SlyderE(indicadores="derecha").bg-color-4
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            p Un producto es un bien que posee características y atributos que pueden ser evaluados por el cliente antes o durante su uso, como calidad, diseño, presentación, funcionalidad, tamaño o empaque. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t1/10.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            p Un servicio, por su parte, corresponde a una actividad o beneficio ofrecido para satisfacer una necesidad y se caracteriza por aspectos como la atención, oportunidad, disponibilidad, confiabilidad y experiencia proporcionada al cliente.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t1/11.png', alt='')
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          p Por esta razón, el asesor comercial no debe limitarse a conocer las características de lo que ofrece. También debe comprender:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Qué necesidad satisface.
            li 
              i.lista-ul__vineta
              | Qué beneficios proporciona.
            li 
              i.lista-ul__vineta
              | Qué elementos lo diferencian de otras alternativas disponibles en el mercado.
        .col-lg-6
          .row.justify-content-center.align-items-center.mb-5.bg-color-5
            .col-lg-3
              img(src='@/assets/curso/temas/t1/12.svg', alt='')
            .col-lg-9
              p.text-white Nota: una oferta genera valor cuando sus características y beneficios responden a las necesidades del cliente y este los considera relevantes frente a otras alternativas.

      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.4.	Atributos y beneficios de productos y servicios

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          img(src='@/assets/curso/temas/t1/13.png', alt='')
          p Los atributos corresponden a las características que posee un producto o servicio, mientras que los beneficios representan las ventajas o resultados que dichas características proporcionan al cliente. Esta diferencia es especialmente importante en la asesoría comercial, porque permite explicar no solamente qué tiene la oferta, sino también para qué le sirve al cliente.
        .col-lg-8  
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 1.
            span Ejemplos de atributos y beneficios de productos y servicios
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th Tipo
                  th Atributo
                  th Beneficio para el cliente
              tbody
                tr
                  td(rowspan="4") #[b Producto]
                  td Durabilidad
                  td Mayor tiempo de uso y menor necesidad de reemplazo.
                tr
                  td Funcionalidad
                  td Facilita el cumplimiento de la necesidad para la cual fue adquirido.
                tr
                  td Variedad
                  td Permite seleccionar la alternativa que mejor se ajuste a las necesidades.
                tr
                  td Diseño
                  td Puede favorecer la comodidad, facilidad de uso o adaptación a las preferencias.
                tr
                  td(rowspan="4") #[b Servicio]
                  td Rapidez
                  td Reduce el tiempo de espera del cliente.
                tr
                  td Disponibilidad
                  td Facilita el acceso al servicio cuando se requiere.
                tr
                  td Personalización
                  td Permite adaptar la atención a necesidades particulares.
                tr
                  td Capacidad de respuesta
                  td Facilita la atención oportuna de solicitudes e inconvenientes.

      TabsB.color-primario
        .py-4.py-md-5(titulo="Niveles del producto" :icono="require_src('@/assets/curso/temas/t1/14.svg')")
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/temas/t1/16.png', alt='')
            .col-md-6.mb-4.mb-md-0
              p Para comprender mejor aquello que adquiere el cliente, un producto puede analizarse desde diferentes niveles: 
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | #[b Producto básico:] corresponde al beneficio principal o la necesidad que el cliente busca satisfacer. Por ejemplo, quien adquiere un teléfono móvil puede buscar principalmente comunicarse y acceder a información.  
                i.lista-ul__vineta
                  | #[b Producto tangible o real:] corresponde a la forma concreta en que se presenta la oferta e incluye aspectos como calidad, diseño, características, marca, presentación y empaque.
                i.lista-ul__vineta
                  | #[b Producto aumentado:] incorpora beneficios y servicios adicionales que complementan la compra, como garantía, entrega, instalación, mantenimiento, financiación o servicio posventa.
            p Estos niveles permiten comprender que el cliente no adquiere únicamente un objeto o servicio, sino un conjunto de beneficios y experiencias que influyen en su percepción de valor y en su decisión de compra.
        .py-4.py-md-5(titulo="La marca como elemento de identificación y diferenciación." :icono="require_src('@/assets/curso/temas/t1/15.svg')")
          .row
            SlyderE(indicadores="derecha").bg-color-6
              .row.justify-content-center.align-items-center
                .col-md-5
                  figure
                    img(src='@/assets/curso/temas/t1/17.png', alt='')
                .col-md-7.mb-4.mb-md-0
                  h4 La marca
                  p Es el conjunto de elementos que permite identificar y diferenciar la oferta de una empresa frente a otras disponibles en el mercado. Puede estar representada mediante un nombre, símbolo, logotipo u otros elementos distintivos y, con el tiempo, puede asociarse con determinadas características, experiencias y expectativas.
                  p En la asesoría comercial, conocer la marca permite comunicar con mayor claridad los elementos que respaldan la oferta y explicar al cliente aquello que puede diferenciarla de otras alternativas.
              .row.justify-content-center.align-items-center
                .col-md-5
                  figure
                    img(src='@/assets/curso/temas/t1/17.png', alt='')
                .col-md-7.mb-4.mb-md-0
                  p Una marca puede contribuir a:
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Facilitar la identificación del producto o servicio.
                    li 
                      i.lista-ul__vineta
                      | Diferenciar la oferta frente a la competencia.
                    li 
                      i.lista-ul__vineta
                      | Favorecer el reconocimiento por parte de los clientes.
                    li 
                      i.lista-ul__vineta
                      | Asociar la oferta con determinadas características y beneficios.
                    li 
                      i.lista-ul__vineta
                      | Generar confianza cuando existe una experiencia previa favorable.
                    li 
                      i.lista-ul__vineta
                      | Apoyar la decisión de compra y la relación posterior con el cliente.
                  p De esta manera, producto, servicio y marca se relacionan directamente con la propuesta de valor: el producto o servicio aporta características y beneficios, mientras que la marca contribuye a identificar, diferenciar y posicionar esa oferta en la mente del cliente.
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.5.	El precio en la decisión comercial
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          img(src='@/assets/curso/temas/t1/18.svg', alt='')
          p El precio es el valor monetario que el cliente entrega a cambio de adquirir un producto o acceder a un servicio. Es una variable importante en la decisión de compra, ya que el cliente suele relacionarlo con los beneficios que espera recibir, las alternativas disponibles en el mercado y su capacidad de compra.
        .col-lg-8
          .row.justify-content-center.align-items-center.mb-5.bg-color-7
            .col-lg-3
              img(src='@/assets/curso/temas/t1/19.svg', alt='')
            .col-lg-9
              p Comprender el precio implica ir más allá de informar cuánto cuesta un producto o servicio. Es necesario reconocer qué factores influyen en su determinación, qué condiciones comerciales lo acompañan y cómo comunicar su relación con los beneficios y el valor de la oferta.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/20.svg', alt='')
        h3.mb-0.mx-3 Importancia del precio
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          p El precio cumple una función relevante tanto para la empresa como para el cliente. Para la empresa, contribuye a generar ingresos, recuperar los costos asociados con la oferta y alcanzar sus objetivos comerciales. Para el cliente, representa uno de los elementos que considera al comparar alternativas y tomar una decisión de compra.
          p Por esta razón, el precio debe guardar relación con las características del producto o servicio, los beneficios ofrecidos, las condiciones del mercado y las características de los clientes a quienes se dirige.
        .col-lg-3
          img(src='@/assets/curso/temas/t1/21.png', alt='')
        .col-lg-5
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | #[b Costos:] recursos necesarios para producir, adquirir, distribuir o comercializar el producto o servicio.
            li 
              i.lista-ul__vineta
              | #[b Clientes:] necesidades, preferencias, capacidad de compra y percepción del valor de la oferta.
            li 
              i.lista-ul__vineta
              | #[b Competencia:] precios y condiciones comerciales de productos o servicios similares disponibles en el mercado.
            li 
              i.lista-ul__vineta
              | #[b Valor ofrecido:] beneficios y elementos diferenciadores que el cliente recibe mediante la oferta.
            li 
              i.lista-ul__vineta
              | #[b Condiciones del mercado:] comportamiento de la demanda, disponibilidad de alternativas y características del entorno comercial.
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          img(src='@/assets/curso/temas/t1/22.png', alt='')
          p El valor pagado por un producto, servicio o actividad puede recibir diferentes denominaciones según el tipo de intercambio. Reconocerlas permite al asesor comercial comprender distintas situaciones de negociación y orientar adecuadamente al cliente.
        .col-lg-6 
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 2.
            span Denominación y ejemplo de aplicación de precios
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th Denominación
                  th Ejemplo de aplicación
              tbody
                tr
                  td Precio de venta
                  td Compra de productos.
                tr
                  td Tarifa
                  td Servicios públicos, transporte o servicios especializados.
                tr
                  td Alquiler
                  td Uso temporal de viviendas, equipos o inmuebles.
                tr
                  td Matrícula
                  td Servicios educativos.
                tr
                  td Honorarios
                  td Servicios profesionales.
                tr
                  td Pasaje
                  td Servicios de transporte.
                tr
                  td Cuota
                  td Pagos periódicos o financiación.
                tr
                  td Comisión
                  td Ventas o intermediación.
        
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/20.svg', alt='')
        h3.mb-0.mx-3 Orientaciones para establecer el precio
      
      .row.justify-content-center.align-items-center.mb-5.bg-color-6
        .col-lg-5
          img(src='@/assets/curso/temas/t1/23.png', alt='')
        .col-lg-7
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span a
              | Identificar los costos asociados con el producto o servicio.
            li 
              .lista-ol--cuadro__vineta
                span b
              | Consultar los precios de la competencia y de ofertas similares disponibles en el mercado.
            li 
              .lista-ol--cuadro__vineta
                span c
              | Analizar a los clientes, considerando sus necesidades, capacidad de compra y percepción del valor ofrecido.
            li 
              .lista-ol--cuadro__vineta
                span d
              | Reconocer las características y beneficios de la oferta que pueden generar diferenciación frente a otras alternativas.
            li 
              .lista-ol--cuadro__vineta
                span e
              | Establecer el precio, procurando mantener coherencia entre los costos, las condiciones del mercado, la competencia y el valor proporcionado al cliente.

      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/20.svg', alt='')
        h3.mb-0.mx-3 Estrategias de precios

      p Las empresas pueden utilizar diferentes estrategias de precios de acuerdo con sus objetivos comerciales, las características de la oferta, el comportamiento del mercado y los clientes a quienes se dirigen.
      p Entre las estrategias más utilizadas se encuentran:

      .row.mb-4
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/24.svg', alt='')
            h3.text-center Precio de penetración
            p.mb-0.text-center Consiste en establecer un precio inicial atractivo con el propósito de facilitar la entrada de un producto o servicio al mercado, estimular su compra y captar clientes. Posteriormente, el precio puede ajustarse según la aceptación de la oferta y las condiciones del mercado.
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/25.svg', alt='')
            h3.text-center Precio de desnatado
            p.mb-0.texte-center Consiste en establecer inicialmente un precio elevado para un producto o servicio, especialmente cuando presenta características diferenciadoras o novedosas y existen clientes dispuestos a pagar más por obtenerlo. Con el tiempo, el precio puede reducirse para llegar a otros segmentos del mercado.
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/26.svg', alt='')
            h3.text-center Precio de #[em statu] quo
            p.mb-0.texte-center Consiste en establecer un precio similar al de productos o servicios competidores. En este caso, la empresa toma como referencia las condiciones existentes en el mercado y busca competir mediante otros elementos de la oferta, como el servicio, la calidad, la atención o los beneficios adicionales.
      
      .row.justify-content-center.mb-5.bg-color-8
        .col-lg-8
          p #[b Nota:] no existe una estrategia de precio adecuada para todas las situaciones. Su selección depende de los objetivos de la empresa, las características del mercado, la competencia, los clientes y el valor ofrecido.

      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/20.svg', alt='')
        h3.mb-0.mx-3 Descuentos e incentivos comerciales
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          img(src='@/assets/curso/temas/t1/27.png', alt='')
          p Además de establecer un precio, las empresas pueden aplicar #[b descuentos e incentivos] para estimular la compra, facilitar una negociación o responder a determinadas condiciones comerciales.
        .col-lg-6
          p Entre los más utilizados se encuentran:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | #[b Descuento por volumen:] se aplica cuando el cliente adquiere una cantidad determinada de productos.
            li 
              i.lista-ul__vineta
              | #[b Descuento por pronto pago:] beneficia al cliente que realiza el pago antes del plazo establecido.
            li 
              i.lista-ul__vineta
              | #[b Descuento estacional:] se utiliza durante determinadas temporadas o periodos del año.
            li 
              i.lista-ul__vineta
              | #[b Descuento comercial:] se concede bajo determinadas condiciones establecidas por la empresa o dentro del canal de comercialización.
            li 
              i.lista-ul__vineta
              | #[b Descuento temporal:] reduce el precio durante un periodo determinado para estimular la compra.
            li 
              i.lista-ul__vineta
              | #[b Cupones:] permiten acceder a descuentos o beneficios bajo condiciones previamente definidas.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/20.svg', alt='')
        h3.mb-0.mx-3 El precio como argumento comercial
      
      img(src='@/assets/curso/temas/t1/28.png', alt='')

      p Durante la asesoría comercial, el precio debe comunicarse junto con los beneficios y el valor que recibe el cliente. Cuando una persona considera que un precio es elevado, el asesor puede orientar la conversación hacia las características, beneficios, garantías, condiciones de pago, servicios adicionales u otros elementos que permitan comprender el valor de la oferta.

      .row.justify-content-center.align-items-center.mb-5.bg-color-9
        .col-lg-7
          img(src='@/assets/curso/temas/t1/29.png', alt='')
        .col-lg-5
          img(src='@/assets/curso/temas/t1/30.svg', alt='')
          p Por ejemplo, ante dos productos con precios diferentes, la labor del asesor no consiste únicamente en indicar cuál cuesta menos, sino en explicar sus diferencias y orientar al cliente para que identifique cuál alternativa responde mejor a sus necesidades y posibilidades.
      
      p De esta manera, el conocimiento del precio, las estrategias y las condiciones comerciales fortalece la capacidad del asesor para informar, argumentar y orientar la decisión de compra del cliente.
          

           



  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
