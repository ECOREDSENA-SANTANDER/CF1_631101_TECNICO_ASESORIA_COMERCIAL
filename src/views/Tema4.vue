<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Comunicación
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 Una vez que la empresa ha definido su producto, establecido el precio y seleccionado los canales de distribución para llegar al mercado objetivo, debe determinar #[b cómo comunicará su propuesta de valor a los clientes.] La comunicación permite informar, persuadir y mantener relaciones con el mercado, por lo que constituye un elemento fundamental de la estrategia comercial. 
    
    p La comunicación es un proceso mediante el cual se transmite información entre un emisor y un receptor a través de un medio determinado. Para que este proceso sea efectivo intervienen los siguientes elementos:

    .bg-color-3.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 3. 
            span Proceso de la comunicación
        .col-lg-8         
          figure
            img(src='@/assets/curso/temas/t4/2.svg', alt='Proceso de comunicación entre emisor y receptor mediante codificación, mensaje, medio y decodificación, con ruido y retroalimentación.')
    
    .row.justify-content-center.mb-5
      .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/3.png', alt='')
      .col-lg-6(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Emisor")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Persona, empresa u organización que origina la comunicación.
          .row(numero="2" titulo="Codificación")
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

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        LineaTiempoD.color-acento-botones.mb-4
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
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/4.png', alt='')
        
        
    


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
