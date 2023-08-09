(() => {
  // gnb
  const gnbControll = () => {
    const nav = document.querySelector('.gnb__wrap');
    if(nav) {
      const depth1 = document.querySelectorAll('.depth1');
      const depth2 = document.querySelector('.gnb__wrap--depth2');
      
      depth1.forEach(function(el) {
        el.addEventListener('mouseenter', () => {
          el.classList.add('is-active');
        });
        el.addEventListener('mouseleave', () => {
          if (el.classList.contains('is-active')) {
            el.classList.remove('is-active');
          }
        });
      });
      nav.addEventListener('mouseenter', () => {
        nav.classList.add('is-active');
      });
      depth2.addEventListener('mouseleave', () => {
        nav.classList.remove('is-active');
      });
  
  
      // mobile
      const winW = window.innerWidth;
      const navMo = document.querySelector('.gnb__wrap.show-mo');
  
      if (winW < 641) {
        const gnbDepth1 = document.querySelectorAll('.gnb__wrap--depth1 .depth1');
        const gnbDepth2 = document.querySelectorAll('.gnb__wrap--depth2 .depth2__box');
        const btnMore = document.querySelectorAll('.btn__more');
  
        gnbDepth1.forEach(function(item, index) {
          item.addEventListener('click', function() {
            if (!item) {
              return;
            }
  
            this.classList.add('is-active');
            const siblings = Array.from(this.parentNode.children).filter(function(sibling) {
              return sibling !== this;
            }, this);
            siblings.forEach(function(sibling) {
              sibling.classList.remove('is-active');
            });
            
            gnbDepth2.forEach((content) => {
              content.classList.remove('is-active');
            });
      
            gnbDepth2[index].classList.add('is-active');
  
            return false;
          });
        });
        
        btnMore.forEach(function(item) {
          item.addEventListener('click', function() {
            const parentDepth2 = this.closest('.depth2');
            
            if (parentDepth2) {
              parentDepth2.classList.toggle('is-active');
            }
          });
        });
      
        const gnbOpen = document.querySelector('.btn__gnb');
        const gnbClose = document.querySelector('.btn__gnb-close');
        const body = document.getElementsByTagName('body')[0];
      
        gnbOpen.addEventListener('click', () => {
          navMo.classList.add('is-active');
          body.style.overflow = 'hidden';
        });
      
        gnbClose.addEventListener('click', () => {
          navMo.classList.remove('is-active');
          body.style.overflow = 'initial';
        });
      }
    }
  }
  
  // customSelect
  const sitemap = () => {
    const btnSitemap = document.querySelector('.site-map__btn');
    
    btnSitemap.addEventListener('click', function() {
      const sitemapList = document.querySelector('.site-map__list');

      sitemapList.classList.toggle('is-active');
    })
  }

  // tab_menu
  const tabMenu = () => {
    const menuTabLinks = document.querySelectorAll('.menu-tab__link');

    menuTabLinks.forEach((link) => {
      link.addEventListener('click', function(event) {
        const currentItem = link.parentNode;
        const currentList = currentItem.parentNode;
        const currentTab = currentList.parentNode;

        const otherItems = currentTab.querySelectorAll('.menu-tab__item');

        otherItems.forEach((item) => {
          if (item !== currentItem) {
            item.classList.remove('is-active');
          }
        });

        currentItem.classList.add('is-active');

        // .menu-tab__sub-wrap case 
        const subWrap = currentItem.querySelector('.menu-tab__sub-wrap');
        const menuList = currentTab.querySelector('.menu-tab__list');
        // console.log(menuList);

        if (subWrap) {
          menuList.classList.add('is-active');
        } else {
          menuList.classList.remove('is-active');
        }
      }); 
    });

    
    // page 내부 tab
    const pageTab = document.querySelector(".page__tab");

    if(pageTab) {
      const menuLinks = pageTab.querySelectorAll(".menu-tab__link");
      const tabContents = pageTab.querySelectorAll(".tab__cont");

      menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          const targetTab = this.getAttribute('data-tab');

          tabContents.forEach(function(tab) {
            tab.classList.remove('is-active');
          });

          document.querySelector(`[data-target='${targetTab}']`).classList.add('is-active');
        });
      });
    }
  }


  // accordion
  const accordionMenu = () => {
    const accordionLists = document.querySelectorAll('.accordion__list');

    accordionLists.forEach(accordionList => {
      const items = accordionList.querySelectorAll('.item');

      items.forEach(item => {
        item.addEventListener('click', function() {
          const parentItem = this.closest('.accordion__item');
          const isActive = parentItem.classList.contains('is-active');

          accordionList.querySelectorAll('.accordion__item').forEach(item => {
            if (item === parentItem) {
              if (isActive) {
                item.classList.remove('is-active');
                item.querySelector('.item').setAttribute('aria-expanded', 'false');
              } else {
                item.classList.add('is-active');
                item.querySelector('.item').setAttribute('aria-expanded', 'true');
              }
            } else {
              item.classList.remove('is-active');
              item.querySelector('.item').setAttribute('aria-expanded', 'false');
            }
          });
        });
      });
    });
  }


  // breadcrumb
  const breadcrumbMenu = () => {
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb-navi__link');

    if(breadcrumbLinks.length) {
      breadcrumbLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
  
          const isActive = this.classList.contains('is-active');
  
          breadcrumbLinks.forEach(function(link) {
            link.classList.remove('is-active');
          });
  
          if (!isActive) {
            this.classList.add('is-active');
          }
        });

        /* 230719: 특정영역 이외 클릭시 breadcrumb 닫힘 */
        link.addEventListener('blur', function(event) {
          link.classList.remove('is-active');
        });
        /* // 230719: 특정영역 이외 클릭시 breadcrumb 닫힘 */
      });

      
  
      /* sns */
      var btnSns = document.querySelector('.btn-sns');
      var snsList = document.querySelector('.sns-list');
  
      btnSns.addEventListener('click', function() {
        snsList.style.display = 'block';
      });
  
      var btnCloseSns = document.querySelector('.btn-close--sns');
  
      btnCloseSns.addEventListener('click', function() {
        snsList.style.display = 'none';
      });
    }
  }


  /* 230719: anchor기능 추가 */
  // anchor
  const anchorTarget = () => {
    // Get all anchor__link elements
    const anchorLinks = document.querySelectorAll('.anchor__link');

    // Add click event listener to each anchor__link element
    anchorLinks.forEach((link, index) => {
      link.addEventListener('click', () => {
        // Find the corresponding text-box__wrap element using the index
        const correspondingSection = document.querySelectorAll('.text-box__wrap')[index];

        if (correspondingSection) {
          // Scroll to the corresponding section smoothly
          correspondingSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
  /* // 230719: anchor기능 추가 */

  
  // Fn load
  window.addEventListener('DOMContentLoaded', () => {
    gnbControll();
    tabMenu();
    accordionMenu();
    breadcrumbMenu();
    anchorTarget();
    sitemap();
  });
})();