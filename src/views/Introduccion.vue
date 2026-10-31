<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2
            img(src='@/assets/curso/temas/intro/1.svg', alt='')
          .col-lg-10
            p El mercado actual se caracteriza por consumidores con necesidades, preferencias y comportamientos cada vez más diversos, lo que exige a las organizaciones comprender a quiénes dirigen su oferta y cómo pueden generar valor para ellos. 
        p En este contexto, el mercadeo constituye un elemento fundamental para analizar el entorno, comprender al cliente y orientar decisiones relacionadas con productos y servicios, precios, distribución y comunicación, como base para establecer estrategias comerciales pertinentes.
        p Este componente formativo aborda los fundamentos del mercadeo y del mercado, así como los criterios y procedimientos necesarios para segmentarlo e identificar nichos con potencial comercial. Asimismo, integra técnicas e instrumentos para la recolección de información y elementos asociados con la organización de bases de datos, con el propósito de facilitar la caracterización de clientes potenciales y sustentar la toma de decisiones comerciales de acuerdo con las particularidades del segmento de mercado.
      .col-lg-5
        img(src='@/assets/curso/temas/intro/2.png', alt='')
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
