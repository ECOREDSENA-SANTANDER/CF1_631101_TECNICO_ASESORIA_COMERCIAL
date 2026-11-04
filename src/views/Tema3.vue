<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Segmentación del mercado
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
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
    
    .mb-4(data-aos="fade-down")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/kODlxbwfCSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Segmentación de mercados 
    
    p Al consultar el recurso, tenga presente la siguiente pregunta orientadora:

    .tarjeta.bg-color-1.text-white.text-center.mb-4.p-4(data-aos="fade")
      .row.justify-content-center
        .col-lg-6
          h4.mb-0 ¿Por qué una empresa necesita identificar grupos de consumidores con características similares antes de definir su mercado meta?
    
    p A partir de esta contextualización, es importante comprender que la segmentación del mercado consiste en dividir un mercado amplio y heterogéneo en grupos más pequeños de consumidores que presentan características, necesidades, comportamientos o preferencias similares. Cada uno de estos grupos constituye un segmento de mercado.

    .row.bgcompl-2.align-items-center.p-4.mb-4(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .tarjeta.bg-color-13
            .row.justify-content-center.align-items-center
              .col-lg-6.text-white 
                .p-4
                  h5 Por ejemplo, una empresa que comercializa ropa deportiva puede encontrar dentro del mercado consumidores con características diferentes: 
                  p.mb-0 Jóvenes que practican deporte regularmente, adultos interesados en actividades al aire libre, personas que utilizan este tipo de prendas de manera cotidiana o consumidores que buscan productos especializados para determinadas disciplinas deportivas. Aunque todos pueden adquirir ropa deportiva, sus necesidades, preferencias y comportamientos de compra no necesariamente son iguales.
              .col-lg-6.d-none.d-lg-block
                .p-4
                  img(src='@/assets/curso/temas/t3/2.png', alt='')
    
    p.mb-5 Por esta razón, la empresa debe identificar las características que permiten diferenciar a sus consumidores y determinar cuáles resultan relevantes para su oferta. Para ello, puede utilizar diferentes bases de segmentación, principalmente geográficas, demográficas, psicográficas y conductuales.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Bases para segmentar mercados de consumo
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/3.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/4.svg', alt='')
          .col-lg-10
            p.mb-0 Los consumidores que integran un mercado no tienen las mismas características, necesidades, preferencias ni comportamientos de compra. Estas diferencias permiten a las empresas dividir el mercado en grupos con características comunes, con el propósito de conocer mejor a sus posibles clientes y orientar de manera más precisa sus decisiones comerciales.
        p Para realizar esta división se utilizan diferentes bases o variables de segmentación. Las principales son geográficas, demográficas, psicográficas y conductuales. Cada una permite analizar al consumidor desde una perspectiva diferente.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Segmentación geográfica
    
    .bg-color-8.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-7
          .p-4
            img.w-80x.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t3/5.svg', alt='')
            p La segmentación geográfica divide el mercado teniendo en cuenta el lugar donde se encuentran los consumidores. Puede considerar variables como país, región, departamento, municipio, zona urbana o rural, clima, densidad poblacional y otras características del territorio.
            p.mb-0 Este tipo de segmentación parte del reconocimiento de que las necesidades, preferencias y formas de consumo pueden variar según la ubicación. Por ello, permite delimitar las áreas geográficas en las cuales la empresa desea concentrar sus acciones de comercialización, distribución y comunicación.
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/6.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Segmentación demográfica
    
    .row.justify-content-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/7.svg', alt='')
      .col-lg-7(data-aos="fade-left")
        .bg-color-6.p-4.p-xl-5.h-100
          p La segmentación demográfica agrupa a los consumidores de acuerdo con características propias de la población. Entre las variables que pueden considerarse se encuentran edad, ingresos, ocupación, nivel educativo, tamaño del hogar y etapa del ciclo de vida familiar, entre otras que resulten pertinentes para el producto o servicio.
          p.mb-0 Estas variables permiten describir con mayor precisión quiénes conforman un determinado segmento y facilitan la identificación de diferencias relacionadas con las necesidades, capacidad adquisitiva y decisiones de compra.
        
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Segmentación psicográfica
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/8.svg', alt='')
          .col-lg-10
            p.mb-0 La segmentación psicográfica permite agrupar a los consumidores considerando aspectos relacionados con su estilo de vida, intereses, personalidad, actividades, opiniones, preferencias y valores.
        p.mb-0 Su propósito es profundizar en características que no siempre pueden identificarse mediante variables demográficas o geográficas. De esta manera, permite comprender cómo las formas de vida, intereses y preferencias pueden influir en la elección, compra y consumo de determinados productos o servicios.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/9.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Segmentación conductual
    
    .row.justify-content-center.mb-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/10.png', alt='')
      .col-lg-9
        .bg-color-7.p-4.p-xl-5(data-aos="fade-left")
          p La segmentación conductual clasifica a los consumidores teniendo en cuenta la manera como se relacionan con un producto, servicio o marca. Para ello pueden analizarse aspectos como frecuencia de compra, cantidad consumida, ocasiones de uso, beneficios buscados, nivel de fidelidad y respuesta frente a las estrategias comerciales.
          p.mb-0 Esta segmentación permite comprender las diferencias existentes entre los consumidores a partir de sus comportamientos y decisiones de compra, proporcionando información para definir acciones comerciales acordes con dichas características.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Combinación de las variables de segmentación
    
    .bg-color-14.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/12.svg', alt='')
            .col-lg-10
              p.mb-0 Las bases de segmentación no tienen que utilizarse de manera independiente. Una empresa puede combinar variables geográficas, demográficas, psicográficas y conductuales para obtener una caracterización más precisa de los consumidores.
          p.mb-0 La selección y combinación de estas variables dependerá de las características del producto o servicio, la información disponible, los objetivos comerciales y los recursos de la organización. Cuanto más pertinente sea la información utilizada, mayor será la posibilidad de identificar segmentos claramente definidos.
        .col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/11.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Requisitos para una segmentación eficaz

    p No todo grupo de consumidores identificado constituye necesariamente un segmento útil para la empresa. Para que la segmentación contribuya a la toma de decisiones, los segmentos deben cumplir determinadas condiciones:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/13.png', alt='')
      .col-lg-6(data-aos="fade-left")
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
    
    p.mb-5 El cumplimiento de estos requisitos permite determinar si los segmentos identificados pueden ser atendidos de manera efectiva y si proporcionan información suficiente para orientar las decisiones de #[em marketing.]

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Pasos para segmentar un mercado
    
    p La segmentación debe desarrollarse de manera organizada, partiendo de un mercado amplio hasta llegar a grupos de consumidores claramente definidos. Para ello, pueden seguirse los siguientes pasos:

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-10
        PasosA.color-acento-contenido(tipo="l")
          .row.justify-content-between
            .col-lg-9
              h4 Definir el mercado que se desea analizar.
              p.mb-0 Se determina el conjunto general de consumidores que podrían necesitar, utilizar o adquirir el producto o servicio.
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/14.svg', alt='')
          .row.justify-content-between
            .col-lg-2.d-none.d-lg-block.mb-4.mb-md-0
              img(src='@/assets/curso/temas/t3/15.svg', alt='')
            .col-lg-10
              h4 Seleccionar las variables de segmentación.
              p.mb-0 Se establecen las características geográficas, demográficas, psicográficas o conductuales que resulten pertinentes para diferenciar a los consumidores.
          .row.justify-content-between
            .col-lg-10
              h4 Identificar grupos con características similares.
              p.mb-0 A partir de la información recopilada, se agrupan los consumidores que comparten determinadas características, necesidades o comportamientos.
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/16.svg', alt='')
          .row.justify-content-between
            .col-lg-11
              h4 Caracterizar los segmentos.
              p.mb-0 Se describen las principales características de cada grupo, de manera que sea posible establecer con claridad quiénes lo conforman y qué los diferencia de los demás.
          .row.justify-content-between
            .col-lg-10
              h4 Evaluar los segmentos.
              p.mb-0 Se analiza cada segmento considerando aspectos como tamaño, accesibilidad, necesidades, capacidad de compra, posibilidades de crecimiento y correspondencia con los recursos disponibles.
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/17.svg', alt='')
          .row.justify-content-between
            .col-lg-2.d-none.d-lg-block.mb-4.mb-md-0
              img(src='@/assets/curso/temas/t3/18.svg', alt='')
            .col-lg-10
              h4 Seleccionar el mercado meta.
              p.mb-0 Se determina cuál o cuáles segmentos serán atendidos prioritariamente por la empresa y hacia cuáles se orientarán sus acciones de marketing.
        
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Del segmento al mercado meta
    
    .row.bgcompl-1.align-items-center.p-4.mb-4
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center.mb-3
            .col-lg-8(data-aos="fade-right")
              .row.justify-content-center.align-items-center.mb-3
                .col-lg-2.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t3/19.svg', alt='')
                .col-lg-10
                  p.mb-0 La segmentación del mercado y la selección del mercado meta corresponden a momentos diferentes del proceso. La segmentación permite identificar y caracterizar los distintos grupos de consumidores existentes en un mercado. Posteriormente, estos grupos son evaluados para determinar cuáles pueden ser atendidos de acuerdo con los objetivos y capacidades de la empresa.
              p El segmento o los segmentos seleccionados constituyen el mercado meta, entendido como el grupo de consumidores hacia el cual la organización decide orientar principalmente su oferta y sus acciones de #[em marketing.]
              p Para ampliar los conocimientos desarrollados en este componente formativo, se invita a escuchar el pódcast, este recurso permitirá comprender cómo utilizar la información de los consumidores para caracterizar clientes potenciales, reconocer sus necesidades e identificar oportunidades de mercado.
            .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/t3/20.png', alt='')
    
    .bg-color-1.mb-5(data-aos="fade-down")
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
    
    SlyderF.mb-4(columnas="col-md-6 col-xl-4" data-aos="fade")
      .tarjeta.bg-color-2.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t3/22.svg', alt='')
        h4.text-center #[em Marketing] indiferenciado
        p.text-center  Se dirige al mercado mediante una oferta general, centrada principalmente en las necesidades comunes de los consumidores.
      .tarjeta.bg-color-2.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t3/23.svg', alt='')
        h4.text-center #[em Marketing] diferenciado
        p.text-center Se seleccionan varios segmentos y se desarrollan ofertas o estrategias específicas para cada uno.
      .tarjeta.bg-color-2.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t3/24.svg', alt='')
        h4.text-center #[em Marketing] concentrado
        p.text-center  Los recursos y esfuerzos se enfocan en uno o pocos segmentos claramente definidos.
      .tarjeta.bg-color-2.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t3/25.svg', alt='')
        h4.text-center #[em Micromarketing]
        p.text-center La oferta se adapta a grupos muy específicos, mercados locales o consumidores individuales.
    
    p La elección de la estrategia dependerá de los recursos disponibles, las características del producto o servicio, las condiciones del mercado, los objetivos comerciales y el nivel de diferenciación requerido.
    p Por tanto, segmentar permite identificar y organizar los diferentes grupos de consumidores; evaluar permite determinar cuáles pueden ser atendidos; seleccionar permite establecer el mercado meta; y definir la estrategia de cobertura determina la manera como la empresa se dirigirá a ese mercado.
    


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
