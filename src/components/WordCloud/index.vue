<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings" />
</template>

<script>
export default {
  mounted () {
    this.chartData = {
      columns: ['name', 'value'],
      rows: [
        { name: '大学', value: '100' },
        { name: '毕业', value: '90' },
        { name: '高考', value: '80' },
        { name: '人生', value: '60' }
      ]
    }
  },
  data () {
    return {
      chartData: {},
      chartSettings: {
        color: [
          'rgba(97,216,0,.7)',
          'rgba(204,178,26,.7)',
          'rgba(245,166,35,.7)',
          'rgba(156,13,113,.7)'
        ]
      }
    }
  }
}
</script>
