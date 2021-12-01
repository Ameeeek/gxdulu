const iy = document.getElementById('button')
const ga = document.getElementById('button-random')
const tulisan = document.getElementById('tulisan')
function gx(){
    console.log("helo")
}
function iyah(){
    const para = document.createElement('h1')
    const node = document.createTextNode('maaf gx dulu, ada hati yang harus kujaga 🙏 ')
    para.appendChild(node)
    const element = document.getElementById('groupTulisan')
    element.appendChild(node)
    console.log('hai')
    let x = document.createElement('img')
    const gambar = document.getElementById('gambar')
    x.setAttribute('src', 'sumi.png')
    x.setAttribute('height', '70%')
    x.setAttribute('width', '50%')
    x.setAttribute('alt', 'sumi')
    gambar.appendChild(x)
    tulisan.style.display = 'none'
    iy.style.display = 'none'
    ga.style.display = 'none'
}
// function pindah(){
//     console.log("ey you hover on me bro, get out!")
//     ga.style.margin = i + 'rem';
//     console.log(i)
// }

function pindah(id){
    var mau = document.getElementById('button-random');
    var i = Math.floor(Math.random()*300) + 1;
    var j = Math.floor(Math.random()*100) + mau.offsetTop;
    id.style.left = i + 'px';
    id.style.top = j + 'px';
    console.log(i)
    console.log(j)
}