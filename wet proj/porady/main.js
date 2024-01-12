
const postsData = [
    {
        category: 'dog',
        imgSrc: 'img/img05.jpg',
        title: 'Uwaga na kłosy – niebezpieczeństwo, które czyha na łąkach i przydomowych trawnikach',
        date: '13 Czerwca 2023',
        description: 'Wbity kłos u psa? To zdarza się częściej, niż myślisz. Sprawdź, co zrobić, gdy kłos wbił się w skórę psa i jakie zagrożenia wynikają z przedostania się kłosa. Kłosy mają ostro zakończone wąsy, które nie dość, że uniemożliwiają jego cofanie się, to jeszcze sprzyjają głębszejpenetracji tkanek. W zależności od lokalizacji kłosa, pies może wykazywać różne objawy Jak rozpoznać kłos u psa?'
    },
    {
        category: 'cat',
        imgSrc: 'img/img04.jpg',
        title: 'Inhalacja – domowy sposób na złagodzenie skutków przeziębienia u kotów',
        date: '13 Czerwca 2023',
        description: 'Jeżeli nasz kot jest przeziębiony i lekarz stwierdził, że poza tym nie dolega mu nic innego,możemy złagodzić stan stosując inhalacje.Do zabiegu potrzebny będzie transporter, w którym umieścimy pupila na czas inhalacji, mały garnek na roztwór oraz duży ręcznik, którym będziemy mogli przykryć i transporter i garnek. Do przygotowania roztworu potrzebujemy:'
    },
    {
        category: 'gecko',
        imgSrc: 'img/img06.jpg',
        title: 'Gekon jako Zwierzę Domowe: Porady dla Nowych Opiekunów',
        date: '13 Czerwca 2023',
        description: 'Posiadanie egzotycznego zwierzaka, takiego jak gekon, może być fascynującym doświadczeniem. Jednak zanim zdecydujesz się na przyjęcie tego uroczego gadzinka do swojego domu, warto zaznajomić się z kilkoma kluczowymi aspektami opieki. Poniżej znajdziesz kilka porad, które pomogą Ci stworzyć odpowiednie warunki życia dla swojego nowego przyjaciela.'
    },
    {
        category: 'cat',
        imgSrc: 'img/img11.jpg',
        title: 'Inhalacja – domowy sposób na złagodzenie skutków przeziębienia u kotów',
        date: '13 Czerwca 2023',
        description: 'Jeżeli nasz kot jest przeziębiony i lekarz stwierdził, że poza tym nie dolega mu nic innego,możemy złagodzić stan stosując inhalacje.Do zabiegu potrzebny będzie transporter, w którym umieścimy pupila na czas inhalacji, mały garnek na roztwór oraz duży ręcznik, którym będziemy mogli przykryć i transporter i garnek. Do przygotowania roztworu potrzebujemy:'
    },
    {
        category: 'dog',
        imgSrc: 'img/img07.jpg',
        title: 'Uwaga na kłosy – niebezpieczeństwo, które czyha na łąkach i przydomowych trawnikach',
        date: '13 Czerwca 2023',
        description: 'Wbity kłos u psa? To zdarza się częściej, niż myślisz. Sprawdź, co zrobić, gdy kłos wbił się w skórę psa i jakie zagrożenia wynikają z przedostania się kłosa. Kłosy mają ostro zakończone wąsy, które nie dość, że uniemożliwiają jego cofanie się, to jeszcze sprzyjają głębszejpenetracji tkanek. W zależności od lokalizacji kłosa, pies może wykazywać różne objawy Jak rozpoznać kłos u psa?'
    },
    {
        category: 'gecko',
        imgSrc: 'img/img08.jpg',
        title: 'Gekon jako Zwierzę Domowe: Porady dla Nowych Opiekunów',
        date: '13 Czerwca 2023',
        description: 'Posiadanie egzotycznego zwierzaka, takiego jak gekon, może być fascynującym doświadczeniem. Jednak zanim zdecydujesz się na przyjęcie tego uroczego gadzinka do swojego domu, warto zaznajomić się z kilkoma kluczowymi aspektami opieki. Poniżej znajdziesz kilka porad, które pomogą Ci stworzyć odpowiednie warunki życia dla swojego nowego przyjaciela.'
    },
    {
        category: 'cat',
        imgSrc: 'img/img10.jpg',
        title: 'Inhalacja – domowy sposób na złagodzenie skutków przeziębienia u kotów',
        date: '13 Czerwca 2023',
        description: 'Jeżeli nasz kot jest przeziębiony i lekarz stwierdził, że poza tym nie dolega mu nic innego,możemy złagodzić stan stosując inhalacje.Do zabiegu potrzebny będzie transporter, w którym umieścimy pupila na czas inhalacji, mały garnek na roztwór oraz duży ręcznik, którym będziemy mogli przykryć i transporter i garnek. Do przygotowania roztworu potrzebujemy:'
    },
    {
        category: 'gecko',
        imgSrc: 'img/img09.jpg',
        title: 'Gekon jako Zwierzę Domowe: Porady dla Nowych Opiekunów',
        date: '13 Czerwca 2023',
        description: 'Posiadanie egzotycznego zwierzaka, takiego jak gekon, może być fascynującym doświadczeniem. Jednak zanim zdecydujesz się na przyjęcie tego uroczego gadzinka do swojego domu, warto zaznajomić się z kilkoma kluczowymi aspektami opieki. Poniżej znajdziesz kilka porad, które pomogą Ci stworzyć odpowiednie warunki życia dla swojego nowego przyjaciela.'
    },
    {
        category: 'dog',
        imgSrc: 'img/img12.jpg',
        title: 'Uwaga na kłosy – niebezpieczeństwo, które czyha na łąkach i przydomowych trawnikach',
        date: '13 Czerwca 2023',
        description: 'Wbity kłos u psa? To zdarza się częściej, niż myślisz. Sprawdź, co zrobić, gdy kłos wbił się w skórę psa i jakie zagrożenia wynikają z przedostania się kłosa. Kłosy mają ostro zakończone wąsy, które nie dość, że uniemożliwiają jego cofanie się, to jeszcze sprzyjają głębszejpenetracji tkanek. W zależności od lokalizacji kłosa, pies może wykazywać różne objawy Jak rozpoznać kłos u psa?'
    },

];


$(document).ready(function(){
    $('.filter-item').click(function (){

    const value = $(this).attr('data-filter')

    if(value=='all'){
        $('.post-box').show('1000')
    }
    else {
        $('.post-box').not('.' + value).hide('1000')
        $('.post-box').filter('.' + value).show('1000')
    }
    })

    $('.filter-item').click(function (){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    })
})

function generatePost(post) {
    return `
            <div class="post-box ${post.category}">
                <img src="${post.imgSrc}" alt="" class="post-img">
                <h2 class="category">${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</h2>
                <a href="post-page/post-page1.html" class="post-title">${post.title}</a>
                <span class="post-date">${post.date}</span>
                <p class="post-decription">${post.description}</p>
                <div class="profile">
                    <img src="img/profile1.jpg" class="profile-img"></img>
                    <span class="profile-name">Maria Mariowska</span>
                </div>
            </div>`;
}
function generateAllPosts() {
    const postsContainer = document.getElementById('postsContainer');
    postsData.forEach(post => {
        const postHtml = generatePost(post);
        postsContainer.innerHTML += postHtml;
    });
}

generateAllPosts();
