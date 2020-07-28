<template>
  <common-card title="累计销售额" value="￥ 232323">
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">3.21%</span>
          <div class="increase" />
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">3.21%</span>
          <div class="decrease" />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额</span>
      <span class="emphasis">￥7983165</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
// import commonDataMixin from '../../mixins/commonDataMixin'

export default {
  mixins: [commonCardMixin]
}
</script>

<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    color: #666;
  }
}
</style>
