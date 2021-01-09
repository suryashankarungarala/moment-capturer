function watchAndScrollHeader() {
  let initScrollY = 0;
  let translateY = 0;
  let animationFrame = 0;
  const header = <HTMLElement>document.querySelector(".mcHeader");
  const headerHeight = header.clientHeight;

  document.addEventListener("scroll", () => {
    let tempDocTop = window.pageYOffset || document.documentElement.scrollTop;
    if (tempDocTop > initScrollY) {
      translateY = 0 - (tempDocTop < headerHeight ? tempDocTop : headerHeight);
    } else {
      translateY = 0;
    }

    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    animationFrame = requestAnimationFrame(() => {
      header.style.cssText = `transform: translateY(${translateY}px); transition: transform 0.5s`;
      initScrollY = tempDocTop;
    });
  });
}

export { watchAndScrollHeader };
