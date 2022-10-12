let books = [
    {
        book: 'Səfillər',
        author: 'Viktor Hüqo',
        id: 1
    },
    {
        book: 'Kimyagər',
        author: 'Paulo Coelho',
        id: 2
    },
    {
        book: 'İçimizdəki şeytan',
        author: 'Sabahattin Ali',
        id: 3
    },
    {
        book: 'Şəkər portağalı',
        author: 'Joze Mauru di Vaskonselos',
        id: 4
    },
    {
        book: 'Bülbülü öldürmək',
        author: ' Harper Li',
        id: 5
    }, {
        book: 'Min möhtəşəm günəş',
        author: 'Xalid Hüseyni',
        id: 6
    }
];

let inp = document.getElementById('inp');
let lister = document.getElementById("list");
let fltr = "";
function Add() {
    fltr = books.filter(function (item) {
        return (
            item.book.toLocaleLowerCase().includes(inp.value.toLocaleLowerCase()) ||
            item.author.toLocaleLowerCase().includes(inp.value.toLocaleLowerCase())
        );

    })
    listf(fltr);


}
function listf(yeniArray) {
    let nmbr = 0;
    let data = "";
    yeniArray.forEach(function (item) {
        data += `
            <tr>
            <th scope="row"> ${nmbr += 1} </th>
            <td>${item.book}</td>
            <td>${item.author}</td>
            <td> ${item.id} </td>
          </tr>
            `
    })
    lister.innerHTML = data;
};


