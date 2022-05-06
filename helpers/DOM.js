
/**
 * Прокрутка экрана до элемента
 * @param targetSelector {String} - элемент, к которому прокрутить
 * @param mobileOnly {Boolean} прокручивать только на мобильных. Не задействовано
 */
export function scrollTo(targetSelector, mobileOnly = false) {
  let elementTarget;
  // if (mobileOnly && !this.isMobile) {
  //   return
  // }
  elementTarget = document.querySelector(targetSelector);

  if (elementTarget === null) {
    return false
  }

  // Дополнительное смещение для красоты
  const parentOffset = 10;

  const elementPosition = elementTarget.getBoundingClientRect().top;

  const header =  document.querySelector('#__layout > div > header.header');
  let headerHeight = 0
  if (header) {
    headerHeight = header.getBoundingClientRect().height;
  }
  const topOffset = headerHeight + parentOffset;

  const offsetPosition = elementPosition + window.scrollY - topOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
    block: 'start'
  });

}

/**
 * blocking scroll in current position
 * @param flag {Boolean} - block/unblock flag
 * @param key {String} - unique key to prevent bugs with multiple scroll blocking
 */
export function preventScroll(flag, key) {
  const html = document.documentElement

  if (html.preventScroll && html.preventScroll !== key) return

  switch (flag) {
    case true:
      html.preventScroll = key
      html.style.overflow = 'hidden'
      break

    case false:
      html.preventScroll = null
      html.style.overflow = ''
      break
  }
}
