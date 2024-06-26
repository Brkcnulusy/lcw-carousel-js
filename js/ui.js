

export const renderSlider = function (datas, element) {
  element.innerHTML = "";
  datas.forEach((data) => {
    element.innerHTML += `
        <div class="slider-item" data-id=${data.id}>
            <div class="favorute-button">
                <img src="./assets/images/empty-heart.svg" class="js-fav active" alt="heart">
            </div>
            <a href="${data.url}" target="_blank">
                <div class="item-header">
                    <img src="${data.img}" alt="">
                </div>
                <div class="item-body">
                    <div class="description">
                        <h4>${data.name}</h4>
                    </div>
                    <div class="price">
                        <p>${data.price} ₺</p>
                    </div>
                </div>
            </a>
            <div class="item-footer">
                <button>Sepete Ekle</button>
            </div>
         </div>
        `;
  });
};