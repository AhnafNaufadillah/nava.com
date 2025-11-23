const cards = document.querySelectorAll('.card');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const description = document.querySelector('.description');
const pageNumber = document.querySelector('.page-number');

let currentIndex = 0;

const contentData = [
    {
        bgImage: 'images/bg1.jpg',
        title: 'GUNUNG MALABAR',
        subtitle: 'Pangalengan - Kabupaten Bandung - Jawa Barat',
        description: 'Gunung Malabar adalah gunung berapi yang tidak aktif di Pangalengan, Kabupaten Bandung, Jawa Barat, dengan puncak setinggi 2.343 meter di atas permukaan laut.'
    },
    {
        bgImage: 'images/bg2.jpg',
        title: 'GUNUNG ARTAPELA',
        subtitle: 'Desa Sukapura - Kecamatan Kertasari - Kabupaten Bandung - Jawa Barat',
        description: 'Gunung Artapela adalah salah satu destinasi pendakian populer di Kabupaten Bandung, Jawa Barat, yang memiliki ketinggian 2.194 meter di atas permukaan laut.'
    },
    {
        bgImage: 'images/bg3.jpg',
        title: 'GUNUNG BURANGRANG',
        subtitle: 'Kecamatan Cisarua - Kabupaten Bandung Barat - Jawa Barat',
        description: 'Gunung Burangrang adalah gunung api mati yang terletak di perbatasan Kabupaten Bandung Barat dan Kabupaten Purwakarta, Jawa Barat. Dengan ketinggian 2.050 meter di atas permukaan laut.'
    },
    {    
        bgImage: 'images/bg4.jpg',
        title: 'GUNUNG SANGAR',
        subtitle: 'Desa Mekar Jaya - Kecamatan Arjasari - Kabupaten Bandung - Jawa Barat',
        description: 'Gunung Sangar adalah sebuah gunung kecil yang terletak di Kabupaten Bandung, Jawa Barat. Dengan ketinggian sekitar 1.690 meter di atas permukaan laut '
    },
    {
        bgImage: 'images/bg5.jpg',
        title: 'GUNUNGGGG      AUL',
        subtitle: 'Soreang - Kecamatan Soreang - Kabupaten Bandung - Jawa Barat',
        description: 'Gunung Aul adalah sebuah gunung kecil yang terletak di wilayah Kecamatan Kutawaringin, Kabupaten Bandung, dekat dengan Soreang. Dengan ketinggian sekitar 1.201 meter di atas permukaan laut.'
    },
    {
        bgImage: 'images/bg6.jpg',
        title: 'GUNUNGGG      SINGA',
        subtitle: 'Soreang - Kecamatan Soreang - Kabupaten Bandung - Jawa Barat',
        description: 'Gunung Singa adalah sebuah bukit di Soreang, Kabupaten Bandung, Jawa Barat, yang terkenal karena bentuknya yang menyerupai kepala singa dengan kepala menengadah, sehingga dinamakan Gunung Singa oleh masyarakat setempat. Bukit ini memiliki ketinggian sekitar 1.033 hingga 1.089 MDPL.'
    },
    {
        bgImage: 'images/bg7.jpg',
        title: 'GUNUNG BUKIT TUNGGUL',
        subtitle: 'Cipanjalu - Kecamatan Cilengkrang - Kabupaten Bandung - Jawa Barat',
        description: 'Gunung Bukit Tunggul adalah puncak tertinggi di Bandung Utara dengan ketinggian sekitar 2.209 mdpl dan merupakan sisa dari letusan Gunung Sunda Purba'
    },
    {
        bgImage: 'images/bg8.jpg',
        title: 'GUNUNG MANGLAYANG',
        subtitle: 'Ciporeat - Kecamatan Cilengkrang - Kabupaten Bandung - Jawa Barat',
        description: 'Gunung Manglayang adalah gunung berapi kerucut non-aktif yang terletak di perbatasan Kabupaten Bandung dan Kabupaten Sumedang, Jawa Barat, dengan ketinggian sekitar 1.818 hingga 1.835 meter di atas permukaan laut (mdpl).'
    },
    {
        bgImage: 'images/bg9.jpg',
        title: 'GUNUNG PANGRADINAN',
        subtitle: 'Kecamatan Cikancung - Kabupaten Bandung - Jawa Barat',
        description: 'Gunung Pangradinan adalah gunung di Kecamatan Cikancung, Kabupaten Bandung, Jawa Barat, dengan ketinggian sekitar (1.236) mdpl yang terkenal karena sabana hijau dan pemandangannya yang indah.'
    },
    {
        bgImage: 'images/bg10.jpg',
        title: 'GUNUNG PAPANDAYAN',
        subtitle: 'Kecamatan Cisurupan - Kabupaten Garut - Jawa Barat',
        description: 'Gunung Papandayan adalah gunung berapi aktif yang populer sebagai tujuan wisata dan pendakian, berlokasi di Kabupaten Garut, Jawa Barat. Dikenal karena jalurnya yang relatif landai dan fasilitasnya yang lengkap, gunung ini sangat cocok untuk pendaki pemula.'
    },
    {
        bgImage: 'images/bg11.jpg',
        title: 'GUNUNG CIKURAY',
        subtitle: 'Dangiang - Kecamatan Cilawu - Kabupaten Garut - Jawa Barat',
        description: 'Gunung Cikuray adalah gunung berapi tipe stratovolcano yang sudah tidak aktif yang terletak di Kabupaten Garut, Jawa Barat. Gunung ini merupakan gunung tertinggi di Garut dan tertinggi keempat di Jawa Barat, dengan ketinggian 2.821 meter di atas permukaan laut (mdpl).'
    },
    
    
];

function updateContent(index) {
    const data = contentData[index];
    // Memastikan path gambar latar benar (tanda petik ganda ditambahkan)
    container.style.backgroundImage = `url("${data.bgImage}")`; 
    title.textContent = data.title;
    subtitle.textContent = data.subtitle;
    description.textContent = data.description;
    pageNumber.textContent = (index + 1).toString().padStart(2, '0');
}

function updateCards() {
    cards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentIndex) {
            card.classList.add('active');
        }
    });

    const cardContainer = document.querySelector('.card-container');
    const activeCard = document.querySelector('.card.active');
    
    // Logika untuk menggeser container agar kartu aktif berada di tengah
    if (activeCard) {
        const activeCardOffset = activeCard.offsetLeft;
        const containerCenter = cardContainer.offsetWidth / 2;
        const activeCardCenter = activeCard.offsetWidth / 2;
        
        // Menghitung jumlah pergeseran (Active Card Center - Container Center)
        const scrollAmount = activeCardOffset - containerCenter + activeCardCenter;
        
        // Menerapkan pergeseran
        cardContainer.style.transform = `translateX(-${scrollAmount}px)`;
    }
}

nextBtn.addEventListener('click', () => {
    // Pastikan tidak melebihi batas data
    currentIndex = (currentIndex + 1) % contentData.length; 
    updateContent(currentIndex);
    updateCards();
});

prevBtn.addEventListener('click', () => {
    // Pastikan tidak kurang dari batas data
    currentIndex = (currentIndex - 1 + contentData.length) % contentData.length;
    updateContent(currentIndex);
    updateCards();
});

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        currentIndex = index;
        updateContent(currentIndex);
        updateCards();
    });
});

// Inisialisasi tampilan awal
updateContent(currentIndex);
updateCards();