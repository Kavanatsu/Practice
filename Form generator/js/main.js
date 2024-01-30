async function loadForm(url) {
  const response = await fetch(url);
  const form = await response.json();
  return form;
}

function generateForm(form) {
  const container = document.getElementById('container');
	
	const delData = document.querySelector('form');
	if(delData){
		container.removeChild(delData);
	}

	const formContainer = document.createElement('form');
	container.appendChild(formContainer);

  const title = document.createElement('h2');
  title.textContent = form.title;
  formContainer.appendChild(title);

  if (form.description) {
    const description = document.createElement('p');
    description.textContent = form.description;
    formContainer.appendChild(description);
  }

  form.fields.forEach(field => {
    const label = document.createElement('label');
    label.textContent = field.label;
		label.setAttribute('class', 'question');
		if(field.attrs.type === 'select') {
			const select = document.createElement('select');
			select.setAttribute('name', field.attrs.name);
			field.attrs.variants.forEach(variant => {
				const option = document.createElement('option');
				option.setAttribute('value', variant.value);
				option.textContent = variant.label;
				select.appendChild(option);
			})
			label.appendChild(select);
		} else {
			if (field.attrs.type === 'radio' || field.attrs.type === 'checkbox') {
				field.attrs.variants.forEach(variant => {
					const variantLabel = document.createElement('label');
					variantLabel.textContent = variant.label;
					variantLabel.setAttribute('class', 'variant');
					label.appendChild(variantLabel);
					const variantInput = document.createElement('input');
					variantInput.setAttribute('type', field.attrs.type);
					variantInput.setAttribute('name', field.attrs.name);
					variantInput.setAttribute('value', variant.value);
					variantLabel.appendChild(variantInput);		
				})
			}	else {
				const input = document.createElement('input');
			input.setAttribute('type', field.attrs.type);
			input.setAttribute('name', field.attrs.name);
			label.appendChild(input);
			}			
		}
    formContainer.appendChild(label);
  });

	const btnWrap = document.createElement('div');
	btnWrap.setAttribute('class', 'btn-wrap');
	formContainer.appendChild(btnWrap);
  form.buttons.forEach(button => {
    const btn = document.createElement('input');
    btn.textContent = button;
		if(button === 'clear'){
			btn.setAttribute('type', 'reset');
		} else {
			btn.setAttribute('type', button);
		}
    btnWrap.appendChild(btn);
  });
}

async function onButtonClick() {
  const form = await loadForm('./data/form-test-'+ this.value +'.json');
  generateForm(form);
}

const buttons = document.querySelectorAll('#button');
for  (let button of buttons) {
	button.addEventListener('click', onButtonClick);
}

