// Сделайте сворачивание/разворачивание списка по нажатию на кнопку
// Сделайте замену значения по выбору соответствующего пункта меню
// Предусмотрите случай, когда на странице может одновременно находиться несколько таких кнопок
// Не забывайте запрещать переход по ссылке

document.querySelectorAll('.dropdown').forEach(
    (dropdown) => {
        const dropdown__value = dropdown.querySelector('.dropdown__value');
        const dropdown__list = dropdown.querySelector('.dropdown__list');
        const dropdown__items = dropdown__list.querySelectorAll('.dropdown__link')

        dropdown__value.addEventListener('click', () => {
            dropdown__list.classList.toggle('dropdown__list_active');
        })

        dropdown__items.forEach(
            (dropdown__item) => {
                dropdown__item.addEventListener('click', (e) => {
                    e.preventDefault();
                    dropdown__list.classList.remove('dropdown__list_active');
                    dropdown__list.parentElement.querySelector('.dropdown__value').textContent = dropdown__item.textContent;
                }, false);

            }
        )
    }
)
