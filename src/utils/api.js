const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

const ingredientsLink = 'https://norma.nomoreparties.space/api/ingredients';


export const getCards = function() {
    return fetch(ingredientsLink)
        .then(checkResponse)
        .catch((error) => {
            console.error("Ошибка при получении ингредиентов:", error);
        });
}