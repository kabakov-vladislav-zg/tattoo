<template>
  <div class="map-yandex">
    <client-only>
      <yandexMap
        :coords="[53.537147, 49.294146]"
        :zoom="13"
        :scroll-zoom="true"
        :settings="{
          apiKey: '',
          lang: 'ru_RU',
          coordorder: 'latlong',
          enterprise: false,
          version: '2.1'
        }"
      >
        <ymapMarker
          :coords="[53.537147, 49.294146]"
          marker-id="123"
          :hint-content="'улица Дзержинского, 68А Тольятти, Самарская область, Россия, 445036'"
          :icon="markerIcon"
        />
      </yandexMap>
    </client-only>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  name: "InteractiveMap",

  components: {
    yandexMap,
    ymapMarker
  },

  data() {
    return {
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: '',
        imageSize: [92, 96],
        imageOffset: [-50, -60],
        content: '',
        contentLayout: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 92 96" width="92" height="96"><path fill="#FF5108" fill-rule="evenodd" d="M46 60s14-9.14 14-18.29C60 34.14 53.73 28 46 28s-14 6.14-14 13.71C32 50.86 46 60 46 60Zm0-12a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" clip-rule="evenodd"/></svg>'
      }
    }
  }
}
</script>

<style lang="scss">
.map-yandex {
  position: relative;
  padding-top: 100%;

  & > .ymap-container {
    position: absolute;
    inset: 0;
  }
}
</style>
