/* -створити форму з інпутами для name та age.
    При відправці форми записати об'єкт в localstorage*/
/*
    let {name, age} = document.forms.user;
    let button = document.getElementById('button');
    let key = 'key';

    let submit = (name, age) => {
        let object = {
            name,
            age
        }

        localStorage.setItem(key, JSON.stringify(object));
    }

    button.onclick = (ec) => {
        submit(name.value, age.value)
    }
*/

/*  -створити форму з інпутами для model,type та volume автівки.
    при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.*/
/*
    let {model, type, volume} = document.forms.car;
    let button = document.getElementById('btn');
    let key = 'key';

    let submit = (model, type, volume) => {
        let storage = JSON.parse(localStorage.getItem(key)) || [];
        storage.push({ model, type, volume });
        localStorage.setItem(key, JSON.stringify(storage));
    }

    button.onclick = (ec) => {
        submit(model.value, type.value, volume.value);
    }
*/