<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Segmentación del mercado
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una empresa no siempre puede atender de la misma manera a todos los consumidores, ya que estos presentan diferentes necesidades, preferencias, características y comportamientos de compra. Por esta razón, uno de los primeros pasos para definir el mercado meta consiste en segmentar el mercado, es decir, identificar grupos de consumidores que compartan características similares y que puedan ser atendidos mediante estrategias comerciales acordes con sus necesidades.
          br
          br
          | Antes de profundizar en este proceso, se invita a consultar el siguiente recurso audiovisual, en el cual se presenta una aproximación a la segmentación de mercados y su importancia para identificar los grupos de consumidores hacia los cuales una empresa puede orientar su oferta.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Segmentación de mercados
    
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p Al consultar el recurso, tenga presente la siguiente pregunta orientadora:

    .row.justify-content-center.mb-4.bg-color-1
      .col-lg-8
        h2.text-white.text-center ¿Por qué una empresa necesita identificar grupos de consumidores con características similares antes de definir su mercado meta?
    
    p A partir de esta contextualización, es importante comprender que la segmentación del mercado consiste en dividir un mercado amplio y heterogéneo en grupos más pequeños de consumidores que presentan características, necesidades, comportamientos o preferencias similares. Cada uno de estos grupos constituye un segmento de mercado.

    .row.justify-content-center.align-items-center.mb-5.bg-color-13
      .col-lg-6
        h4.text-white Por ejemplo, una empresa que comercializa ropa deportiva puede encontrar dentro del mercado consumidores con características diferentes: 
        p.text-white Jóvenes que practican deporte regularmente, adultos interesados en actividades al aire libre, personas que utilizan este tipo de prendas de manera cotidiana o consumidores que buscan productos especializados para determinadas disciplinas deportivas. Aunque todos pueden adquirir ropa deportiva, sus necesidades, preferencias y comportamientos de compra no necesariamente son iguales.
      .col-lg-6
        img(src='@/assets/curso/temas/t3/2.png', alt='')
    
    p Por esta razón, la empresa debe identificar las características que permiten diferenciar a sus consumidores y determinar cuáles resultan relevantes para su oferta. Para ello, puede utilizar diferentes bases de segmentación, principalmente geográficas, demográficas, psicográficas y conductuales.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Bases para segmentar mercados de consumo
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        img(src='@/assets/curso/temas/t3/3.png', alt='')
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2
            img(src='@/assets/curso/temas/t3/4.svg', alt='')
          .col-lg-10
            p Los consumidores que integran un mercado no tienen las mismas características, necesidades, preferencias ni comportamientos de compra. Estas diferencias permiten a las empresas dividir el mercado en grupos con características comunes, con el propósito de conocer mejor a sus posibles clientes y orientar de manera más precisa sus decisiones comerciales.
        p Para realizar esta división se utilizan diferentes bases o variables de segmentación. Las principales son geográficas, demográficas, psicográficas y conductuales. Cada una permite analizar al consumidor desde una perspectiva diferente.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Segmentación geográfica
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        img(src='@/assets/curso/temas/t3/5.svg', alt='')
        p La segmentación geográfica divide el mercado teniendo en cuenta el lugar donde se encuentran los consumidores. Puede considerar variables como país, región, departamento, municipio, zona urbana o rural, clima, densidad poblacional y otras características del territorio.
        p Este tipo de segmentación parte del reconocimiento de que las necesidades, preferencias y formas de consumo pueden variar según la ubicación. Por ello, permite delimitar las áreas geográficas en las cuales la empresa desea concentrar sus acciones de comercialización, distribución y comunicación.
      .col-lg-5
        img(src='@/assets/curso/temas/t3/6.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Segmentación demográfica
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t3/7.svg', alt='')
      .col-lg-7.bg-color-6
        p La segmentación demográfica agrupa a los consumidores de acuerdo con características propias de la población. Entre las variables que pueden considerarse se encuentran edad, ingresos, ocupación, nivel educativo, tamaño del hogar y etapa del ciclo de vida familiar, entre otras que resulten pertinentes para el producto o servicio.
        p Estas variables permiten describir con mayor precisión quiénes conforman un determinado segmento y facilitan la identificación de diferencias relacionadas con las necesidades, capacidad adquisitiva y decisiones de compra.
        
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Segmentación psicográfica
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2
            img(src='@/assets/curso/temas/t3/8.svg', alt='')
          .col-lg-10
            p La segmentación psicográfica permite agrupar a los consumidores considerando aspectos relacionados con su estilo de vida, intereses, personalidad, actividades, opiniones, preferencias y valores.
        p Su propósito es profundizar en características que no siempre pueden identificarse mediante variables demográficas o geográficas. De esta manera, permite comprender cómo las formas de vida, intereses y preferencias pueden influir en la elección, compra y consumo de determinados productos o servicios.
      .col-lg-5
        img(src='@/assets/curso/temas/t3/9.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Segmentación conductual
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        img(src='@/assets/curso/temas/t3/10.png', alt='')
      .col-lg-9.bg-color-7
        p La segmentación conductual clasifica a los consumidores teniendo en cuenta la manera como se relacionan con un producto, servicio o marca. Para ello pueden analizarse aspectos como frecuencia de compra, cantidad consumida, ocasiones de uso, beneficios buscados, nivel de fidelidad y respuesta frente a las estrategias comerciales.
        p Esta segmentación permite comprender las diferencias existentes entre los consumidores a partir de sus comportamientos y decisiones de compra, proporcionando información para definir acciones comerciales acordes con dichas características.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Combinación de las variables de segmentación
    
    .row.justify-content-center.align-items-center.mb-4.bg-color-14
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2
            img(src='@/assets/curso/temas/t3/12.svg', alt='')
          .col-lg-10
            p Las bases de segmentación no tienen que utilizarse de manera independiente. Una empresa puede combinar variables geográficas, demográficas, psicográficas y conductuales para obtener una caracterización más precisa de los consumidores.
        p La selección y combinación de estas variables dependerá de las características del producto o servicio, la información disponible, los objetivos comerciales y los recursos de la organización. Cuanto más pertinente sea la información utilizada, mayor será la posibilidad de identificar segmentos claramente definidos.
      .col-lg-5
        img(src='@/assets/curso/temas/t3/11.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Requisitos para una segmentación eficaz

    p No todo grupo de consumidores identificado constituye necesariamente un segmento útil para la empresa. Para que la segmentación contribuya a la toma de decisiones, los segmentos deben cumplir determinadas condiciones:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        img(src='@/assets/curso/temas/t3/13.png', alt='')
      .col-lg-6
         LineaTiempoD.color-primario
          .row(numero="1" titulo="Medibles")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Debe ser posible obtener información sobre su tamaño, características, comportamiento o capacidad de compra.
          .row(numero="2" titulo="Accesibles")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 La empresa debe tener posibilidades de llegar a sus integrantes mediante canales de comunicación, distribución y comercialización.
          .row(numero="3" titulo="Sustanciales")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Deben tener un tamaño o potencial suficiente para justificar los recursos destinados a atenderlos.
          .row(numero="4" titulo="Diferenciables")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Deben presentar características o comportamientos que permitan distinguirlos de otros segmentos.
          .row(numero="5" titulo="Accionables")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 La empresa debe contar con las capacidades y recursos necesarios para desarrollar acciones dirigidas a ellos.
    p El cumplimiento de estos requisitos permite determinar si los segmentos identificados pueden ser atendidos de manera efectiva y si proporcionan información suficiente para orientar las decisiones de #[em marketing.]

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Pasos para segmentar un mercado
    
    p La segmentación debe desarrollarse de manera organizada, partiendo de un mercado amplio hasta llegar a grupos de consumidores claramente definidos. Para ello, pueden seguirse los siguientes pasos:

    PasosA.color-primario.mb-5(tipo="n")
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Definir el mercado que se desea analizar.
          p Se determina el conjunto general de consumidores que podrían necesitar, utilizar o adquirir el producto o servicio.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t3/14.svg', alt='')
      .row
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t3/15.svg', alt='')
        .col-md-6.mb-4.mb-md-0
          h3 Seleccionar las variables de segmentación.
          p Se establecen las características geográficas, demográficas, psicográficas o conductuales que resulten pertinentes para diferenciar a los consumidores.
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Identificar grupos con características similares.
          p A partir de la información recopilada, se agrupan los consumidores que comparten determinadas características, necesidades o comportamientos.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t3/16.svg', alt='')
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Caracterizar los segmentos.
          p Se describen las principales características de cada grupo, de manera que sea posible establecer con claridad quiénes lo conforman y qué los diferencia de los demás.
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Evaluar los segmentos.
          p Se analiza cada segmento considerando aspectos como tamaño, accesibilidad, necesidades, capacidad de compra, posibilidades de crecimiento y correspondencia con los recursos disponibles.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t3/17.svg', alt='')
      .row
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t3/18.svg', alt='')
        .col-md-6.mb-4.mb-md-0
          h3 Seleccionar el mercado meta.
          p Se determina cuál o cuáles segmentos serán atendidos prioritariamente por la empresa y hacia cuáles se orientarán sus acciones de marketing.
        
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Del segmento al mercado meta
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-2
            img(src='@/assets/curso/temas/t3/19.svg', alt='')
          .col-lg-10
            p La segmentación del mercado y la selección del mercado meta corresponden a momentos diferentes del proceso. La segmentación permite identificar y caracterizar los distintos grupos de consumidores existentes en un mercado. Posteriormente, estos grupos son evaluados para determinar cuáles pueden ser atendidos de acuerdo con los objetivos y capacidades de la empresa.
        p El segmento o los segmentos seleccionados constituyen el mercado meta, entendido como el grupo de consumidores hacia el cual la organización decide orientar principalmente su oferta y sus acciones de #[em marketing.]
        p Para ampliar los conocimientos desarrollados en este componente formativo, se invita a escuchar el pódcast, este recurso permitirá comprender cómo utilizar la información de los consumidores para caracterizar clientes potenciales, reconocer sus necesidades e identificar oportunidades de mercado.
      .col-lg-4
        img(src='@/assets/curso/temas/t3/20.png', alt='')
    
    .bg-color-1.mb-4
      img(src='@/assets/curso/temas/t3/21.svg', alt='')
      .bg-color-1.p-4
        .tarjeta.bg-white.p-4
          TarjetaAudio.color-acento-botones(
          texto="<b>Identificando oportunidades comerciales</b>"
          :audio="require_src('@/assets/actividad/audio/success.mp3')")
          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Estrategias de cobertura del mercado meta
    
    p Una vez definido el mercado meta, la empresa debe establecer cómo lo atenderá. Para ello puede seleccionar diferentes estrategias de cobertura:
    
    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg-color-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/22.svg', alt='')
        h2.text-center #[em Marketing] indiferenciado
        p.text-center  Se dirige al mercado mediante una oferta general, centrada principalmente en las necesidades comunes de los consumidores.
      .tarjeta.bg-color-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/23.svg', alt='')
        h2.text-center #[em Marketing] diferenciado
        p.text-center Se seleccionan varios segmentos y se desarrollan ofertas o estrategias específicas para cada uno.
      .tarjeta.bg-color-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/24.svg', alt='')
        h2.text-center #[em Marketing] concentrado
        p.text-center  Los recursos y esfuerzos se enfocan en uno o pocos segmentos claramente definidos.
      .tarjeta.bg-color-2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/25.svg', alt='')
        h2.text-center #[em Micromarketing]
        p.text-center La oferta se adapta a grupos muy específicos, mercados locales o consumidores individuales.
    
    p La elección de la estrategia dependerá de los recursos disponibles, las características del producto o servicio, las condiciones del mercado, los objetivos comerciales y el nivel de diferenciación requerido.
    p Por tanto, segmentar permite identificar y organizar los diferentes grupos de consumidores; evaluar permite determinar cuáles pueden ser atendidos; seleccionar permite establecer el mercado meta; y definir la estrategia de cobertura determina la manera como la empresa se dirigirá a ese mercado.


    h2 TEMA 4

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez que la empresa ha definido su producto, establecido el precio y seleccionado los canales de distribución para llegar al mercado objetivo, debe determinar #[b cómo comunicará su propuesta de valor a los clientes.] La comunicación permite informar, persuadir y mantener relaciones con el mercado, por lo que constituye un elemento fundamental de la estrategia comercial. 
    
    p La comunicación es un proceso mediante el cual se transmite información entre un emisor y un receptor a través de un medio determinado. Para que este proceso sea efectivo intervienen los siguientes elementos:

    .row.justify-content-center.align-items-center.mb-5.bg-color-3
      .col-lg-11
        .titulo-sexto.color-acento-contenido.mb-3.bg-color-11
          h5 Figura 3. 
          span Proceso de la comunicación 
        figure
          img(src='@/assets/curso/temas/t4/2.svg', alt='Proceso de comunicación entre emisor y receptor mediante codificación, mensaje, medio y decodificación, con ruido y retroalimentación.')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        img(src='@/assets/curso/temas/t4/3.png', alt='')
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Emisor")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Persona, empresa u organización que origina la comunicación.
          .row(numero="2" titulo="Codificación:")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Proceso mediante el cual las ideas se transforman en palabras, símbolos, sonidos u otros recursos que permiten construir el mensaje.
          .row(numero="3" titulo="Mensaje")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Información que se desea transmitir al público objetivo.
          .row(numero="4" titulo="Canal o medio")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Recurso utilizado para hacer llegar el mensaje, como medios digitales, correo electrónico, redes sociales, publicidad, teléfono o comunicación presencial.
          .row(numero="5" titulo="Receptor")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Persona o grupo al que se dirige el mensaje.
          .row(numero="6" titulo="Decodificación")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Interpretación que realiza el receptor a partir del mensaje recibido.
          .row(numero="7" titulo="Retroalimentación")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Respuesta del receptor que permite conocer cómo fue recibido e interpretado el mensaje.
          .row(numero="8" titulo="Ruido")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Cualquier interferencia que pueda alterar, dificultar o distorsionar la comunicación durante el proceso.
      
    p En el ámbito comercial, las empresas utilizan diferentes herramientas de comunicación para relacionarse con sus públicos, posicionar su oferta y apoyar el proceso de venta. Entre las principales se encuentran:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Publicidad")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Comunicación pagada y no personal utilizada para presentar y promocionar productos, servicios, marcas o ideas a un público determinado.
          .row(numero="2" titulo="Promoción de ventas")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Incentivos de duración limitada que buscan estimular la compra o favorecer la comercialización de un producto o servicio.
          .row(numero="3" titulo="Ventas personales")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Comunicación directa entre el representante de ventas y el cliente, orientada a identificar necesidades, presentar soluciones, atender inquietudes y facilitar la decisión de compra.
          .row(numero="4" titulo="Relaciones públicas")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Acciones orientadas a fortalecer la relación de la organización con sus diferentes públicos, favorecer su reputación y gestionar su comunicación institucional.
          .row(numero="5" titulo="<em>Marketing</em> directo")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Comunicación dirigida a consumidores específicos con el propósito de generar una respuesta, facilitar una acción comercial y fortalecer la relación con el cliente.
        p De esta manera, la comunicación comercial no consiste únicamente en transmitir información, sino en seleccionar el mensaje, el medio y las herramientas más apropiadas para establecer una relación efectiva con el mercado objetivo y apoyar el cumplimiento de los objetivos comerciales.
      .col-lg-6
        img(src='@/assets/curso/temas/t4/4.png', alt='')
    
    h2 TEMA 5

    p Para segmentar un mercado no es suficiente establecer las variables geográficas, demográficas, psicográficas o conductuales que se desean analizar. También es necesario disponer de información que permita conocer y caracterizar a los consumidores de acuerdo con dichas variables.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Esta información puede provenir de fuentes existentes o ser obtenida directamente de los consumidores mediante un proceso de recolección de datos. Su propósito es proporcionar información organizada y pertinente que facilite la identificación de características, necesidades, preferencias y comportamientos presentes en el mercado.
    
    p La recolección de datos constituye, por tanto, un apoyo importante para la segmentación, ya que permite sustentar la conformación de los diferentes grupos de consumidores y reducir la toma de decisiones basada únicamente en supuestos.

    //Separador
    //#t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.1.	Técnicas de recolección de datos
    
    p Las técnicas de recolección de datos corresponden a los procedimientos utilizados para obtener la información necesaria de acuerdo con el propósito de la investigación. Su selección depende del tipo de información requerida, las características de la población que se desea estudiar, los recursos disponibles y la forma como posteriormente serán analizados los datos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-2
            img(src='@/assets/curso/temas/t5/2.svg', alt='')
          .col-lg-10
            p Entre las principales técnicas que pueden utilizarse para obtener información del mercado se encuentran:
        ul.lista-ul--color.color-secundario.fa-lista
          li 
            i.fas.fa-user
            | #[b Encuesta:] permite recopilar información de un grupo de personas mediante preguntas previamente estructuradas. Puede aplicarse de manera presencial, telefónica o a través de medios digitales.
          li 
            i.fas.fa-user
            | #[b Entrevista:] permite obtener información mediante una conversación orientada por preguntas relacionadas con el propósito de la investigación. Puede utilizarse cuando se requiere profundizar en opiniones, necesidades, experiencias o percepciones.
          li 
            i.fas.fa-user
            | #[b Observación:] consiste en registrar de manera organizada comportamientos, acciones o situaciones relacionadas con los consumidores y su interacción con productos, servicios o espacios comerciales.
          li 
            i.fas.fa-user
            | #[b Grupos focales:] permiten recopilar información mediante una conversación guiada con un grupo reducido de participantes, con el propósito de conocer opiniones, percepciones, expectativas o actitudes relacionadas con un tema determinado.             
      .col-lg-4
        img(src='@/assets/curso/temas/t5/3.png', alt='')
    
    p La elección de la técnica debe responder a qué información necesita obtener la empresa y para qué será utilizada. Por esta razón, antes de iniciar la recolección es necesario establecer el propósito, determinar la población de interés, seleccionar la técnica apropiada y definir el instrumento mediante el cual se registrará la información.

    img(src='@/assets/curso/temas/t5/4.png', alt='')

    p Una vez definida la técnica, se realiza el trabajo de campo, que comprende la aplicación de los instrumentos y la recopilación de la información. Dependiendo del procedimiento seleccionado, puede requerir la preparación de las personas responsables de recolectar los datos, la organización de los participantes, la aplicación presencial o digital de los instrumentos y la supervisión del proceso. Posteriormente, los datos obtenidos deben organizarse y analizarse para identificar características comunes, diferencias y patrones entre los consumidores. Esta información contribuye a caracterizar los segmentos y posteriormente evaluar cuáles pueden constituir el mercado meta de la empresa.

    p Para ampliar la comprensión sobre la recolección de datos y las técnicas utilizadas para obtener información del mercado, se invita a consultar los siguientes recursos audiovisuales. Estos contenidos permiten profundizar en las características de las principales técnicas de recolección y reconocer su utilidad para obtener información que contribuya al conocimiento de los consumidores, la segmentación del mercado y la toma de decisiones.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Técnicas de recolección de datos
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Recolección de datos e información
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    //Separador
    //#t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.2.	Instrumentos para la recolección de información
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        img(src='@/assets/curso/temas/t5/5.png', alt='')
      .col-lg-6
        img(src='@/assets/curso/temas/t5/6.svg', alt='')
        p Una vez seleccionada la técnica de recolección de datos, es necesario definir con qué instrumento se obtendrá y registrará la información. El instrumento es la herramienta que permite recopilar los datos de manera organizada y de acuerdo con el propósito establecido.
        p La elección del instrumento depende de la técnica utilizada y del tipo de información que se requiere obtener. Entre los más utilizados se encuentran:
    
    .row.justify-content-center.mb-5
      .col-lg-10
        ul.lista-ul--color.color-secundario.fa-lista
          li 
            i.fas.fa-user
            | #[b Cuestionario:] conjunto organizado de preguntas utilizado principalmente en encuestas y entrevistas.
          li 
            i.fas.fa-user
            | #[b Guía de entrevista:] orienta las preguntas y temas que se abordarán durante una entrevista.
          li 
            i.fas.fa-user
            | #[b Guía de observación:] establece los aspectos que deben registrarse durante el proceso de observación.
          li 
            i.fas.fa-user
            | #[b Lista de chequeo:] permite verificar el cumplimiento o presencia de determinadas características, condiciones o comportamientos.
          li 
            i.fas.fa-user
            | #[b Escalas de valoración:] permiten medir opiniones, percepciones, preferencias o niveles de aceptación.
    
    p Por tanto, mientras la técnica establece cómo se obtendrá la información, el instrumento determina con qué herramienta se recopilará y registrará. Ambos deben seleccionarse de acuerdo con los objetivos y las características de la información requerida.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Bases de datos
    
    p Después de recolectar la información, es necesario #[b organizarla y almacenarla de manera que pueda ser consultada, actualizada y analizada.] Para ello se utilizan las bases de datos.
    p Una #[b base de datos] es un conjunto organizado de datos relacionados entre sí y almacenados de manera estructurada para facilitar su consulta, actualización y análisis. En el ámbito comercial, permite gestionar información relacionada con clientes, productos, ventas, pedidos, proveedores, contactos y otras variables relevantes para la toma de decisiones.

    p La información se organizaprincipalmente mediante:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.bg-color-15
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3
            img(src='@/assets/curso/temas/t5/7.svg', alt='')
          .col-lg-9
            ul.lista-ul--color.color-secundario.fa-lista
              li 
                i.fas.fa-user
                | #[b Campos:] corresponden a las características o variables que se desean registrar, como nombre, ciudad, producto adquirido o fecha de compra.
              li 
                i.fas.fa-user
                | #[b Registros:] reúnen los datos correspondientes a una persona, producto, transacción u otro elemento almacenado.
              li 
                i.fas.fa-user
                | #[b Tablas:] organizan los registros mediante filas y columnas para facilitar su almacenamiento y consulta.         
      .col-lg-3
        img(src='@/assets/curso/temas/t5/8.svg', alt='')
        p Los datos registrados también pueden presentar diferentes formatos, como #[b texto, números, fechas, valores monetarios o datos lógicos,] dependiendo de la información que se requiera almacenar.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Tipos de bases de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Las bases de datos pueden clasificarse de diferentes maneras según su estructura y finalidad. Para efectos del manejo de información comercial, resulta útil distinguir entre:
        ul.lista-ul--color.color-secundario.fa-lista
          li 
            i.fas.fa-user
            | #[b Bases de datos estáticas:] almacenan información destinada principalmente a la consulta y que presenta pocos cambios a través del tiempo.
          li 
            i.fas.fa-user
            | #[b Bases de datos dinámicas:] permiten incorporar, modificar, actualizar o eliminar información de manera continua.
        p La elección dependerá del propósito de la información y de la frecuencia con la cual sea necesario actualizarla.
      .col-lg-5
        img(src='@/assets/curso/temas/t5/9.svg', alt='')   
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Manejo de una base de datos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t5/10.png', alt='')
      .col-lg-7
        p Una base de datos debe mantenerse organizada y actualizada para que la información almacenada sea útil. Su manejo comprende acciones como registrar nuevos datos, consultar información, realizar búsquedas, actualizar registros, clasificarlos y eliminar aquellos que ya no sean necesarios, teniendo en cuenta las condiciones establecidas para el tratamiento de la información.
        p Para necesidades básicas, la información puede organizarse mediante una hoja de cálculo. Cuando el volumen de datos y las necesidades de consulta son mayores, pueden utilizarse sistemas especializados de gestión de bases de datos.
        p En el contexto comercial, las bases de datos permiten centralizar información de clientes y del mercado, identificar características y comportamientos, realizar seguimiento a las relaciones comerciales y disponer de información organizada para apoyar la toma de decisiones.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Diseño básico de una base de datos
    
    p Antes de crear una base de datos es necesario establecer qué información se requiere y cómo será utilizada. De manera general, su diseño comprende los siguientes pasos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span a
              | #[b Definir el propósito:] establecer para qué se recopilará y utilizará la información.
            li 
              .lista-ol--cuadro__vineta
                span b
              | #[b Determinar los datos necesarios:] identificar las variables que deben registrarse.
            li 
              .lista-ol--cuadro__vineta
                span c
              | #[b Organizar los campos:]  establecer una estructura clara para almacenar cada tipo de dato.
            li 
              .lista-ol--cuadro__vineta
                span d
              | #[b Registrar la información:] incorporar los datos obtenidos mediante los instrumentos de recolección.
            li 
              .lista-ol--cuadro__vineta
                span e
              | #[b Revisar y actualizar:] verificar la calidad de los registros y mantener la información vigente.
            li 
              .lista-ol--cuadro__vineta
                span f
              | #[b Consultar y analizar:] utilizar los datos almacenados para generar información que apoye la toma de decisiones.
            

      .col-lg-5
        img(src='@/assets/curso/temas/t5/11.svg', alt='')
    
    p De esta manera, existe una relación directa entre los contenidos abordados: las técnicas establecen cómo obtener los datos; los instrumentos permiten recopilarlos y registrarlos; y las bases de datos facilitan su organización, almacenamiento y posterior utilización.

        
        
    


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
