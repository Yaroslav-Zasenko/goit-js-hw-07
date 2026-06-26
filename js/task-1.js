const list = document.querySelectorAll('.item');
const total = list.length;
console.log(`Number of categories: ${total}`);
list.forEach(item => {    
    const title = item.querySelector('h2').textContent;
    console.log(`Category: ${title}`);
    const totalitem = item.querySelectorAll('li').length;
    console.log(`Elements: ${totalitem}`);  
});