<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Recolección de información para la segmentación del mercado
    
    p Para segmentar un mercado no es suficiente establecer las variables geográficas, demográficas, psicográficas o conductuales que se desean analizar. También es necesario disponer de información que permita conocer y caracterizar a los consumidores de acuerdo con dichas variables.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.py-xl-5
        p.mb-0 Esta información puede provenir de fuentes existentes o ser obtenida directamente de los consumidores mediante un proceso de recolección de datos. Su propósito es proporcionar información organizada y pertinente que facilite la identificación de características, necesidades, preferencias y comportamientos presentes en el mercado.
    
    p La recolección de datos constituye, por tanto, un apoyo importante para la segmentación, ya que permite sustentar la conformación de los diferentes grupos de consumidores y reducir la toma de decisiones basada únicamente en supuestos.


    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.1.	Técnicas de recolección de datos
    
    p Las técnicas de recolección de datos corresponden a los procedimientos utilizados para obtener la información necesaria de acuerdo con el propósito de la investigación. Su selección depende del tipo de información requerida, las características de la población que se desea estudiar, los recursos disponibles y la forma como posteriormente serán analizados los datos.

    .row.bgcompl-1.tarjeta.align-items-center.p-4.mb-4
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center
            .col-lg-8(data-aos="fade-right")
              .row.mb-4
                .col-lg-2.d-none.d-lg-block
                  img.px-lg-3(src='@/assets/curso/temas/t5/2.svg', alt='')
                .col-lg-10
                  p.mb-0 Entre las principales técnicas que pueden utilizarse para obtener información del mercado se encuentran:
              ul.lista-ul--color.color-secundario.fa-lista
                li 
                  i.fas.fa-user
                  span.mb-0 #[b Encuesta:] permite recopilar información de un grupo de personas mediante preguntas previamente estructuradas. Puede aplicarse de manera presencial, telefónica o a través de medios digitales.
                li 
                  i.fas.fa-user
                  span.mb-0 #[b Entrevista:] permite obtener información mediante una conversación orientada por preguntas relacionadas con el propósito de la investigación. Puede utilizarse cuando se requiere profundizar en opiniones, necesidades, experiencias o percepciones.
                li 
                  i.fas.fa-user
                  span.mb-0 #[b Observación:] consiste en registrar de manera organizada comportamientos, acciones o situaciones relacionadas con los consumidores y su interacción con productos, servicios o espacios comerciales.
                li 
                  i.fas.fa-user
                  span.mb-0 #[b Grupos focales:] permiten recopilar información mediante una conversación guiada con un grupo reducido de participantes, con el propósito de conocer opiniones, percepciones, expectativas o actitudes relacionadas con un tema determinado.             
            .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/t5/3.png', alt='')
    
    p La elección de la técnica debe responder a qué información necesita obtener la empresa y para qué será utilizada. Por esta razón, antes de iniciar la recolección es necesario establecer el propósito, determinar la población de interés, seleccionar la técnica apropiada y definir el instrumento mediante el cual se registrará la información.

    img.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t5/4.png', alt='')

    p Una vez definida la técnica, se realiza el trabajo de campo, que comprende la aplicación de los instrumentos y la recopilación de la información. Dependiendo del procedimiento seleccionado, puede requerir la preparación de las personas responsables de recolectar los datos, la organización de los participantes, la aplicación presencial o digital de los instrumentos y la supervisión del proceso. Posteriormente, los datos obtenidos deben organizarse y analizarse para identificar características comunes, diferencias y patrones entre los consumidores. Esta información contribuye a caracterizar los segmentos y posteriormente evaluar cuáles pueden constituir el mercado meta de la empresa.

    p.mb-5 Para ampliar la comprensión sobre la recolección de datos y las técnicas utilizadas para obtener información del mercado, se invita a consultar los siguientes recursos audiovisuales. Estos contenidos permiten profundizar en las características de las principales técnicas de recolección y reconocer su utilidad para obtener información que contribuya al conocimiento de los consumidores, la segmentación del mercado y la toma de decisiones.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Técnicas de recolección de datos
    
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/D_ltPN5Akvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Recolección de la información

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Recolección de datos e información
    
    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/IXkSw8ASkWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Recolección de la información - parte II
    

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.2.	Instrumentos para la recolección de información
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/5.png', alt='')
      .col-lg-6(data-aos="fade-left")
        img.w-80x.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t5/6.svg', alt='')
        p Una vez seleccionada la técnica de recolección de datos, es necesario definir con qué instrumento se obtendrá y registrará la información. El instrumento es la herramienta que permite recopilar los datos de manera organizada y de acuerdo con el propósito establecido.
        p.mb-0 La elección del instrumento depende de la técnica utilizada y del tipo de información que se requiere obtener. Entre los más utilizados se encuentran:
    
    .row.justify-content-center.mb-3(data-aos="fade")
      .col-lg-10
        ul.lista-ul--color.color-secundario.fa-lista
          li 
            i.fas.fa-user
            span.mb-0 #[b Cuestionario:] conjunto organizado de preguntas utilizado principalmente en encuestas y entrevistas.
          li 
            i.fas.fa-user
            span.mb-0 #[b Guía de entrevista:] orienta las preguntas y temas que se abordarán durante una entrevista.
          li 
            i.fas.fa-user
            span.mb-0 #[b Guía de observación:] establece los aspectos que deben registrarse durante el proceso de observación.
          li 
            i.fas.fa-user
            span.mb-0 #[b Lista de chequeo:] permite verificar el cumplimiento o presencia de determinadas características, condiciones o comportamientos.
          li 
            i.fas.fa-user
            span.mb-0 #[b Escalas de valoración:] permiten medir opiniones, percepciones, preferencias o niveles de aceptación.
    
    p.mb-5 Por tanto, mientras la técnica establece cómo se obtendrá la información, el instrumento determina con qué herramienta se recopilará y registrará. Ambos deben seleccionarse de acuerdo con los objetivos y las características de la información requerida.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Bases de datos
    
    p Después de recolectar la información, es necesario #[b organizarla y almacenarla de manera que pueda ser consultada, actualizada y analizada.] Para ello se utilizan las bases de datos.
    p Una #[b base de datos] es un conjunto organizado de datos relacionados entre sí y almacenados de manera estructurada para facilitar su consulta, actualización y análisis. En el ámbito comercial, permite gestionar información relacionada con clientes, productos, ventas, pedidos, proveedores, contactos y otras variables relevantes para la toma de decisiones.

    p La información se organizaprincipalmente mediante:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9(data-aos="fade-right")
        .bg-color-15.p-4.mb-4.mb-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-5.d-none.d-lg-block
              img.px-lg-5(src='@/assets/curso/temas/t5/7.svg', alt='')
            .col-lg-7
              ul.lista-ul--color.color-secundario.fa-lista.mb-0
                li 
                  i.fas.fa-user
                  span.mb-0 #[b Campos:] corresponden a las características o variables que se desean registrar, como nombre, ciudad, producto adquirido o fecha de compra.
                li 
                  i.fas.fa-user
                  span.mb-0 #[b Registros:] reúnen los datos correspondientes a una persona, producto, transacción u otro elemento almacenado.
                li 
                  i.fas.fa-user
                  span.mb-0 #[b Tablas:] organizan los registros mediante filas y columnas para facilitar su almacenamiento y consulta.         
      .col-lg-3(data-aos="fade-left")
        img.w-80x.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t5/8.svg', alt='')
        p Los datos registrados también pueden presentar diferentes formatos, como #[b texto, números, fechas, valores monetarios o datos lógicos,] dependiendo de la información que se requiera almacenar.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Tipos de bases de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Las bases de datos pueden clasificarse de diferentes maneras según su estructura y finalidad. Para efectos del manejo de información comercial, resulta útil distinguir entre:
        ul.lista-ul--color.color-secundario.fa-lista.ps-xl-5
          li 
            i.fas.fa-user
            span.mb-0 #[b Bases de datos estáticas:] almacenan información destinada principalmente a la consulta y que presenta pocos cambios a través del tiempo.
          li 
            i.fas.fa-user
            span.mb-0 #[b Bases de datos dinámicas:] permiten incorporar, modificar, actualizar o eliminar información de manera continua.
        p La elección dependerá del propósito de la información y de la frecuencia con la cual sea necesario actualizarla.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/9.svg', alt='')   
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Manejo de una base de datos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/10.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Una base de datos debe mantenerse organizada y actualizada para que la información almacenada sea útil. Su manejo comprende acciones como registrar nuevos datos, consultar información, realizar búsquedas, actualizar registros, clasificarlos y eliminar aquellos que ya no sean necesarios, teniendo en cuenta las condiciones establecidas para el tratamiento de la información.
        p Para necesidades básicas, la información puede organizarse mediante una hoja de cálculo. Cuando el volumen de datos y las necesidades de consulta son mayores, pueden utilizarse sistemas especializados de gestión de bases de datos.
        p.mb-0 En el contexto comercial, las bases de datos permiten centralizar información de clientes y del mercado, identificar características y comportamientos, realizar seguimiento a las relaciones comerciales y disponer de información organizada para apoyar la toma de decisiones.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Diseño básico de una base de datos
    
    p Antes de crear una base de datos es necesario establecer qué información se requiere y cómo será utilizada. De manera general, su diseño comprende los siguientes pasos:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
         ol.lista-ol--cuadro.lista-ol--separador.fa-lista
            li 
              .lista-ol--cuadro__vineta
                span a
              span.mb-0 #[b Definir el propósito:] establecer para qué se recopilará y utilizará la información.
            li 
              .lista-ol--cuadro__vineta
                span b
              span.mb-0 #[b Determinar los datos necesarios:] identificar las variables que deben registrarse.
            li 
              .lista-ol--cuadro__vineta
                span c
              span.mb-0 #[b Organizar los campos:]  establecer una estructura clara para almacenar cada tipo de dato.
            li 
              .lista-ol--cuadro__vineta
                span d
              span.mb-0 #[b Registrar la información:] incorporar los datos obtenidos mediante los instrumentos de recolección.
            li 
              .lista-ol--cuadro__vineta
                span e
              span.mb-0 #[b Revisar y actualizar:] verificar la calidad de los registros y mantener la información vigente.
            li 
              .lista-ol--cuadro__vineta
                span f
              span.mb-0 #[b Consultar y analizar:] utilizar los datos almacenados para generar información que apoye la toma de decisiones.          
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/11.svg', alt='')
    
    p De esta manera, existe una relación directa entre los contenidos abordados: las técnicas establecen cómo obtener los datos; los instrumentos permiten recopilarlos y registrarlos; y las bases de datos facilitan su organización, almacenamiento y posterior utilización.

        
        
    


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
