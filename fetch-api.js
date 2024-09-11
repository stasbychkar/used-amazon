// setting up without using API
// const responseString = "{\"amazonProductSearchResults\":{\"productResults\":{\"results\":[{\"price\":{\"value\":21.35},\"title\":\"WILSONNBAAuthenticSeriesIndoor/OutdoorBasketballs\",\"url\":\"https://www.amazon.com/Wilson-Authentic-Indoor-Outdoor-Basketball/dp/B091MBQYPH/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ben0V3QrKb4SDRt_iMtCkf_RlSrP2ffJLy3RK4Na9UGh1g4PgRB8_NDyTxDuUMZ0fowG1Y_jvpiopQwXn25EdxWt-nrqmuKR1jYw0APmn4vygUuw0ALNwIToaSwZWMEgxaDt_Cau0YRBWuRXCTusg3weLQosB9rs30er43c18cxxx78qOND4qUos3uGbghMOpqQDCfM8h7TPg-VNuk7qcw.06YMQXyYa0nIYwr1U9Bj3NNI8kYl3BDCPT6pbWECX_g&dib_tag=se&keywords=basketball&qid=1725488717&refinements=p_n_condition-type%3A6503256011&s=sporting-goods&sr=1-1\",\"mainImageUrl\":\"https://m.media-amazon.com/images/I/914I6wrUEiS._AC_UL320_.jpg\",\"rating\":4.6},{\"price\":{\"value\":19.97},\"title\":\"WILSONNCAAFinalFourBasketball-29.5\\\"and28.5\\\"\",\"url\":\"https://www.amazon.com/Wilson-NCAA-Final-Basketball-Official/dp/B0009KF59M/ref=sr_1_2?dib=eyJ2IjoiMSJ9.ben0V3QrKb4SDRt_iMtCkf_RlSrP2ffJLy3RK4Na9UGh1g4PgRB8_NDyTxDuUMZ0fowG1Y_jvpiopQwXn25EdxWt-nrqmuKR1jYw0APmn4vygUuw0ALNwIToaSwZWMEgxaDt_Cau0YRBWuRXCTusg3weLQosB9rs30er43c18cxxx78qOND4qUos3uGbghMOpqQDCfM8h7TPg-VNuk7qcw.06YMQXyYa0nIYwr1U9Bj3NNI8kYl3BDCPT6pbWECX_g&dib_tag=se&keywords=basketball&qid=1725488717&refinements=p_n_condition-type%3A6503256011&s=sporting-goods&sr=1-2\",\"mainImageUrl\":\"https://m.media-amazon.com/images/I/91tZ3EisXVL._AC_UL320_.jpg\",\"rating\":4.7},{\"price\":{\"value\":19.99},\"title\":\"SpaldingOutdoorBasketballs\",\"url\":\"https://www.amazon.com/Spalding-Street-Outdoor-Basketball-29-5/dp/B08QJC5YPX/ref=sr_1_3?dib=eyJ2IjoiMSJ9.ben0V3QrKb4SDRt_iMtCkf_RlSrP2ffJLy3RK4Na9UGh1g4PgRB8_NDyTxDuUMZ0fowG1Y_jvpiopQwXn25EdxWt-nrqmuKR1jYw0APmn4vygUuw0ALNwIToaSwZWMEgxaDt_Cau0YRBWuRXCTusg3weLQosB9rs30er43c18cxxx78qOND4qUos3uGbghMOpqQDCfM8h7TPg-VNuk7qcw.06YMQXyYa0nIYwr1U9Bj3NNI8kYl3BDCPT6pbWECX_g&dib_tag=se&keywords=basketball&qid=1725488717&refinements=p_n_condition-type%3A6503256011&s=sporting-goods&sr=1-3\",\"mainImageUrl\":\"https://m.media-amazon.com/images/I/7187crn3osS._AC_UL320_.jpg\",\"rating\":4.6},{\"price\":{\"value\":31.95},\"title\":\"WILSONNBAForgeSeriesIndoor/OutdoorBasketballs\",\"url\":\"https://www.amazon.com/Wilson-NBA-Forge-Basketball-Brown/dp/B091M55MPV/ref=sr_1_4?dib=eyJ2IjoiMSJ9.ben0V3QrKb4SDRt_iMtCkf_RlSrP2ffJLy3RK4Na9UGh1g4PgRB8_NDyTxDuUMZ0fowG1Y_jvpiopQwXn25EdxWt-nrqmuKR1jYw0APmn4vygUuw0ALNwIToaSwZWMEgxaDt_Cau0YRBWuRXCTusg3weLQosB9rs30er43c18cxxx78qOND4qUos3uGbghMOpqQDCfM8h7TPg-VNuk7qcw.06YMQXyYa0nIYwr1U9Bj3NNI8kYl3BDCPT6pbWECX_g&dib_tag=se&keywords=basketball&qid=1725488717&refinements=p_n_condition-type%3A6503256011&s=sporting-goods&sr=1-4\",\"mainImageUrl\":\"https://m.media-amazon.com/images/I/816L9XC85uL._AC_UL320_.jpg\",\"rating\":4.6},{\"price\":{\"value\":21.99},\"title\":\"WILSONNBADRVSeriesBasketball\",\"url\":\"https://www.amazon.com/WILSON-NBA-DRV-Basketball-7-29-5/dp/B091MJMKVK/ref=sr_1_5?dib=eyJ2IjoiMSJ9.ben0V3QrKb4SDRt_iMtCkf_RlSrP2ffJLy3RK4Na9UGh1g4PgRB8_NDyTxDuUMZ0fowG1Y_jvpiopQwXn25EdxWt-nrqmuKR1jYw0APmn4vygUuw0ALNwIToaSwZWMEgxaDt_Cau0YRBWuRXCTusg3weLQosB9rs30er43c18cxxx78qOND4qUos3uGbghMOpqQDCfM8h7TPg-VNuk7qcw.06YMQXyYa0nIYwr1U9Bj3NNI8kYl3BDCPT6pbWECX_g&dib_tag=se&keywords=basketball&qid=1725488717&refinements=p_n_condition-type%3A6503256011&s=sporting-goods&sr=1-5\",\"mainImageUrl\":\"https://m.media-amazon.com/images/I/81pkjvvZcjL._AC_UL320_.jpg\",\"rating\":4.5},{\"price\":{\"value\":35.21},\"title\":\"SpaldingTFSeriesIndoor/OutdoorBasketballs\",\"url\":\"https://www.amazon.com/Spalding-Zi-Indoor-Outdoor-Basketball-29-5/dp/B08QJH7TSW/ref=sr_1_6?dib=eyJ2IjoiMSJ9.ben0V3QrKb4SDRt_iMtCkf_RlSrP2ffJLy3RK4Na9UGh1g4PgRB8_NDyTxDuUMZ0fowG1Y_jvpiopQwXn25EdxWt-nrqmuKR1jYw0APmn4vygUuw0ALNwIToaSwZWMEgxaDt_Cau0YRBWuRXCTusg3weLQosB9rs30er43c18cxxx78qOND4qUos3uGbghMOpqQDCfM8h7TPg-VNuk7qcw.06YMQXyYa0nIYwr1U9Bj3NNI8kYl3BDCPT6pbWECX_g&dib_tag=se&keywords=basketball&qid=1725488717&refinements=p_n_condition-type%3A6503256011&s=sporting-goods&sr=1-6\",\"mainImageUrl\":\"https://m.media-amazon.com/images/I/91sjL7skP2S._AC_UL320_.jpg\",\"rating\":4.6},{\"price\":{\"value\":43.49},\"title\":\"WILSONNCAAReplica\",\"url\":\"https://www.amazon.com/WILSON-NCAA-Evo-Replica-Basketball/dp/B09KS5K81L/ref=sr_1_7?dib=eyJ2IjoiMSJ9.ben0V3QrKb4SDRt_iMtCkf_RlSrP2ffJLy3RK4Na9UGh1g4PgRB8_NDyTxDuUMZ0fowG1Y_jvpiopQwXn25EdxWt-nrqmuKR1jYw0APmn4vygUuw0ALNwIToaSwZWMEgxaDt_Cau0YRBWuRXCTusg3weLQosB9rs30er43c18cxxx78qOND4qUos3uGbghMOpqQDCfM8h7TPg-VNuk7qcw.06YMQXyYa0nIYwr1U9Bj3NNI8kYl3BDCPT6pbWECX_g&dib_tag=se&keywords=basketball&qid=1725488717&refinements=p_n_condition-type%3A6503256011&s=sporting-goods&sr=1-7\",\"mainImageUrl\":\"https://m.media-amazon.com/images/I/71x-dl5ALuL._AC_UL320_.jpg\",\"rating\":4.5},{\"price\":{\"value\":26.95},\"title\":\"WILSONNBAAuthenticSeriesOutdoorBasketballs\",\"url\":\"https://www.amazon.com/Wilson-NBA-Authentic-Outdoor-Basketball/dp/B091MQ4P7D/ref=sr_1_8?dib=eyJ2IjoiMSJ9.ben0V3QrKb4SDRt_iMtCkf_RlSrP2ffJLy3RK4Na9UGh1g4PgRB8_NDyTxDuUMZ0fowG1Y_jvpiopQwXn25EdxWt-nrqmuKR1jYw0APmn4vygUuw0ALNwIToaSwZWMEgxaDt_Cau0YRBWuRXCTusg3weLQosB9rs30er43c18cxxx78qOND4qUos3uGbghMOpqQDCfM8h7TPg-VNuk7qcw.06YMQXyYa0nIYwr1U9Bj3NNI8kYl3BDCPT6pbWECX_g&dib_tag=se&keywords=basketball&qid=1725488717&refinements=p_n_condition-type%3A6503256011&s=sporting-goods&sr=1-8\",\"mainImageUrl\":\"https://m.media-amazon.com/images/I/71EUarrL3YL._AC_UL320_.jpg\",\"rating\":4.5},{\"price\":{\"value\":16.95},\"title\":\"WILSONNCAAElevate\",\"url\":\"https://www.amazon.com/WILSON-NCAA-Elevate-Basketball-5-27-5/dp/B09KS3FMP4/ref=sr_1_9?dib=eyJ2IjoiMSJ9.ben0V3QrKb4SDRt_iMtCkf_RlSrP2ffJLy3RK4Na9UGh1g4PgRB8_NDyTxDuUMZ0fowG1Y_jvpiopQwXn25EdxWt-nrqmuKR1jYw0APmn4vygUuw0ALNwIToaSwZWMEgxaDt_Cau0YRBWuRXCTusg3weLQosB9rs30er43c18cxxx78qOND4qUos3uGbghMOpqQDCfM8h7TPg-VNuk7qcw.06YMQXyYa0nIYwr1U9Bj3NNI8kYl3BDCPT6pbWECX_g&dib_tag=se&keywords=basketball&qid=1725488717&refinements=p_n_condition-type%3A6503256011&s=sporting-goods&sr=1-9\",\"mainImageUrl\":\"https://m.media-amazon.com/images/I/71D6oPjIk2L._AC_UL320_.jpg\",\"rating\":4.6},{\"price\":{\"value\":41.5},\"title\":\"SpaldingReactTF-250Indoor-OutdoorBasketball\",\"url\":\"https://www.amazon.com/Spalding-Inches-Official-Basketball-Orange/dp/B00F9KVDFW/ref=sr_1_10_mod_primary_new?dib=eyJ2IjoiMSJ9.ben0V3QrKb4SDRt_iMtCkf_RlSrP2ffJLy3RK4Na9UGh1g4PgRB8_NDyTxDuUMZ0fowG1Y_jvpiopQwXn25EdxWt-nrqmuKR1jYw0APmn4vygUuw0ALNwIToaSwZWMEgxaDt_Cau0YRBWuRXCTusg3weLQosB9rs30er43c18cxxx78qOND4qUos3uGbghMOpqQDCfM8h7TPg-VNuk7qcw.06YMQXyYa0nIYwr1U9Bj3NNI8kYl3BDCPT6pbWECX_g&dib_tag=se&keywords=basketball&qid=1725488717&refinements=p_n_condition-type%3A6503256011&s=sporting-goods&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-10\",\"mainImageUrl\":\"https://m.media-amazon.com/images/I/91r8TF05ItL._AC_UL320_.jpg\",\"rating\":4.5},{\"price\":{\"value\":59.78},\"title\":\"WILSONEvolutionIndoorGameBasketballs-Size5,Size6andSize7\",\"url\":\"https://www.amazon.com/Wilson-Evolution-Indoor-Basketball-Youth/dp/B00KXVPN8A/ref=sr_1_11?dib=eyJ2IjoiMSJ9.ben0V3QrKb4SDRt_iMtCkf_RlSrP2ffJLy3RK4Na9UGh1g4PgRB8_NDyTxDuUMZ0fowG1Y_jvpiopQwXn25EdxWt-nrqmuKR1jYw0APmn4vygUuw0ALNwIToaSwZWMEgxaDt_Cau0YRBWuRXCTusg3weLQosB9rs30er43c18cxxx78qOND4qUos3uGbghMOpqQDCfM8h7TPg-VNuk7qcw.06YMQXyYa0nIYwr1U9Bj3NNI8kYl3BDCPT6pbWECX_g&dib_tag=se&keywords=basketball&qid=1725488717&refinements=p_n_condition-type%3A6503256011&s=sporting-goods&sr=1-11\",\"mainImageUrl\":\"https://m.media-amazon.com/images/I/91OpxTC21VS._AC_UL320_.jpg\",\"rating\":4.7},{\"price\":{\"value\":29.99},\"title\":\"WILSONLuminousGlowBasketball\",\"url\":\"https://www.amazon.com/Wilson-Luminous-Glow-Basketball-29-5/dp/B08V3Z1P9Z/ref=sr_1_12?dib=eyJ2IjoiMSJ9.ben0V3QrKb4SDRt_iMtCkf_RlSrP2ffJLy3RK4Na9UGh1g4PgRB8_NDyTxDuUMZ0fowG1Y_jvpiopQwXn25EdxWt-nrqmuKR1jYw0APmn4vygUuw0ALNwIToaSwZWMEgxaDt_Cau0YRBWuRXCTusg3weLQosB9rs30er43c18cxxx78qOND4qUos3uGbghMOpqQDCfM8h7TPg-VNuk7qcw.06YMQXyYa0nIYwr1U9Bj3NNI8kYl3BDCPT6pbWECX_g&dib_tag=se&keywords=basketball&qid=1725488717&refinements=p_n_condition-type%3A6503256011&s=sporting-goods&sr=1-12\",\"mainImageUrl\":\"https://m.media-amazon.com/images/I/81ISlrvXeEL._AC_UL320_.jpg\",\"rating\":4.6},{\"price\":{\"value\":44.33},\"title\":\"WILSONWNBAAuthenticSeriesBasketballs\",\"url\":\"https://www.amazon.com/Wilson-WNBA-Authentic-Basketball-Outdoor/dp/B091M8YVQN/ref=sr_1_13?dib=eyJ2IjoiMSJ9.ben0V3QrKb4SDRt_iMtCkf_RlSrP2ffJLy3RK4Na9UGh1g4PgRB8_NDyTxDuUMZ0fowG1Y_jvpiopQwXn25EdxWt-nrqmuKR1jYw0APmn4vygUuw0ALNwIToaSwZWMEgxaDt_Cau0YRBWuRXCTusg3weLQosB9rs30er43c18cxxx78qOND4qUos3uGbghMOpqQDCfM8h7TPg-VNuk7qcw.06YMQXyYa0nIYwr1U9Bj3NNI8kYl3BDCPT6pbWECX_g&dib_tag=se&keywords=basketball&qid=1725488717&refinements=p_n_condition-type%3A6503256011&s=sporting-goods&sr=1-13\",\"mainImageUrl\":\"https://m.media-amazon.com/images/I/81SfcrlGm7L._AC_UL320_.jpg\",\"rating\":4.6},{\"price\":{\"value\":99.95},\"title\":\"WILSONNCAAEvoNXTOfficialIndoorGameBasketballs-Sizes6and7\",\"url\":\"https://www.amazon.com/WILSON-NCAA-Indoor-Game-Basketball/dp/B09KS6P52Z/ref=sr_1_14?dib=eyJ2IjoiMSJ9.ben0V3QrKb4SDRt_iMtCkf_RlSrP2ffJLy3RK4Na9UGh1g4PgRB8_NDyTxDuUMZ0fowG1Y_jvpiopQwXn25EdxWt-nrqmuKR1jYw0APmn4vygUuw0ALNwIToaSwZWMEgxaDt_Cau0YRBWuRXCTusg3weLQosB9rs30er43c18cxxx78qOND4qUos3uGbghMOpqQDCfM8h7TPg-VNuk7qcw.06YMQXyYa0nIYwr1U9Bj3NNI8kYl3BDCPT6pbWECX_g&dib_tag=se&keywords=basketball&qid=1725488717&refinements=p_n_condition-type%3A6503256011&s=sporting-goods&sr=1-14\",\"mainImageUrl\":\"https://m.media-amazon.com/images/I/81rsnX45NgL._AC_UL320_.jpg\",\"rating\":4.7}]}}}";
// const responseJSON = JSON.parse(responseString);

// trying to get variables from server
async function fetchConfig(key) {
  try {
    const response = await fetch('/.netlify/functions/getConfig'); // change URL for Netlify use
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const config = await response.json();
    if (key == "API_URL") {
      return config.API_URL;
    } else if (key == "API_KEY") {
      return config.API_KEY;
    } else {
      return;
    }
  } catch (error) {
    console.error('Error fetching config:', error);
  }
}

// await fetchConfig("API_KEY") // how to use fetchConfig(key)
// await fetchConfig("API_URL")

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('initialSearch'); // getting query by name
  if (query) {
    document.querySelector('#inputSearch').value = query;
  }
  var searchVar = document.querySelector("#inputSearch").value;
  if (searchVar) {
    const responseJSON = requestData(getQuery(searchVar));
    jsonToHtml(responseJSON); // search from landing page
  }
}

function getQuery(searchVar) {
    const queryVar = `
    query MyQuery {
        amazonProductSearchResults(
          input: {searchTerm: "${searchVar}", refinements: {conditions: USED}}
        ) {
          productResults {
            results {
              price {
                value
              }
              title
              url
              mainImageUrl
              rating
            }
          }
        }
      }`;
    return queryVar;
}

async function getData(data = {}) {
  try {
    const response = await fetch(await fetchConfig("API_URL"), {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "API-KEY": await fetchConfig("API_KEY")
      },
      body: JSON.stringify(data)
    });
    return response.json();
  } catch (error) {
    console.error(error.message);
  }    
}
  
const requestData = async (query) => {
    const { data, error, errors } = await getData({
        query
      });
    jsonToHtml(data); // inserts values from response to HTML
    if (errors) {
      errors.forEach((e) => console.log(e.message));
    }
}

function jsonToHtml (responseJSON) {
  const oldResults = document.querySelectorAll('.product-card');
  if (oldResults) {
    oldResults.forEach(listing => {
      listing.remove();
    });
  }
  
  const container = document.querySelector('.listings-container');
  const productsArray = responseJSON.amazonProductSearchResults.productResults.results;
  
  for (product of productsArray) {
    const card = document.createElement('div');
    card.className = 'product-card';
    const productTitle = product.title;

    // const cardContent = `
    //     <img src="${product.mainImageUrl}" alt="Product Image">
    //     <h3>${product.title}</h3>
    //     <p><strong>Price:</strong> ${product.price.value}</p>
    //     <p>${product.rating}</p>
    //     <a href="${product.url}" target="_blank">Amazon</a>
    //   `;

    const cardContent = `
            <div class="product-card">
                <img src="${product.mainImageUrl}" alt="Product Image" class="card-image">
                <h2 class="card-title">
                    ${productTitle.slice(0, 80)}...
                </h2>
                <div class="card-details">
                    <div class="card-price">$${product.price.value}</div>
                    <div class="card-rating">
                        <img src="assets/imgs/rating.png" alt="">
                        <div class="rating-number">4.5</div>
                    </div>
                </div>
                <a href="${product.url}" target="_blank">
                    <div class="card-amazon-btn">
                        <span>Amazon</span>
                        <img src="assets/imgs/amazon-link.png" alt="Amazon Link">
                    </div>
                </a>
            </div>
    `;

    card.innerHTML = cardContent;
    container.appendChild(card);

  }
}

function printSearchbarEmpty() {
  const container = document.querySelector('.listings-container');
  const emptyPage = document.createElement('div');
  emptyPage.className = 'empty-page';
  if (!document.querySelector('.empty-page')) {
    emptyPage.innerHTML = `<h3>Use search bar to look up the items you're interested in</h3>`;
    container.appendChild(emptyPage);
  }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#search-form").addEventListener("submit", (event) => {
        event.preventDefault(event);
        var searchVar = document.querySelector("#inputSearch").value;
        if (searchVar) {
          const responseJSON = requestData(getQuery(searchVar));
          jsonToHtml(responseJSON);
        } else {
          printSearchbarEmpty();
        }
    });
});

// next: loading animation while waiting for API response