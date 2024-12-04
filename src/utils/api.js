const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

const ingredientsLink = 'https://norma.nomoreparties.space/api/ingredients';
const orderLink = 'https://norma.nomoreparties.space/api/orders';

export const getCards = function() {
    return fetch(ingredientsLink)
        .then(checkResponse)
        .catch((error) => {
            console.error("Ошибка при получении ингредиентов:", error);
        });
}

export const placeOrder = function(ingredients) {
    return fetch(orderLink, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ingredients })
    })
    .then(checkResponse)
    .catch((error) => {
        console.error("Ошибка при оформлении заказа:", error);
        throw error;
    });
}