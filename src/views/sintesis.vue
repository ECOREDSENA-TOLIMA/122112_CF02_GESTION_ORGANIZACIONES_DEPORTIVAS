<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En resumen, el componente formativo proporciona una guía completa para estructurar proyectos en el sector del deporte y desarrollar propuestas de mercadeo que satisfagan las demandas de la población objetivo. Los estudiantes aprenderán sobre la gestión de proyectos, planificación, y cómo diseñar servicios deportivos adecuados para el mercado. A continuación, se presentan las temáticas tratadas que se resume en:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se presentan los temas más importantes del componente formativo, en cuanto a los conceptos, grupo de inicio y planificación de proyectos, con el fin de generar la formulación de propuestas de mercado.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
