<template>
  <main>
    <SectionDefault
      :caseItem="cases[0]"
      :reverse="true"
      class="mt-20"
    >
      <h1 class="display-2">Студия татуировок и пирсинга в Тольятти</h1>
      <p>На счету мастеров нашей студии множество превосходных работ.
        Из года в год мы подтверждаем статус одного из лучших
        тату-салонов в Тольятти.</p>
      <template v-slot:img>
        <div class="picture">
          <img :src="cases[0].images[0].href">
        </div>
      </template>
    </SectionDefault>

    <BannerAds />

    <SectionDefault
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
    </SectionDefault>

    <SectionDefault
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
    </SectionDefault>
    <SectionDefault>
      <h2 class="display-3">Как доехать?</h2>
      <p>Работаем каждый день с 10:00 до последнего клиента.</p>
      <p>Тольятти, улица Дзержинского, 68А</p>
      <p>Вход под вывеской "Хорошее Место"</p>

      <template v-slot:img>
        <InteractiveMap />
      </template>
    </SectionDefault>
  </main>
</template>

<script>
import SectionDefault from "@/components/SectionDefault";
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
    SectionDefault
  },

  data() {
    return {
      cases
    }
  }
}
</script>
