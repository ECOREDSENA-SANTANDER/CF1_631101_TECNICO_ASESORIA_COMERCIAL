<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Canales de distribución
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los productos y servicios necesitan estar disponibles para los clientes en el lugar, momento y condiciones adecuadas. Para lograrlo, las empresas establecen #[b canales de distribución,] es decir, las rutas que permiten conectar la oferta de una organización con sus compradores o usuarios finales.
          br
          br
          | Un canal de distribución puede ser #[b directo,] cuando la empresa vende al cliente sin intermediarios, o indirecto, cuando participan uno o varios intermediarios, como distribuidores, mayoristas, agentes o minoristas. Estos intermediarios facilitan que los productos lleguen a diferentes mercados y puedan adquirirse en las cantidades y condiciones requeridas por los clientes.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.bg-color-1
        p.text-white Por ejemplo, un fabricante de productos de aseo puede vender directamente desde su tienda virtual o utilizar distribuidores, supermercados y tiendas de barrio para llegar a un mayor número de consumidores. En ambos casos, el propósito es facilitar el acceso del cliente al producto.
      .col-lg-6.bg-color-10
        p En términos comerciales, la distribución no se limita al transporte. También comprende decisiones relacionadas con los puntos de venta, los intermediarios, la cobertura del mercado, el almacenamiento, la disponibilidad de inventario y los medios físicos o digitales utilizados para acercar la oferta al cliente.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p La distribución busca que el producto o servicio esté disponible para el cliente adecuado, en el lugar y momento requeridos y mediante un canal acorde con sus hábitos de compra.
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span Tipos básicos de canales de distribución
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Tipo de canal
                th Recorrido
                th Ejemplo
            tbody
              tr
                td Directo
                td Productor - consumidor.
                td Emprendimiento que vende directamente mediante su tienda física o virtual.
              tr
                td Indirecto corto
                td Productor - minorista - consumidor.
                td Fabricante que comercializa sus productos mediante supermercados.
              tr
                td Indirecto largo
                td Productor - mayorista - minorista - consumidor.
                td Fabricante de alimentos que utiliza distribuidores para abastecer tiendas de barrio.
      .col-lg-5
        img(src='@/assets/curso/temas/t2/2.png', alt='')
    
    p Para complementar el estudio de los #[b canales de distribución], se invita a consultar el siguiente video, en el cual se explica de manera clara su funcionamiento, importancia y participación dentro del proceso de comercialización. Este recurso permitirá fortalecer la comprensión sobre cómo los productos llegan desde el productor hasta el consumidor final.

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p Para cumplir la labor de distribución, la empresa dispone de:

    .row
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 Canal de distribución
          p.text-center 
            b Define cómo llegará el producto o servicio al cliente. 
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 Gestión de canal
          p.text-center 
            b Coordina las relaciones y actividades entre quienes participan en el canal.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 Distribución física
          p.text-center 
            b Comprende el almacenamiento, transporte y entrega de los productos.
    
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1.	Funciones de los intermediarios en los canales de distribución
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t2/3.png', alt='')
      .col-lg-7
        p Los intermediarios cumplen un papel fundamental en los canales de distribución, ya que facilitan el recorrido de los productos desde el productor hasta el consumidor final. Su participación permite reducir distancias entre quienes producen y quienes compran, facilitar las operaciones comerciales y desarrollar actividades como almacenamiento, transporte, promoción, negociación, venta y entrega.
        p Dependiendo de su función y de la relación que establezcan con productores y clientes, pueden identificarse diferentes tipos de intermediarios:
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Intermediario ")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Persona o empresa que participa en el proceso de distribución y facilita que un producto llegue desde el productor hasta el cliente. Puede intervenir en actividades comerciales, logísticas o de apoyo.
          .row(numero="2" titulo="Agente comercial")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Representa a una empresa o productor en determinadas actividades comerciales, como la promoción, negociación o venta de productos o servicios. Su función principal es facilitar las operaciones entre las partes.
          .row(numero="3" titulo="Mayorista")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Adquiere productos en grandes cantidades para venderlos principalmente a minoristas, distribuidores u otras organizaciones. Contribuye al almacenamiento, fraccionamiento de grandes volúmenes y abastecimiento del mercado.
          .row(numero="4" titulo="Minorista")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Comercializa productos directamente con el consumidor final, generalmente en cantidades menores y mediante establecimientos físicos o canales digitales.
          .row(numero="5" titulo="Distribuidor ")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Comercializa productos de una o varias empresas y puede asumir funciones relacionadas con almacenamiento, transporte, gestión de inventarios, venta y entrega en una zona o mercado determinado.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Flujos de los canales de distribución en los mercados
    
    p Como se representa en la tabla siguiente, un canal de distribución #[b no implica únicamente el desplazamiento físico del producto.] Entre productores, intermediarios y clientes se desarrollan diferentes flujos que permiten realizar el intercambio comercial y coordinar las actividades necesarias para satisfacer la demanda.

    p En los canales de distribución circulan productos, recursos e información entre los diferentes participantes. Estos flujos permiten coordinar las actividades comerciales y logísticas necesarias para llevar la oferta hasta el mercado.

    img.mb-4(src='@/assets/curso/temas/t2/4.png', alt='')

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 4.
      span Principales flujos de los canales de distribución
    .tabla-a.color-acento-contenido
      table
        thead
          tr
            th Tipo de flujo
            th ¿En qué consiste?
            th Sentido habitual
            th Ejemplo
        tbody
          tr
            td Flujo físico
            td Comprende el traslado, almacenamiento, manipulación y entrega de los productos.
            td Productor - intermediarios - cliente.
            td Un fabricante despacha sus productos a un distribuidor, quien los entrega a los puntos de venta.
          tr
            td Flujo de propiedad
            td Corresponde a la transferencia de la propiedad o titularidad del producto entre los participantes del canal.
            td Productor - intermediarios - comprador.
            td Un mayorista compra mercancía al fabricante y posteriormente la vende a un minorista.
          tr
            td Flujo de pagos
            td Comprende las transacciones económicas realizadas como contraprestación por los productos adquiridos.
            td Cliente - intermediarios - productor.
            td El consumidor paga al minorista y este realiza los pagos correspondientes a sus proveedores.
          tr
            td Flujo de información
            td Incluye el intercambio de datos sobre pedidos, inventarios, precios, demanda, disponibilidad y comportamiento del mercado.
            td Bidireccional.
            td El minorista informa al distribuidor qué productos tienen mayor demanda para realizar un nuevo pedido.
          tr
            td Flujo de promoción
            td Comprende la comunicación utilizada para informar, persuadir y apoyar la comercialización de los productos.
            td Principalmente hacia el mercado.
            td El fabricante desarrolla una campaña promocional que también es difundida por distribuidores y minoristas.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Actores de apoyo en el canal 
    
    .row.justify-content-center.align-items-center.mb-5.bg-color-9
      .col-lg-7
        img(src='@/assets/curso/temas/t2/5.png', alt='')
      .col-lg-5
        img(src='@/assets/curso/temas/t2/6.svg', alt='')
        p Además de los participantes principales, en los canales de distribución intervienen actores especializados que apoyan el funcionamiento del sistema sin necesariamente adquirir la propiedad del producto. Entre ellos pueden encontrarse empresas de transporte y logística, operadores de almacenamiento, entidades financieras, aseguradoras, agencias de publicidad, plataformas tecnológicas y proveedores de servicios de información.
        p La participación coordinada de estos actores contribuye a que el producto esté disponible en el lugar, momento y condiciones requeridas por el cliente, convirtiendo al canal de distribución en una red de relaciones comerciales, logísticas y de información, y no solamente en una ruta para trasladar productos.
    
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2.	Tipos y estrategias de los canales de distribución
    
    p La elección del canal de distribución determina cómo llegará el producto o servicio al consumidor final y cuántos niveles de intermediación participarán en ese recorrido. Según su longitud, los canales pueden clasificarse en directos e indirectos.
    
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 5.
      span Tipos de canales de distribución
    .tabla-a.color-acento-contenido.mb-4
      table
        thead
          tr
            th Tipo de canal
            th Características
            th Ejemplo de recorrido
        tbody
          tr
            td Directo
            td El productor comercializa directamente con el consumidor final.
            td Productor - consumidor.
          tr
            td Indirecto corto
            td Incorpora un nivel de intermediación, generalmente un minorista.
            td Productor - minorista - consumidor.
          tr
            td Indirecto largo
            td Incorpora dos o más niveles de intermediación para ampliar la cobertura del mercado.
            td Productor - mayorista - minorista - consumidor.

    p La selección entre estos canales depende de aspectos como las características del producto, la ubicación de los clientes, la cobertura esperada, los recursos de la empresa y el grado de control que se desea mantener sobre la comercialización.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Estructura de los canales de distribución
    
    p La estructura del canal permite identificar los niveles que conforman el recorrido comercial del producto. Puede comenzar con el productor y continuar mediante diferentes niveles de intermediación hasta llegar al consumidor final.

    p Como se representa en la figura 2, no todos los productos siguen el mismo recorrido. Algunos llegan directamente al consumidor, mientras otros requieren uno o varios niveles de intermediación. Por tanto, la longitud del canal está determinada por la cantidad de niveles intermediarios existentes entre el productor y el consumidor final.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11
        .titulo-sexto.color-acento-contenido.mb-3.bg-color-11
          h5 Figura 2. 
          span Estructura de los canales de distribución  
        figure
          img(src='@/assets/curso/temas/t2/7.svg', alt='Flujo de distribución desde las materias primas y proveedores hasta el cliente final, mediante fabricantes, distribuidores y comerciantes.')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Estrategias de distribución
    
    img(src='@/assets/curso/temas/t2/8.png', alt='')
    
    p Además de establecer la longitud del canal, la empresa debe decidir qué tan amplia será la presencia del producto en el mercado. Esta decisión se conoce como intensidad de distribución y determina la cantidad y selección de intermediarios o puntos de venta utilizados.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 6.
      span Estrategias de distribución y ejemplos
    .tabla-a.color-acento-contenido
      table
        thead
          tr
            th Estrategia
            th ¿En qué consiste?
            th ¿Cuándo resulta apropiada?
            th Ejemplo
        tbody
          tr
            td Distribución intensiva
            td Busca disponer el producto en el mayor número posible de puntos de venta.
            td Productos de compra frecuente y alta rotación.
            td Bebidas, alimentos empacados o productos de aseo.
          tr
            td Distribución selectiva
            td Utiliza un número limitado de intermediarios seleccionados según criterios comerciales.
            td Productos cuya compra implica comparar precio, calidad, características o beneficios.
            td Electrodomésticos, muebles o equipos tecnológicos.
          tr
            td Distribución exclusiva
            td Concede la comercialización a uno o pocos intermediarios dentro de un territorio o mercado determinado.
            td Productos que requieren mayor control de comercialización, servicio o posicionamiento.
            td Vehículos de determinadas marcas o productos de lujo.

    p En términos generales, los productos de compra frecuente suelen requerir una mayor cobertura, mientras que aquellos que demandan comparación, asesoría, diferenciación o especialización pueden comercializarse mediante una distribución más selectiva o exclusiva.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Evaluación de la cobertura y desempeño del canal
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        p Una vez definida la estrategia de distribución, es importante evaluar si el producto alcanza adecuadamente el mercado objetivo y si los canales seleccionados generan los resultados esperados. Para ello pueden utilizarse los siguientes indicadores:
        img(src='@/assets/curso/temas/t2/9.png', alt='')
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 7.
          span Indicadores y su evaluación
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Indicador
                th ¿Qué permite evaluar?
            tbody
              tr
                td Distribución numérica
                td Porcentaje de puntos de venta en los que está disponible el producto.
              tr
                td Distribución ponderada
                td Presencia del producto considerando la importancia comercial de los puntos de venta.
              tr
                td Cobertura geográfica
                td Alcance territorial de la distribución: local, regional o nacional.
              tr
                td Rotación
                td Rapidez con la que el producto se vende y requiere reposición.
              tr
                td Indicador de prestigio
                td Presencia de la marca en establecimientos reconocidos o estratégicos.
              tr
                td Indicador maestro
                td Integra diferentes variables para obtener una valoración general del desempeño del canal.
    
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3.	Comercialización mayorista y minorista
    
    .row.justify-content-center.align-items-center.mb-5.bg-color-12
      .col-lg-5
        img(src='@/assets/curso/temas/t2/10.svg', alt='')
      .col-lg-5
        p De acuerdo con el nivel en el que se realiza la comercialización, las operaciones pueden desarrollarse principalmente mediante ventas #[b mayoristas o minoristas.] La diferencia central se encuentra en el destinatario de la venta: el mayorista comercializa principalmente con organizaciones que posteriormente revenden o utilizan los productos en sus operaciones, mientras que el minorista atiende directamente al consumidor final.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Modalidades de operación mayorista

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        p Los mayoristas pueden diferenciarse según el nivel de especialización y los servicios que proporcionan, por tal razón se describen sus características a continuación:
        img(src='@/assets/curso/temas/t2/11.png', alt='')
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 8.
          span Nivel de especialización de mayoristas
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th Tipo
                th Característica principal
            tbody
              tr
                td Comerciante mayorista
                td Compra productos, adquiere su propiedad y posteriormente los revende.
              tr
                td Mayorista especializado
                td Concentra su actividad en determinadas líneas o categorías de productos.
              tr
                td Mayorista de servicio limitado
                td Desarrolla únicamente algunas funciones asociadas a la comercialización y distribución.
              tr
                td Mayorista de servicio completo
                td Complementa la comercialización con servicios como almacenamiento, transporte, financiación o asesoría.
              tr
                td Corredores y agentes
                td Facilitan operaciones entre compradores y vendedores sin adquirir, generalmente, la propiedad de los productos.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/20.svg', alt='')
      h3.mb-0.mx-3 Modalidades de venta minorista
    
    p La venta minorista o al detalle comprende las actividades mediante las cuales los productos o servicios se comercializan #[b directamente con el consumidor final para su uso personal o doméstico.] Puede realizarse mediante establecimientos físicos o a través de modalidades que no requieren un punto de venta tradicional.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 9.
      span Principales modalidades de venta minorista
    .tabla-a.color-acento-contenido.mb-4
      table
        thead
          tr
            th Modalidad
            th Tipo
            th Características
        tbody
          tr
            td(rowspan="7") #[b Con establecimiento físico]
            td Tienda especializada
            td Concentra su oferta en una categoría o línea determinada.
          tr
            td Tienda departamental
            td Reúne diferentes categorías organizadas por secciones o departamentos.
          tr
            td Tienda de conveniencia
            td Facilita compras rápidas de productos de consumo frecuente.
          tr
            td Tienda de descuento
            td Compite principalmente mediante precios reducidos.
          tr
            td Supermercado
            td Ofrece un amplio surtido, principalmente de alimentos y productos para el hogar.
          tr
            td Tienda de fábrica
            td Comercializa productos del fabricante directamente al consumidor.
          tr
            td Minorista de precio reducido
            td Ofrece productos por debajo de los precios habituales mediante estrategias específicas de abastecimiento.
          tr
            td(rowspan="5") #[b Sin establecimiento físico]
            td Comercio electrónico
            td Comercializa mediante sitios web, aplicaciones, marketplaces u otros medios digitales.
          tr
            td Venta directa
            td Realiza la comercialización directamente con el consumidor fuera de un establecimiento minorista convencional.
          tr
            td Venta por catálogo
            td Permite seleccionar y solicitar productos mediante catálogos físicos o digitales.
          tr
            td Venta telefónica
            td Utiliza el contacto telefónico para promover, gestionar o cerrar ventas.
          tr
            td Máquinas expendedoras
            td Permiten adquirir productos mediante sistemas automatizados de autoservicio.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t2/12.png', alt='')
      .col-lg-7
        p El diseño del canal implica tomar dos decisiones diferentes pero complementarias: 
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2
            img(src='@/assets/curso/temas/t2/13.svg', alt='')
          .col-lg-10
            ul.lista-ul--color.color-secundario.fa-lista
              li 
                i.fas.fa-user
                | #[b Primero:] definir su longitud, es decir, cuántos niveles de intermediación tendrá.
              li 
                i.fas.fa-user
                | #[b Segundo:] establecer su intensidad, determinando cuántos intermediarios o puntos de venta participarán. 
        p Estas decisiones permiten configurar una distribución coherente con las características del producto, el mercado objetivo y los objetivos comerciales de la organización.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
