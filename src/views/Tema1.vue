<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Elementos conceptuales de la gestión de proyectos
    .row.mt-5 
      .col-12.col-lg-7
        p Uno de los papeles más importantes del gestor deportivo es establecer proyectos de valor para que las organizaciones cumplan sus objetivos y metas. Estas propuestas pueden ser diversas en materia de complejidad, duración y costos, de acuerdo con las necesidades de la organización; podrán ser desde la creación o mejoramiento de un programa (programa de iniciación deportiva, programa de actividad física para el adulto mayor, etc.), la creación de un evento (torneo deportivo, vacaciones recreativas, organización de una carrera, etc.), hasta poner en marcha el funcionamiento general de una organización deportiva (creación de un club deportivo, mejoramiento de los procesos organizacionales, etc.).
      .col-4.col-lg-5.d-none.d-lg-block.align-self-center
        figure
          img(src="@/assets/curso/temas/tema1/tema-1-1.png", alt="Imagen decorativa")
    .row.mt-4
      .col-4.align-self-center.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/tema1/tema-1-2.svg", alt="Imagen decorativa").margin-0-auto.floating
      .col-12.col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p Por lo general, los proyectos surgen de la siguiente manera:
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              | La alta dirección de la empresa identifica una necesidad o problema a resolver.
            li.mt-2 
              i.fas.fa-angle-right
              | El gestor deportivo, mediante un diagnóstico organizacional, identifica oportunidades de mejora de alguno de los procesos o programas.
            li.mt-2 
              i.fas.fa-angle-right
              | Algún cambio organizacional obliga a implementar modificaciones en su estructura organizacional. 
            li.mt-2 
              i.fas.fa-angle-right
              | La orientación organizacional gira hacia un nuevo enfoque estratégico y/o línea de servicio. 
        p.mt-5 A continuación, se abordarán elementos conceptuales de la gestión de proyectos, como su definición, su clasificación y sus procesos:
    .titulo-segundo.mt-5.color-acento-contenido
      #t_1_1.h2 1.1 Concepto y tipos de proyectos
    figure.mt-0(data-aos="flip-up")
      img(src="@/assets/curso/temas/tema1/tema-1-3.png", alt="Imagen decorativa")
    .row.mt-5
      .col-4.col-lg-2.d-none.d-lg-block.align-self-center
        figure
          img(src="@/assets/curso/temas/tema1/tema-1-4.svg", alt="Imagen decorativa").px-4
      .col-12.col-lg-10
        p Proyecto, según PMI (2008), es un esfuerzo temporal que se lleva a cabo para crear un producto, servicio o resultado único.
        p.mt-3 Por otro lado, el IPMA (1999) define al proyecto como un conjunto de actividades coordinadas, con inicio y fin definidos, llevadas a cabo por individuos u organizaciones para un logro de objetivos específicos, dentro de parámetros de tiempo, costo y desempeño definidos.
        p.mt-3 Para entender el concepto de proyecto, es preciso analizar un ejemplo concreto, como son los juegos olímpicos. Este evento de reconocimiento mundial implica el desarrollo de un megaproyecto perfectamente coordinado y sincronizado para que se ejecute conforme al tiempo establecido y con los recursos dispuestos.
    .row.mt-4(data-aos="slide-up")
      .col-10.offset-1
        .cajon.color-acento-contenido.p-4
          .row
            .col-2.align-self-center.d-none.d-lg-block
              figure
                img(src="@/assets/curso/temas/tema1/tema-1-5.svg", alt="Imagen decorativa").px-2.floating
            .col-12.col-lg-10.align-self-center
              p Es el caso de los Juegos Olímpicos de Tokio, donde participaron más de 11.000 atletas, se llevaron a cabo 339 eventos, representados en 33 deportes conformados por 50 disciplinas. De este evento, con una mirada a nivel mundial, se espera que todo salga a la perfección, que cada prueba deportiva se ejecute según la hora programada, sin importar condiciones climáticas u otro tipo de factor externo. El éxito de un proyecto de tal envergadura no es casualidad, no es improvisado, es planificado en cada una de sus partes, gestionando cada detalle, para que todo se lleve a cabo conforme al plan. 
    .row.mt-5
      .col-12.col-lg-10
        p Otro ejemplo concreto sería un proyecto encaminado a la conformación de un club deportivo. Los clubes, aunque son organismos sin ánimo de lucro, requieren establecer mecanismos para ser autosostenibles en el tiempo. Por lo tanto, la conformación de un club no se podrá limitar a presentar los documentos requeridos por el organismo deportivo para su aval y reconocimiento deportivo, sino que, además, deberá establecer estrategia, objetivos, alcances, plan de trabajo, entre otros aspectos, que le permitan enfocar sus esfuerzos en un club sostenible y sustentable en el tiempo.
      .col-4.col-lg-2.d-none.d-lg-block.align-self-center
        figure
          img(src="@/assets/curso/temas/tema1/tema-1-6.svg", alt="Imagen decorativa").px-2
    p.mt-4 Existen diferentes tipos de proyectos, los cuales presentan rasgos y características propias que se describen a continuación: 
    .row.mt-5
       .col-12
        .titulo-quinto.color-acento-contenido.mt-5
          h4 Tipos de proyectos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop(data-aos="slide-up")
        ImagenInfograficaB.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/tema-1-7.svg', alt='')

          div(x="4.3%" y="57.1%" tooltip="Rasgos y características" numero="")
            
            h3.text-center.position-absolute(style="top: -33px; left: 40%;") Rasgos y características
            .row
              .col-6.border-naranja.rounded-20.p-4.w-47.ml-3
                p Productos tangibles: el valor generado o resultado final será un artefacto físico.
                p.mt-4 #[strong Ejemplo:] un edificio.
              .col-6.border-naranja.rounded-20.p-4.w-47.ml-3
                p Productos intangibles: el valor generado viene dado por la propiedad intelectual.
                p.mt-4 #[strong Ejemplo:] un #[i software].

          div(x="31%" y="7.9%" tooltip="Rasgos y características" numero="")
            h3.text-center.position-absolute(style="top: -33px; left: 40%;") Rasgos y características
            .row
              .col-6.border-naranja.rounded-20.p-4.w-47.ml-3
                p Trabajo manual: requiere destreza manual, trabajo repetitivo, adquirido a través de entrenamiento.
              .col-6.border-naranja.rounded-20.p-4.w-47.ml-3
                p Trabajo intelectual: requiere esfuerzo creativo.
          
          div(x="68.5%" y="8%" tooltip="Rasgos y características" numero="")
            h3.text-center.position-absolute(style="top: -33px; left: 40%;") Rasgos y características
            .row
              .col-6.border-naranja.rounded-20.p-4.w-47.ml-3
                .h4 Proyectos de inversión privada (productivos):
                p.mt-1 Que buscan generar rentabilidad económica para sus promotores.
              .col-6.border-naranja.rounded-20.p-4.w-47.ml-3
                .h4 Proyectos públicos o sociales:
                p.mt-1 Buscan impactar la calidad de vida de la población, promovidos por el Estado, ONG y políticas sociales de las empresas.
          
          div(x="95%" y="57.2%" tooltip="Rasgos y características" numero="")
            h3.text-center.position-absolute(style="top: -33px; left: 40%;") Rasgos y características
            .row
              .col-6.border-naranja.rounded-20.p-4.w-47.ml-3
                .h4 Proyectos estratégicos: 
                p.mt-1 Orientados a incrementar las capacidades de la organización a través del logro de objetivos estratégicos.
              .col-6.border-naranja.rounded-20.p-4.w-47.ml-3
                .h4 Proyectos de mejora, soporte y mantenimiento:
                p.mt-1 Orientados a garantizar el mayor rendimiento de la productividad y la calidad de los servicios de la organización.
      .col-lg-10.movil(data-aos="slide-up")
        figure
          img(src='@/assets/curso/temas/tema1/tema-1-7_1.svg', alt='')
    separador

    .titulo-segundo.mt-5.color-acento-contenido
      #t_1_2.h2 1.2 Concepto y procesos de la gestión de proyectos
    .row.mt-5.rounded-15.bg-amarillo-claro.p-5.zoom-in(data-aos="flip-left")
      .col-12.col-lg-8
        p La gestión de proyectos, también denominada dirección de proyectos, administración de proyectos, gerencia de proyectos o #[i project management], se entiende como los mecanismos necesarios para la implementación y aplicabilidad de los proyectos.
        p.mt-3 La gestión de proyectos es la aplicación de conocimientos, habilidades, herramientas y técnicas a las actividades del proyecto para cumplir los requisitos del mismo.
        p.mt-3 También se define la gestión de proyectos como la planificación, la organización, el monitoreo y el control de todos los aspectos del proyecto y la motivación de todos los involucrados para el logro de los objetivos, con seguridad y dentro de los criterios acordados de tiempo, costo y desempeño.
        p.mt-3 El éxito de un proyecto radica en tener la capacidad de satisfacer los requerimientos de las partes interesadas y obtener los resultados esperados, siendo eficiente en el tiempo y con los recursos.
        p.mt-3 Adicionalmente a esto, existen 5 procesos de gestión de proyectos que se deben lograr para el cumplimiento de los objetivos del proyecto. Para conocer los grupos de procesos y sus elementos, explore el siguiente gráfico interactivo:
      .col-lg-4.col-sm-8
        figure
          img(src="@/assets/curso/temas/tema1/tema-1-8.svg", alt="Imagen decorativa")
    .row
      .col-12
        .titulo-quinto.color-acento-contenido.mt-5
          h4 Grupo de procesos
    .row.justify-content-center.align-items-center.mb-5      
      .col-12.mt-0.mt-sm-3.mt-md-0.desktop
        ImagenInfografica.color-primario.mt-2
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/tema-1-9.svg', alt='Imagen decorativa')

          .tarjeta.border-azul.bg-blanco.p-3(x="3%" y="26%" numero="")
            .h4 1. Procesos de inicio:
            p.mt-2 Definen el inicio de un proyecto o de una fase del mismo.
            .h4.mt-4 Sus elementos de proceso son:
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Acta de constitución.
              li
                i.fas.fa-angle-right
                | Identificación de las partes interesadas.
          .tarjeta.border-azul.bg-blanco.p-3(x="11.7%" y="55%" numero="")
            .h4 2. Procesos de planificación:
            p.mt-2 Establecen el alcance, objetivos y el curso de acción para el cumplimiento de ellos.
            .h4.mt-4 Sus elementos de proceso son:
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Gestión del alcance.
              li
                i.fas.fa-angle-right
                | Gestión del cronograma.
              li
                i.fas.fa-angle-right
                | Gestión de costos.
              li
                i.fas.fa-angle-right
                | Gestión de calidad.
              li
                i.fas.fa-angle-right
                | Gestión de recursos humanos.
              li
                i.fas.fa-angle-right
                | Gestión de comunicaciones.
              li
                i.fas.fa-angle-right
                | Gestión de riesgos.
              li
                i.fas.fa-angle-right
                | Gestión de adquisiciones.
              li
                i.fas.fa-angle-right
                | Gestión de partes interesadas.
          .tarjeta.border-azul.bg-blanco.p-3(x="50%" y="92.5%" numero="")
            .h4 3. Procesos de ejecución:
            p.mt-2 Materialización de los trabajos definidos en el plan de acción.
            .h4.mt-4 Sus elementos de proceso son:
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Dirección y gestión del trabajo del proyecto.
              li
                i.fas.fa-angle-right
                | Realizar el aseguramiento de la calidad.
              li
                i.fas.fa-angle-right
                | Adquirir e incorporar el equipo del proyecto.
              li
                i.fas.fa-angle-right
                | Desarrollar el equipo de proyecto.
              li
                i.fas.fa-angle-right
                | Gestionar el equipo del proyecto.
              li
                i.fas.fa-angle-right
                | Efectuar la procura: adquisiciones y contrataciones.
              li
                i.fas.fa-angle-right
                | Gestionar el involucramiento de las partes interesadas.
          .tarjeta.border-azul.bg-blanco.p-3.f-10(x="89.7%" y="55%" numero="")
            .h4 4.  Procesos de seguimiento y control:
            p.mt-2 Monitoreo del progreso y desempeño logrados, identificar y corregir desviaciones.
            .h4.mt-4 Sus elementos de proceso son:
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Seguimiento y control del trabajo del proyecto.
              li
                i.fas.fa-angle-right
                | Validar el alcance.
              li
                i.fas.fa-angle-right
                | Control del alcance.
              li
                i.fas.fa-angle-right
                | Control del cronograma.
              li
                i.fas.fa-angle-right
                | Control de costos.
              li
                i.fas.fa-angle-right
                | Método de valor ganado.
              li
                i.fas.fa-angle-right
                | Control de calidad.
              li
                i.fas.fa-angle-right
                | Control de comunicaciones.
              li
                i.fas.fa-angle-right
                | Control de riesgos.
              li
                i.fas.fa-angle-right
                | Control de adquisiciones.
              li
                i.fas.fa-angle-right
                | Control de involucramiento de las partes interesadas.
          .tarjeta.border-azul.bg-blanco.p-3(x="97.4%" y="26.3%" numero="")
            .h4 5.  Procesos de cierre:
            p.mt-2 Fin de las actividades y cierre formal del proyecto o fase.
            .h4.mt-4 Sus elementos de proceso son:
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Cierre de proyecto o fase.
              li
                i.fas.fa-angle-right
                | Cierre de las adquisiciones.
      .col-12.mt-0.mt-sm-3.mt-md-0.movil
        figure
          img(src='@/assets/curso/temas/tema1/tema-1-9_1.svg', alt='Imagen decorativa')
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
