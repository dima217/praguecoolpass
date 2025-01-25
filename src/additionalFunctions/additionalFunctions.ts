// @ts-nocheck

// Перевод строки к регистру Title Case
export const toTitleCase = (text) => text
    .toLowerCase()
    .replace(/(^|\s|['"])([a-zа-яё])/g, (match, p1, p2) => p1 + p2.toUpperCase());

// Убираем все <br> теги, а также любые другие не нужные теги
export const removeUnwantedTags = (text) => text
    .replace(/<br\s*\/?>/gi, '')
    .replace(/<\/?[^>]+>/gi, '')
    .replace(/&nbsp;/gi, '');

// Представление даты из формата api в формат 10.10.2024
export const formatDateNews = (DateString) => {
    // Парсим дату из строки
    const date = new Date(DateString);

    // Форматируем дату
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    // DD.MM.YYYY
    return `${day}.${month}.${year}`;
};

// Представление даты из формата в api формат November 10, 2024
export const formatDateReveiws = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

// Ограничение вывода текста до первого <br> (Enter)
export const CutToFirstBRTag = (htmlString) => {
    // Находим индекс первого <br> в строке
    const breakIndex = htmlString.indexOf('<br>');

    // Если <br> найден, обрезаем строку до него, иначе возвращаем всю строку
    return breakIndex !== -1 ? htmlString.substring(0, breakIndex) : htmlString;
};

// Выделение текста в теге a
export const HighlightATag = (htmlString) => htmlString.replace(/<a(.*?)>/g, '<a$1 class="text-orange-700">');

// Перевод данных Тикетов в упрощенный формат
export const transformTicketsData = (jsonData) => jsonData.cards.map((card) => {
    // Находим цену для взрослого (price) и для студента/ребенка (price)
    const priceAdult = card.products.find((product) => product.name.default.includes('Adult'))?.price || 0;
    const priceStudCh = card.products.find((product) => product.name.default.includes('Child') || product.name.default.includes('Student'))?.price || 0;

    return {
        id: card.id,
        numberOfDays: card.products[0]?.validity_in_days || 1,
        // Берем количество дней из первого продукта
        priceAdult,
        priceStudCh
    };
});
