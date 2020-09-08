const nodeWithChildren = (key, value) => {
  return `
    <div class="card">
      <div class="card-header" id="heading${key}">
        <h5 class="mb-0">
          <button class="btn btn-link" data-toggle="collapse" data-target="#${key}" aria-expanded="false" aria-controls="${key}">
            ${key}
          </button>
        </h5>
      </div>
      <div id="${key}" class="collapse" aria-labelledby="heading${key}" data-parent="#accordion">
        <div class="card-body card-body--textColor">
          ${JSON.stringify(value)}
        </div>
      </div>
    </div>
  `;
};

const nodeWithoutChildren = (key, value) => {
  return `
    <div class="card">
      <div class="card-header" id="heading${key}">
        <h5 class="mb-0">
          <button class="btn w-100 d-flex flex-row justify-content-between align-items-center" disabled>
            <div class="card__left">${key}</div> 
            <div class="card__right">${value}</div>
          </button>
        </h5>
      </div>
    </div>
  `;
};

/**
 * @description Render specific accordion elemen based off of if the Node has a children.
 * @param {string} key
 * @param {string} value
 */
const renderCard = (key, value) => {
  return typeof value == 'object'
    ? nodeWithChildren(key, value)
    : nodeWithoutChildren(key, value);
};

const renderList = (content) => {
  const accordion = document.getElementById('accordion');

  // ITERATE OVER OBJECT ITEMS
  accordion.innerHTML = ''; // RESET ACCORDION INNERHTML
  const contentElems = Object.keys(content);

  contentElems.map((key) => {
    accordion.insertAdjacentHTML('beforeend', renderCard(key, content[key]));
  });
};

export { renderList };
