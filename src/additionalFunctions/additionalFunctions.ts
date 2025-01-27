// @ts-nocheck

export const toTitleCase = (text) => text
    .toLowerCase()
    .replace(/(^|\s|['"])([a-zа-яё])/g, (match, p1, p2) => p1 + p2.toUpperCase());

export const removeUnwantedTags = (text) => text
    .replace(/<br\s*\/?>/gi, '')
    .replace(/<\/?[^>]+>/gi, '')
    .replace(/&nbsp;/gi, '');

export const formatDateNews = (DateString) => {
    const date = new Date(DateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    // DD.MM.YYYY
    return `${day}.${month}.${year}`;
};

export const formatDateReveiws = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

export const CutToFirstBRTag = (htmlString) => {
    const breakIndex = htmlString.indexOf('<br>');

    return breakIndex !== -1 ? htmlString.substring(0, breakIndex) : htmlString;
};

export const HighlightATag = (htmlString) => htmlString.replace(/<a(.*?)>/g, '<a$1 class="text-orange-700">');

export const transformTicketsData = (jsonData) => jsonData.cards.map((card) => {
    const priceAdult = card.products.find((product) => product.name.default.includes('Adult'))?.price || 0;
    const priceStudCh = card.products.find((product) => product.name.default.includes('Child') || product.name.default.includes('Student'))?.price || 0;

    return {
        id: card.id,
        numberOfDays: card.products[0]?.validity_in_days || 1,
        priceAdult,
        priceStudCh
    };
});
