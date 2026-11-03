<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad
      <ActividadController :cuestionario="cuestionario"/>

  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Desafío de identificación y análisis de nichos de mercado',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar los conocimientos sobre el reconocimiento de nichos de mercado y las estrategias de segmentación comercial.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué caracteriza principalmente a un nicho de mercado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Está conformado por todos los consumidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Agrupa consumidores con necesidades específicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se limita a empresas de gran tamaño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se define únicamente por el precio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el propósito de identificar un nicho de mercado?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reconocer oportunidades para atender necesidades específicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar los costos de comercialización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la investigación de mercados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vender el mismo producto a todos los consumidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué información permite conocer mejor las preferencias de los consumidores?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los registros de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los estados financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los datos obtenidos mediante investigación de mercado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los inventarios de maquinaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es un ejemplo de segmentación geográfica?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clasificar clientes por edad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Agrupar consumidores por estilo de vida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Clasificar compradores por frecuencia de compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Agrupar consumidores según ciudad o región.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es un ejemplo de segmentación demográfica?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clasificar consumidores según edad e ingresos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Agrupar clientes según beneficios buscados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Clasificar compradores según frecuencia de compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Agrupar clientes según estilo de vida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué variable corresponde a la segmentación psicográfica?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ubicación geográfica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Edad del consumidor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estilo de vida.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Frecuencia de compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué variable corresponde a la segmentación conductual?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Región de residencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Frecuencia de compra.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Nivel de ingresos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tamaño de la población.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué permite determinar el análisis de las necesidades del cliente?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El número de trabajadores de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los costos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La capacidad instalada de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las características que debe tener la oferta.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué característica indica que un segmento puede ser atendido por la empresa?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Accesibilidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Antigüedad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Homogeneidad empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Capacidad productiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es una fuente directa para obtener información de los consumidores?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El balance general.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La encuesta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El registro contable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La factura de compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué debe hacerse con la información obtenida en una investigación de mercado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminarla después de recolectarla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Utilizarla únicamente para publicidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organizarla y analizarla para apoyar decisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Compartirla exclusivamente con proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué permite identificar el análisis de la competencia?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente los costos internos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El número de empleados necesarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo los precios de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ofertas existentes y oportunidades de diferenciación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué es el mercado objetivo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El grupo de consumidores al que se dirige la oferta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El conjunto de competidores de una empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El total de proveedores disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El área donde se almacenan los productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué estrategia utiliza una empresa cuando adapta su oferta a varios segmentos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mercadeo concentrado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mercadeo diferenciado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mercadeo interno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mercadeo indiferenciado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué acción ayuda a determinar si existe una oportunidad de mercado?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la producción sin analizar la demanda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir automáticamente los precios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Analizar necesidades insatisfechas de los consumidores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar productos de la competencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué información resulta relevante para elaborar el perfil de un cliente?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el nombre del consumidor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente el producto adquirido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exclusivamente su ubicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Características, necesidades y comportamiento de compra.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es una ventaja de segmentar adecuadamente el mercado?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permite orientar las estrategias hacia grupos específicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Garantiza la eliminación de competidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evita realizar investigaciones de mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Permite utilizar una única oferta para todos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué permite una base de datos de clientes actualizada?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la necesidad de segmentar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar y consultar información relevante de los clientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Garantizar automáticamente nuevas ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir las estrategias comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué decisión puede tomar una empresa después de identificar las preferencias de un segmento?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener siempre la misma oferta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Suspender la investigación de mercados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Adaptar su propuesta a las necesidades identificadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar sus canales de distribución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué acción evidencia el uso de información de mercado en la toma de decisiones?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar precios sin analizar al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Producir sin considerar la demanda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Copiar todas las acciones de la competencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar estrategias a partir de necesidades identificadas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los fundamentos de la Identificación de nichos de mercado.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo.',
        },
      ],
      mensaje_final_aprobado: 'Ha superado la actividad y demuestra sólidos conocimientos sobre Identificación de nichos de mercado.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>