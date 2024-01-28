async function loadForm(url) {
  const response = await fetch(url);
  const form = await response.json();
  return form;
}

function generateForm(form) {
  const container = document.getElementById('container');
  const title = document.createElement('h2');
  title.textContent = form.title;
  container.appendChild(title);
  if (form.description) {
    const description = document.createElement('p');
    description.textContent = form.description;
    container.appendChild(description);
  }
  form.fields.forEach(field => {
    const label = document.createElement('label');
    label.textContent = field.label;
    if (field.attrs.type === 'text') {
      const input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('name', field.attrs.name);
      label.appendChild(input);
    } else if (field.attrs.type === 'radio') {
      field.attrs.variants.forEach(variant => {
        const input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', field.attrs.name);
        input.setAttribute('value', variant.value);
        label.appendChild(input);

        const variantLabel = document.createElement('span');
        variantLabel.textContent = variant.label;
        label.appendChild(variantLabel);
      });
    }
    container.appendChild(label);
  });
  form.buttons.forEach(button => {
    const btn = document.createElement('input');
    btn.textContent = button;
		if(button === 'clear'){
			btn.setAttribute('type', 'reset');
		} else {
			btn.setAttribute('type', button);
		}
    container.appendChild(btn);
  });
}

async function onButtonClick() {
  const form = await loadForm('./data/form-test-'+ this.value +'.json');
	console.log(form);
  generateForm(form);
}

const buttons = document.querySelectorAll('#button');
for  (let button of buttons) {
	button.addEventListener('click', onButtonClick);
}

