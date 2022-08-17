// function addtable() {
//     let fname = document.getElementById('name');
//     let price = document.getElementById('price');
//     let howmany = document.getElementById('howmany');
//     let tbody = document.querySelector('tbody');
//     // let tr = document.querySelector('tr');
//     let tr = document.createElement('tr')
//     let strong = document.querySelector('.strong')
//     let res = document.querySelectorAll('.res')
//     let sum = 0





//     if (fname.value == '' || price.value == '') {
//         alert('toldir')
//     }
//     else {
//         for (let i = 0; i < res.length; i++) {
//             sum = sum + +res[i].innerHTML
//         }
//         strong.innerHTML = sum
//         tr.setAttribute('class', 'text-center');
//         let td = document.createElement('td');
//         let td1 = document.createElement('td');
//         let td2 = document.createElement('td');
//         let td3 = document.createElement('td');
//         let td4 = document.createElement('td');
//         td.innerHTML = i;
//         td1.innerHTML = fname.value
//         td2.innerHTML = price.value
//         td3.innerHTML = howmany.value
//         td4.innerHTML = howmany.value * price.value
//         strong.innerHTML =
//             tr.append(td, td1, td2, td3, td4);
//         tbody.appendChild(tr)
//         fname.value = '';
//         price.value = '';
//         howmany.value = ''
//         i++;
//     }
// }
// let i = 1;
let name = document.getElementById('name');
let price = document.getElementById('price');
let howmany = document.getElementById('howmany');
let submit = document.getElementById('submit');
let tbody = document.querySelector('tbody');

let i = 1;

submit.addEventListener('click', function () {
    if (name.value == '' || price.value == '' || price.value <= 0 || howmany.value <= 0 || howmany.value == '') {
        alert('Kataklarni to\'ldiring yoki 0 dan katta qiymat kiriting');
    } else {
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        td5.setAttribute('class', 'res');
        let tr = document.createElement('tr');

        td1.innerHTML = i;
        td2.innerHTML = name.value;
        td3.innerHTML = price.value;
        td4.innerHTML = howmany.value;
        td5.innerHTML = price.value * howmany.value;

        tr.append(td1, td2, td3, td4, td5);
        tbody.appendChild(tr);
        i++;
        name.value = '';
        price.value = '';
        howmany.value = '';

        let strong = document.querySelector('strong');
        let res = document.querySelectorAll('.res');
        let sum = 0;
        for (let i = 0; i < res.length; i++) {
            sum = sum + +res[i].innerHTML;
        }
        strong.innerHTML = sum;
    }
});
