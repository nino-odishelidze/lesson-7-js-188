let acordiione = document.querySelectorAll('.containeracordion')

acordiione.forEach(function(item){
    item.addEventListener('click',function(){
        // console.log(this);
        item.classList.toggle('active')
        
    })
})