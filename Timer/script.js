function getId(a) {
    return document.getElementById(a)
}

function getClass(a, b) {
    return document.getElementsByClassName(a)[b];
}
//let mes = prompt('write text');
//let res = mes.charAt(0).toUpperCase();
//for(let i=1; i<mes.length;i++){
//    res += mes.charAt(i).toLowerCase()
//}
//console.log(mes);
//console.log(res);
//let str = 'Hello world';
//console.log(str.indexOf('e'));
//console.log(str.indexOf('q'));
//console.log(str.indexOf('world'));
//console.log(str.indexOf('l', 4)); 
//let start = 0
// while(true){
//     let result = str.indexOf('l', start);
//     if(result == -1)break;
//     console.log(result);
//     start  = result + 1;
// }
//let str2 = 'Javascript';
//
//console.log(str2);
//console.log(str2.substring(4));
//console.log(str2.substring(4 , 7));
//console.log(str2.substring(4 , -7));
//let a = ['hello'];
//console.log(a[0][4])
//a.push('Компютор');
////a[1] = ('Компютор');
//console.log(a)
//let style = ['Джаз', 'Блюз'];
//console.log(style);
//style.push('Рок-н-Ролл');
//console.log(style);
//style[1]=('Классика');
//console.log(style);
//alert(style.shift());
//console.log(style);
//style.unshift('Реп','Реггі');
//console.log(style);
//
//let arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
//
//let rand = min + math.floor(Math.random())
//console.log(rand)
//
//
////let rand = Math.round(Math.random()* 100); 
//
//console.log(rand)
//function f2(){
//    let a=1,
//        b=2,
//        c=3;
//    return a+b+c;
//}
//alert(f2()+5)
//let a  = [2 , 3 ,4]
//
//for (let i = 0; i <a.length;i++){
//    a[i] *=  2
//}
//console.log(a)
//
//let c = a.map(function(x,w,z){
//  
////    console.log (z)
////    console.log (w)
//      return x*3
//});
//console.log (c)
//let a = ['2', '-5', '25','-10'];
//let b = [];
//for(let i =0;i<a.length;i++){
//    if(a[i]>=0){
//        b.push(a[i])
//    }
//   
//}
// console.log(a);
// console.log(b);
//
//
//let c = a.filter(function(x){
//    return x>0
//})
//console.log(c);
//let arr = [4 , 5 , 8 , 25];
// 
////false or true
////Перебираєм масив
//             some
// let b = arr.every(function(x){
//     console.log(x);
//    return x>0;
//})
//console.log(b);
//let arr = [4 , 5 , 8 , 25];
//
//let a = arr.reduce(function(x,t,y){
//    console.log('x === '+x)
//    return x
//});
//console.log(a)
//let t = 9;
//
//function x() {
//    if (t > 0) {
//        console.log('більше нуля');
//    }
//    else if (t < 0) {
//        console.log('нижче нуля');
//    }
//    else {
//        console.log('рівна нулю')
//    }
//}
//x()
//                       
//function first(y){
//     console.log(1);
//     y()
//}
//function second(a,b){
//    console.log(a+b);
//
//}
//first(function(){
//    second(5,7);
//});
//second(5,7);
//let hotel = {
//    'name': 'U doma'
//    , 'stars': 3
//    , 'adv': function () {
//        console.log(this.name + ' best hotel. Stars: ' + this.stars);
//    },
//    key : 'Hello'
//};
//
//console.log(hotel.key);
//hotel.adv()
//
//let a = {};
//a.lops = 'gringo';
//
//console.log(a.lops)
//
//
//
//delete hotel.name;
//console.log(hotel)
//let str = 'str';
//console.log(str.charAt(1));
//console.log(str.toUpperCase());
//console.log(str.toLowerCase());
//
//let mes = prompt('Стрічка');
//console.log(mes);
//let res  = mes.charAt(0).toUpperCase();
//for (let i=1;i<mes.length;i++){
//    res += mes[i].toLowerCase( )
//    
//    
//}
//console.log(mes)
//console.log(res
//let str = 'Hello world';
//
//let start = 0;
//while(true){
//    let result = str.indexOf('l', start);
//    if(result == -1)break;
//    console.log(result);
//    start = result + 1;
//}
//let str  = 'Javascript';
//console.log(str);
////копіює стрічку з 4 позиції//
//console.log(str.substring(4)); 
////копіює стрічку з 4 позиції до 7//
//console.log(str.substring(4, 7));  
//console.log(str.substring(4, -7));  
////копіює стрічку з 4 позиції на 6 елементів//
//console.log(str.substr(4, 6));  
//
//console.log(str.slice(4));
////копіює стрічку з 3 позиції і з кінця до 4//
//console.log(str.slice(3, -4));
//function a (frodo, gendalf){
//    if(gendalf == undefined){
//        gendalf = 'тут мав бути текст';
//    }
//    alert(frodo +' '+ gendalf)
//}
//a('Чувак')
//function fun(a){
//    alert('hello '+ a.name+' value дорівнює '+a.value);
//   
//}
// let caunt = 0
//function blabla(element){
//   
//    caunt++;
//    element.innerHTML = 'Наведення на текст '+ caunt +' раз';
//}
//                          ФОРМА
//function valid(form){
//  let fail = false;
//    let name = form.name.value;
//    let password  = form.password.value;
//    let RePassword  = form.RePassword.value;
//    let state  = form.state.value;
//    let email = form.emeil.value;
//    if(name ==''||name ==' '){
//        fail = 'Ви не ввели своє імя'
//    }
//    else if (password ==''||password ==' '){
//        fail = 'Ви не ввели пароль'
//    }
//      else if (email==''||email ==' '){
//        fail = 'Ви не ввели еймейл'
//    }
//    else if (password != RePassword ){
//        fail = 'Паролі не співпадають'
//    }
//     else if (state == ''){
//        fail = 'Specify your gender'
//    }
//    if(fail){
//        alert(fail)
//    }
//    else{
//        window.location = 'https://www.google.com.ua/webhp?ie=UTF-8&rct=j'
//    }
//}
//                          ФОРМА-->
//
//let str  = 'Java script';
////           Робить зі стрічки масив!
//let res = str.split(' ')
//console.log(res);
////           Робить зі масива стрічку!
//let join = res.join(',')
//console.log(join);
//
//
//let fruits  = ['orange', 'apple'];
//let veggies = ['potato', 'onion'];
////                        Зєднання масиву
//let salat = fruits.concat(veggies);
//console.log(salat);
////                       Сортування масиву: 
////                       З заду на перед
//let revers = salat.reverse();
//console.log(revers);
////                        По алфавіту 
//let sort = salat.sort();
//console.log(sort);
////                     Видаляє 1 елемент масиву і повертає його
//let shift = salat.shift();
//console.log(salat);
//console.log(shift);
////                       Добавляє масив на 1 посицію і повертає довжину масиву
//let unshift = salat.unshift('garlic' , 'milc');
//console.log(salat);
//console.log(unshift);
////                     Видаляє останній елемент з масиву і повертає його 
//let pop = salat.pop();
//console.log(salat);
//console.log(pop);
////                     Добавляє елемент в кінець масиву і повертає його довжину
//let push = salat.push('tomato', 'ice cream');
//console.log(salat);
//console.log(push);
////                       Копіює масив з 2 по 5 елемент 
////let slice = salat.slice(2);
//let slice = salat.slice(2, 5);
////                         Копіює масив з кінця 4 елементи
////let slice = salat.slice(-4);
//console.log('Орієнтир',salat);
//console.log(slice);
////                          Видаляє елемент з масиву з якого 2 і скільки 1
////                        І добавляє нові алементи на видаленні місця 
//let splice = salat.splice(2, 1, 'strawberry','cocacola');
//console.log('Новий масив',salat);
//console.log('splice 2, 1',splice);
//                      Багато вимірний масив 
//let bigArr = [10, 20 , [30 , 40]];
//console.log(bigArr[2][0]);
//
//function fun1(button){
//   let newMas = [];
//    let text = getId('text');
//    let text2 = getId('text2')
////   newMas.unshift = text.value
////    console.log(newMas)
//    for(let i=0;i<=1;i++){
//         newMas[i] = text.value
//    }
//    console.log(newMas)
////    alert(text.value)
////     if (text == 'log'){
////         alert('hello')
////     }
//} ;
//let push = document.querySelector('#push');
//let form = document.querySelector('#form');
//let bigArr = [];
//push.addEventListener('click', function(){
//   let log = document.querySelector('#login').value;
//   let pass = document.querySelector('#pass').value;
//   let email= document.querySelector('#email').value;
//    if(log !='' && pass !='' && email !=''){
//        let smallArr = [];
//        smallArr.push(log,pass,email);
//        bigArr.push(smallArr);
////        зачищаєм елементи форми
//        form.reset(); 
//         console.log(smallArr);
//        console.log(bigArr)
//    }
//    else{
//        alert('Заповінть поля')
//    }
//    
//})
//let  str = ['hello','apple','rogue'];
//str.sort()
//
//console.log(str)
//function pomp (a, b){
//    if(a>b)return 1;
//    if(a<b)return -1;
//}
//let mas = [1, 15 ,2];
//mas.sort(pomp);
//console.log(mas)
//let user ={
//    name:'Volody',
//    age:30
//}
////let keys = Object.keys(user);
//console.log(user);
//let obj1 = new Object();
//let obj2 = {
//    name: 'Yaroslav',
//    age: 22
//}
//
//console.log(obj2.name);
//console.log(obj2['age']);
//console.log(obj2);
//let obj4 = new Object();
//obj4.name = 'Anna';
//obj4.age = '18';
//console.log(obj4);
//
//let obj5 = {
//    userName: 'Rex',
//    userPassword: 'Planet',
//    'date of birth': {
//        date: '01',
//        month: 'October',
//        year: '2019'
//    }
//}
//console.log(obj5["date of birth"]);
//obj5.userPassword= 'Month';
//console.log(obj5);
//obj5.city = 'Lviv';
//console.log(obj5);
//delete obj5.city;
//console.log(obj5["date of birth"].month);
//
//if('userName' in obj5){
// delete obj5.userName 
//    console.log(obj5);
//}
//else{
//    alert('empty')
//}
//let obj = {};
//obj.firstName = 'Sabrina';
//obj.secondName = 'Elza'
//obj.address = {};
//obj.address.city = 'Lviv';
//obj.address.sstreet = {};
//obj.address.sstreet.home = 'Lichakivska';
//obj.address.sstreet.number = '119';
//
//console.log('obj1',obj);
//let obj2 = obj;
//console.log('obj2', obj2)
//obj2.firstName = 'Borus';
//console.log('obj1',obj);
//console.log('obj2', obj2);
//
//let obj3 = {};
//for(let key in obj){
//    obj3[key] = obj[key];
//}
//
//obj3.firstName = 'Anna'
//console.log('obj1',obj);
//console.log(obj3);
//function f1(){
//
//        document.write(this.name + ' from ' + this.city);
//    
//}
//
//function SomePerson(){
//    this.name = 'Natalia',
//    this.city = 'Lviv'
////    this.show = function(){
////        document.write(this.name + ' from ' + this.city);
////    }
//    this.show = f1
//
//}
//
//let nata = new SomePerson();
//console.log(nata);
//let nata1 = new SomePerson();
//console.log(nata1.show());
//let students = [];
//
//function Student(name, sname ,phone ,age ,group){
//    this.userName = name || 'name1';
//    this.userSname = sname || 'Sname1';
//    this.userPhone = phone || '';
//    this.userAge = age || '18';
//    this.userGroup = group || 'Sname1';
//}
//let s1 = new Student('Max', 'Yura', '+38057874654', '22', 'вт-чт-16');
//console.log(s1)
//let s2 = new Student('Max', 'Yura', '+38057874654', '22', 'вт-чт-16');
//
//students.push(s1);
//students.push(s2);
//console.log(students);
//
//let text1 = getId('text1');
//let text2 = getId('text2');
//let text3 = getId('text3');
//let text4 = getId('text4');
//let text5 = getId('text5');
//let mas = ['Art']
//function f4(){
//    
//    mas.push(text1.value)
////    if(text1.value == 's'){
////        alert('ss')
////    }
////    text1.style.background = 'yellow'
//}
//
//console.log(mas)
//let mas = {};
//let mas2 = {
//    'one': 12,
//    'hello': 'world',
//    prim:200,
//    'double key': 'Hi'
//};
//console.log(mas2['prim']);
//console.log(mas2.one);
//mas2.one = 9000;
//console.log(mas2.one);
//console.log(mas2['double key']);
//
//let ap = 'hello';
//console.log(mas2[ap]);
//let out = getId('out');
//
////Виводим ключі обєктів і їх значення
//for(let key in mas2){
//    out.innerHTML += key +'----'+mas2[key]+ '<br>';
//}
//
//let man = {
//    name: 'Vika',
//    age: 23,
//    id: '2581654',
//    sex: 'woman'
//}
//let man2 = {
//    name: 'Vika',
//    age: 23,
//    id: '2581654',
//    sex: 'woman',
//    year: function(){
//        return 2019 - this.age;
//    }
//}
//
//console.log(man2.year())
//
//
//let m  = {
//    mas:[5, 6],
//    'sum': function(){
//        let sum = 0;
//        for(let i=0; i<this.mas.length;i++){
//            sum = sum + this.mas[i];
//        }
//        return sum;
//    }
//}
//console.log(m.sum())
// let goods = {
//     '28291':{
//         name: 'Банан',
//         cost: 30,
//         img:'https://vegstore.com.ua/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/1/1/116_1.jpg',
//         sklad: 'Нема'
//         
//     },
//      '28292':{
//         name: 'Клубніка',
//         cost: 50,
//         img:'https://24tv.ua/resources/photos/news/610x344_DIR/201705/819910.jpg?201902114213',
//         sklad: 'Так'
//         
//     }
// };
//console.log(goods);
//let out = '';
//for(var key in goods){
//    out+='Назва: ' +goods[key].name + '<br>';
//    out+='Ціна: ' +goods[key].cost + '<br>';
//    out+='Склад: ' +goods[key].sklad + '<br>';
//    out+= '<img src ="' +goods[key].img+'">';
//    out+= '<hr>'
//    
//}
//document.getElementById('out').innerHTML = out;
//document.onclick = function(event){
//    console.log(event.target.tagName);
//
//    if(event.target.tagName == 'IMG'){
//        event.target.classList.add('bordered');
//    }
//}
//function user(time){
//    let star =0;
//     time = Math.round(time*1000/100);
//    let userProgres = document.getElementById('pro');
//    let uno = setInterval(function(){
//        if(star>100){
//            clearInterval(uno)
//        }
//        else{
//         userProgres.value = star;
//         
//        }
//         star++; 
//    },time)
//}
//user(5)
//
//document.getElementById('result').onclick = getResult;
//
//function getResult(){
//    let menu = document.getElementsByClassName('menu');
//    let cost = 0;
//    let kkal = 0;
//    for(let i=0;i<menu.length;i++){
//        if(menu[i].cheked){
//            cost += parseFloat(menu[i].getAttribute('data-cost'));
//            kkal += parseFloat(menu[i].getAttribute('data-kkal'));
//        }
//    }
//    document.getElementById('cost').innerHTML = cost;
//    document.getElementById('cost').innerHTML = kkal;
//    
//}
//
//
//let name = document.getElementById('name');
//let pas = document.getElementById('pas');
//let mas = 
//document.getElementById('but').onclick = function(){
//    
//}
//let arr = [5, 3 ,1 ,-8,-1 ];
//
//function rin(a , b){
//    return a - b
//}
//arr.sort(rin);
//console.log(arr);
//let arr = ['host' , 'Hello', 'Lviv'];
//let arrSorted = arr.slice().sort();
//
//console.log(arrSorted);
//console.log(arr);
//let arr = [1, 2 , 3 ,4 ,5];
//function random(a , b){
//    return Math.random() - 1.5;
//    
//}
//arr.sort(random);
//console.log(arr)
//var arr = [1, 2, 3, 4, 5];
//
//function compareRandom(a, b) {
//  return Math.random() - 0.5;
//}
//
//arr.sort(compareRandom);
//console.log(arr)
//function compareAge(personA, personB){
//    return personA.age - personB.age
//}
//let vas = {
//    name:'Назар',
//    'age': '19',
//}
//let vass = {
//    name:'Оля',
//    'age': '18',
//}
//let vars = {
//    name:'Анна',
//    'age': '16',
//}
//let people = [  'vasya' , 'masha' , 'vovochka' ];
//people.sort(compareAge);
//for(let i=0;i<people.length;i++){
//    console.log(people[i].name);
//}
//function compareAge(personA, personB) {
//  return personA.age - personB.age;
//}
//
//// проверка
//var vasyaa = { name: "Вася", age: 23 };
//var masha = { name: "Маша", age: 18 };
//var vovochka = { name: "Вовочка", age: 6 };
//
//var people = [ vasyaa , masha , vovochka ];
//
//people.sort(compareAge);
//
//// вывести
//for(var i = 0; i < people.length; i++) {
//  console.log(people[i].name); // Вовочка Маша Вася
//}
//let nit = {
//    name:'Sem',
//    age: 20
//}
//let bit = {
//    name: 'Roma',
//    age: 21
//}
//let hub = [ nit , bit];
//
//for(let i=0;i<hub.length;i++){
//    console.log(hub[i].name)
//}
//let list = {
//    value: 1
//    , next: {
//        value: 2
//        , next: {
//            value: 3
//            , next: {
//                value: 4
//                , next: null
//            }
//        }
//    }
//}
//
//function print(s) {
//    if (s.next) {
//        print(s.next);
//    }
//    console.log(s.value);
//}
//print(list);
//document.getElementById('sliderLeft').onclick = sliderLeft;
//let left = 0;
//let timer = 0;
//
//function autoSlider() {
//    timer = setTimeout(function () {
//        left -= 128
//        let polosa = getId('polosa');
//        polosa.style.left = left + 'px';
//        if (left < -384) {
//            left = +128;
//            clearTimeout(timer);
//        }
//        autoSlider()
//    }, 2000);
//}
//autoSlider()
//function sliderLeft() {
//    left -= 128
//    let polosa = getId('polosa');
//    polosa.style.left = left + 'px';
//    if (left < -384) {
//        left = +128;
//        clearTimeout(timer);
//    }
//    autoSlider()
//}
//setTimeout(function(){
//    document.write('<h1>setTimeout</h1>')
//}, 2000);
//setInterval(function(){
//    let a = document.write('<h2>setTimeout</h2>')
//
//}, 2000);
//function f1(){
//    let p = document.createElement('p');
//    p.innerHTML = 'some text';
//    document.querySelector('#box').appendChild(p);
//    if( document.querySelector('#box').children.length ==5){
//        clearInterval(set);
//    }
//}
//
//let set = setInterval(f1, 1000);
//let d = new Date();
//console.log(d);
//console.log(d.getDay());
//console.log(d.getDate());
//
//let arrDay = ['sunday', 'monday', 'tuesday', 'wednesday','thursday','friday','saturday'];
//console.log(arrDay[d.getDay()])
//let box = document.querySelector('box');
//let p = document.createElement('p');
//p.innerHTML = 'Text';
//document.querySelector('box').appendChild(p);
//console.log(document.querySelector('box').children.length)
//setInterval(function(){
//    console.log('Hello')
//},2000)
//function f1(){
//    console.log('hello')
//  
//}
//setInterval(f1,2000)
//let a = 0;
//
//getId('sliderLeft').onclick = function(){
//    let polosa = getId('polosa');
//    a -= 128
//    polosa.style.left = a+'px'
//    if(a<-384){
//        a = 0;
//    }
//}
//let a = 0;
//let f1 = function () {
//    let polosa = getId('polosa');
//    a -= 128
//    polosa.style.left = a + 'px'
//    if (a < -384) {
//        a = 0;
//    }
//    
//}
//let b = setInterval(f1, 1000);
//
//let slidertStop = getId('sliderStop')
//let slidertPlay = getId('sliderPlay')
//slidertStop.onclick = function () {
//    clearInterval(b);
////    slidertStop.style.backgroundColor = 'red';
////    slidertPlay.style.backgroundColor = 'white';
//}
//getId('sliderPlay').onclick = function () {
//    b = setInterval(f1, 1000);
////    slidertPlay.style.backgroundColor = 'yellow';
////    slidertStop.style.backgroundColor = 'white';
//}
//let buttons = document.querySelectorAll('button');
//
//for (let i = 0;i<buttons.length;i++){
//    let button = buttons[i];
//    button.innerText = i;
//    button.onclick = function(e){
//        console.log(i)
//    }
//}
//document.getElementById('r1').oninput = genaration;
//let ren = document.getElementById('r1');
//ren.oninput = function(){
//   let out = document.getElementById('out');
//   let div = document.getElementById('test');
//    div.style.borderRadius = ren.value+'px';
//    out.innerHTML = 'border-radius: '+ ren.value+'px';
// 
//
//}
//document.onmousemove = function () {
//    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="img/1.png" id="cat" alt="">');
//    let cat = document.getElementById('cat');
//    cat.style.position = 'fixed';
//    document.onmousemove = function (event) {
//        
//        cat.style.left = event.clientX + 20 + 'px';
//        cat.style.top = event.clientY + 20 + 'px';
//    }
//}
let sdvig = 0;
let test = document.getElementById('test');

function m() {
    sdvig += 1;
    test.style.marginLeft = sdvig + 'px';
    if (test.style.marginLeft == 25 + 'px') {
        test.style.backgroundColor = 'yellow';
    }
    if (test.style.marginLeft == 50 + 'px') {
        test.style.backgroundColor = 'green';
    }
}
let timer = setInterval(m, 50);
test.ondblclick = function () {
        test.innerHTML = 'Goo'
        timer = setInterval(m, 50);
    test.style.backgroundColor = 'blue';
    }
    ////////////////////////////////////////////////////Таймер/////////////////////////
let second = 60;
let minuts = 60;
let hour = 1;

function obr() {
    document.getElementById('out').innerHTML = hour + ':' + minuts + ':' + second;
    second--;
    if (second < 0) {
        minuts -= 1
        second = 60
    }
    if (minuts < 0) {
        hour -= 1
        minuts = 60
    }
    if (hour < 0 || minuts < 0 || second < 0) {
        clearInterval(time);
        alert('End timer')
    }
}
obr()
let time = setInterval(obr, 1000);
document.getElementById('stop').onclick = function () {
    test.style.backgroundColor = 'red';
    clearInterval(timer);
    clearInterval(time);
    test.innerHTML = 'Stop and click me';
}
document.getElementById('start').onclick = function () {
    time = setInterval(obr, 1000);
}
getId('install').onclick = function () {
    second += +prompt('Задай секунди');
    minuts += +prompt('Задай хвилини');
    hour += +prompt('Задай години');
}