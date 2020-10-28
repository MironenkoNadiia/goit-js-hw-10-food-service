import './styles.css';
import menuItemTpl from './templates/menu-item.hbs';
import menu from './menu.json';
import refs from './refs'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



refs.menuList.innerHTML = menu.map(menuItemTpl).join('');
if (JSON.parse(localStorage.getItem('checked-dark-theme'))) {
  refs.body.classList.remove(`${Theme.LIGHT}`);
  refs.body.classList.add(`${Theme.DARK}`);
  refs.checkbox.setAttribute('checked', true);
}

refs.body.classList.add(`${Theme.LIGHT}`);

refs.checkbox.addEventListener('change', checkboxChange);

function checkboxChange() {
  refs.body.classList.toggle(`${Theme.LIGHT}`);
  refs.body.classList.toggle(`${Theme.DARK}`);

  if (refs.checkbox.checked) {
    refs.checkbox.removeAttribute('checked');
    refs.checkbox.setAttribute('checked', false);

    localStorage.setItem('checked-dark-theme', false);
  } else {
    refs.checkbox.removeAttribute('checked');
    refs.checkbox.setAttribute('checked', true);

    localStorage.setItem('checked-dark-theme', true);
  }
}
