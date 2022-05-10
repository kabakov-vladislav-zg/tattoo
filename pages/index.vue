<template>
  <main>
    <SectionTwoColumns
      :caseItem="cases[0]"
      :reverse="true"
    >
      <h1 class="display-2">Студия татуировок и пирсинга в Тольятти</h1>
      <p>На счету мастеров нашей студии множество превосходных работ.
        Из года в год мы подтверждаем статус одного из лучших
        тату-салонов в Тольятти.</p>
      <template v-slot:img>
        <div class="ratio ratio-1x1">
          <img
            :src="cases[0].images[0].href"
            class="w-100 h-100 object-fit-cover"
          >
        </div>
      </template>
    </SectionTwoColumns>

    <BannerAds />

    <SectionTwoColumns
      :caseItem="cases[1]"
    >
      <h2 class="display-3">О нас</h2>
      <p>При выборе татуировщика вы обращайте внимание на много факторов,
        помимо того как он выполняет вбивание краски в кожу.
        И поэтому я веду этот аккаунт показывая свое лицо и свои мысли.
        Я готова к многим экспериментальным проектам. Творчество и яркость,
        то что я хочу приумножить проживая в России. Хочу собрать аудиторию
        у которой это находит отклик в душе.</p>

      <template v-slot:figcaption>
        Студия
      </template>
    </SectionTwoColumns>

    <SectionTwoColumns
      :reverse="true"
      :caseItem="cases[1]"
    >
      <h2 class="display-3">Цены</h2>
      <table class="table">
        <tbody>
        <tr>
          <td>Сеанс татуировки</td>
          <td>от 2000 руб.</td>
        </tr>
        <tr>
          <td>Перекрытие татуировок</td>
          <td>от 5000 руб.</td>
        </tr>
        <tr>
          <td>Разработка индивидуально эскиза</td>
          <td>Бесплатно! </td>
        </tr>
        <tr>
          <td>Пирсинг</td>
          <td>от 1000 руб.</td>
        </tr>
        <tr>
          <td>Украшения для пирсинга</td>
          <td>от 200 руб.</td>
        </tr>
        </tbody>
      </table>
    </SectionTwoColumns>
    <SectionTwoColumns>
      <h2 class="display-3">Как доехать?</h2>
      <p>Работаем каждый день с 10:00 до последнего клиента.</p>
      <p>Тольятти, улица Дзержинского, 68А</p>
      <p>Вход под вывеской "Хорошее Место"</p>

      <template v-slot:img>
        <InteractiveMap />
      </template>
    </SectionTwoColumns>
  </main>
</template>

<script>
import SectionTwoColumns from "@/components/SectionTwoColumns";
import BannerAds from "@/components/BannerAds";
import InteractiveMap from "@/components/InteractiveMap";

import cases from "@/static/mockup/cases"
import PreviewSlider from "@/components/PreviewSlider";
export default {
  name: 'IndexPage',

  components: {
    PreviewSlider,
    InteractiveMap,
    BannerAds,
    SectionTwoColumns
  },

  data() {
    return {
      cases
    }
  }
}
</script>
