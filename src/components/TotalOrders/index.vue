
<template>
  <common-card title="累计订单量" value="132456478">
    <template>
      <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <span>昨日订单量</span>
      <span class="emphasis">176435214</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
// import commonDataMixin from '../../mixins/commonDataMixin'

export default {
  mixins: [commonCardMixin],
  methods: {
    getOptions () {
      return {
        xAxis: {
          type: 'category',
          show: true,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: 'line',
            data: [666, 455, 454, 454, 242, 158, 962, 154, 123],
            areaStyle: {
              color: 'purple'
            },
            lineStyle: {
              width: 0
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    }
  }
}
</script>
